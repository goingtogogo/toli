import React, { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Clipboard from 'expo-clipboard'

import { theme } from '../../../utils/theme'
import { ActionButton } from '../../../components/ActionButton/ActionButton'

type Props = {
    result: string;
}

export const Result: React.FC<Props> = props => {
    const { result } = props;
    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(result)
    }, [result])

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{props.result}</Text>
            <ActionButton onPress={copyToClipboard} name="copy" />
        </View>
    )
}


const styles = StyleSheet.create({
    resultContainer: {
        flexDirection: 'row',
        height: 120,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: theme.colors.primary,
        marginTop: -120,
        marginHorizontal: 36,
        paddingTop: theme.spacing.s,
        paddingHorizontal: theme.spacing.xl,

    },
    resultText: {
        fontFamily: 'regular',
        fontSize: 24,
        color: theme.colors.secondary,
        flex: 1,
    },
})