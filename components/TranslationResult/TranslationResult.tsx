import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../../utils/colors'
import { Octicons } from '@expo/vector-icons'
import { HistoryItem } from '../../store/slice/history'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSaved } from '../../store/slice/saved'
import { State } from '../../store/store'

type Props = {
    item: HistoryItem
}

export const TranslationResult: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch()

    const savedItems = useSelector((state: State) => state.saved.items)
    const isSaved = savedItems.some(savedItem => savedItem.id === item.id)
    const icon = isSaved ? 'star-fill' : 'star'

    const starItem = useCallback(async () => {
        let newSavedItems
        if (isSaved) {
            newSavedItems = savedItems.filter(savedItem => savedItem.id !== item.id)
        }
        else {
            newSavedItems = [item, ...savedItems]
        }
        await AsyncStorage.setItem('saved', JSON.stringify(newSavedItems))

        dispatch(setSaved({ items: newSavedItems }))
    }, [dispatch, savedItems, item])

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={4}>{item.text}</Text>
                <Text style={styles.subtitle} numberOfLines={4}>{item.translatedText}</Text>
            </View>

            <TouchableOpacity style={styles.iconContainer} onPress={starItem}>
                <Octicons name={icon} size={24} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 20,
        flexDirection: 'row',
        borderColor: colors.secondary,
        borderWidth: 1,
        borderTopWidth: 0,
        backgroundColor: colors.white
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        color: colors.text,
        fontFamily: 'bold',
    },
    subtitle: {
        color: colors.text,
        fontFamily: 'medium',
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})