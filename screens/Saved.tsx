import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TranslationResult } from '../components/TranslationResult/TranslationResult'
import { theme } from '../utils/theme'
import { useSelector } from 'react-redux'
import { State } from '../store/store'


export function Saved() {
    const saved = useSelector((state: State) => state.saved.items)

    if (saved.length === 0) {
        return (
            <View style={styles.noItemsContainer}>
                <Text style={styles.emptyText}>Empty</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={saved}
                renderItem={({ item }) => <TranslationResult item={item} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.s,
    },
    noItemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontFamily: 'medium',
        color: theme.colors.text
    }
})
