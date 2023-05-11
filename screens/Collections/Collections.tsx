import React, { useCallback, useEffect, useMemo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Octicons } from '@expo/vector-icons'

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'


import { StackParamList } from '../../App'

import { Theming, theming } from '../../utils/theme'
import { State } from '../../store/store'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { setCompleted } from '../../store/slice/flashcards'

type ButtonProps = {
  collectionKey: string;
}



export function Collections() {
  const dispatch = useDispatch();

  const flashcards = useSelector((state: State) => state.flashcards.items)

  const mode = useSelector((state: State) => state.theme.mode);
  const styles = styling(theming(mode));

  useEffect(() => {
    // @ts-ignore eslint-disable-next-line 
    dispatch(loadData())
  }, [dispatch])

  return (
    <View style={styles.container}>
      {Object.keys(flashcards).map(key =>
        <CollectionButton key={key} collectionKey={key} />
      )}
    </View>
  )
}


type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<StackParamList, 'collection'>,
  StackNavigationProp<StackParamList>
>;

const CollectionButton = ({ collectionKey }: ButtonProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const { items: flashcards, completed } = useSelector((state: State) => state.flashcards)
  const mode = useSelector((state: State) => state.theme.mode);
    const styles = styling(theming(mode));


  const { name, translation, icon } = useMemo(() => flashcards[collectionKey], [])

  const handlePress = useCallback(() => navigation.navigate('collection', { name, key: collectionKey }), [name, collectionKey])

  return (
    <TouchableOpacity style={styles.collection} onPress={handlePress}>
      <Text style={styles.collectionLabel}>{name}</Text>
      <Text style={styles.collectionTranslation}>{translation}</Text>
      {icon &&
        <Image
          style={styles.icon}
          source={icon}
        />
      }
      {completed[collectionKey] &&
        <Octicons name="check-circle" size={28} color="#119179" style={styles.completedIcon} />
      }
    </TouchableOpacity>
  )
}


const styling = (theme: Theming) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.l,
    paddingTop: theme.spacing.s
  },
  collection: {
    position: 'relative',
    flexGrow: 1,
    flexBasis: '45%',
    minHeight: 150,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    marginHorizontal: theme.spacing.xs,
    marginVertical: theme.spacing.xs,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    ...theme.shadows.basicShadow,
  },
  collectionLabel: {
    fontFamily: 'bold',
    color: theme.colors.text,
    fontSize: 16
  },
  collectionTranslation: {
    fontFamily: 'medium',
    color: theme.colors.secondaryText,
    fontSize: 14
  },
  icon: {
    position: 'absolute',
    bottom: theme.spacing.s,
    right: theme.spacing.s,
    width: 60,
    height: 60,
  },
  completedIcon: {
    position: 'absolute',
    bottom: theme.spacing.s,
    left: theme.spacing.s,
  }
})


const loadData = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const completed = await AsyncStorage.getItem('completedFlashcards')

    if (completed) {
      const formattedCompleted = JSON.parse(completed)
      dispatch(setCompleted({ items: formattedCompleted }))
    }
  }

  catch (e) {
    Alert.alert('Не удалось загрузить выполненные карточки', 'Попробуйте повторить позже')
  }
}