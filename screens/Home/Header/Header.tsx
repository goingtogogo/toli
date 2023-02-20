import React, { useCallback, useMemo } from 'react'
import { Octicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../../utils/theme'
import { Language } from '../../../utils/api/translate'

type Props = {
    languageFrom: Language;
    setLanguageFrom: (language: Language) => void;
}

export const Header: React.FC<Props> = props => {
    const { languageFrom, setLanguageFrom } = props;

    const [languageFromLabel, languageToLabel] = useMemo(() => (
        languageFrom === 'russian' ? ['Русский', 'Буряад'] : ['Буряад', 'Русский']
    ), [languageFrom])

    const handleLanguageChange = useCallback(() => setLanguageFrom(languageFrom === 'russian' ? 'buryat' : 'russian'), [languageFrom])

    return (
        <View style={styles.languageContainer}>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>{languageFromLabel}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLanguageChange}>
                <Octicons name="arrow-switch" size={26} color={theme.colors.text} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>{languageToLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        width: 65,
        alignItems: 'center',
        paddingVertical: theme.spacing.xl,
        marginHorizontal: theme.spacing.xl,
    },
    optionText: {
        fontFamily: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
        color: theme.colors.text,
    },
})