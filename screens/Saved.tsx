import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TranslationResult } from '../components/TranslationResult/TranslationResult'
import { colors } from '../utils/colors'
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
        backgroundColor: colors.secondary,
        padding: 8,
    },
    noItemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontFamily: 'medium',
        color: colors.text
    }
})
