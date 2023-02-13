import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../../utils/theme'
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
        const newSavedItems = isSaved ? savedItems.filter(savedItem => savedItem.id !== item.id) :
            [item, ...savedItems]
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
                <Octicons name={icon} size={24} color={theme.colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: theme.spacing.s,
        paddingVertical: theme.spacing.l,
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderTopWidth: 0,
        backgroundColor: theme.colors.background
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        color: theme.colors.text,
        fontFamily: 'bold',
    },
    subtitle: {
        color: theme.colors.text,
        fontFamily: 'medium',
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})