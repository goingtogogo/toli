import React, { useCallback, useMemo } from 'react'
import { Octicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Theming, theming } from '../../../utils/theme'
import { Language } from '../../../utils/api/translate'
import { TranslationModeSwitch, TranslationMode } from '../../../components/TranslationModeSwitch/TranslationModeSwitch'
import { useSelector } from 'react-redux'
import { State } from '../../../store/store'

type Props = {
    languageFrom: Language;
    setLanguageFrom: (language: Language) => void;
    translationMode: TranslationMode;
    setTranslationMode: (mode: TranslationMode) => void;
}

export const Header: React.FC<Props> = props => {
    const { languageFrom, setLanguageFrom, translationMode, setTranslationMode } = props;

    const theme = useSelector((state: State) => theming(state.theme.mode));
    const styles = styling(theme);

    const [languageFromLabel, languageToLabel] = useMemo(() => (
        languageFrom === 'russian' ? ['Русский', 'Буряад'] : ['Буряад', 'Русский']
    ), [languageFrom])

    const handleLanguageChange = useCallback(() => setLanguageFrom(languageFrom === 'russian' ? 'buryat' : 'russian'), [languageFrom])

    return (
        <View>
            <TranslationModeSwitch mode={translationMode} onModeChange={setTranslationMode} />

            <View style={styles.languageContainer}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{languageFromLabel}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLanguageChange}>
                    <Octicons name="arrow-switch" size={22} color={theme.colors.text} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>{languageToLabel}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styling = (theme: Theming) => StyleSheet.create({
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: theme.spacing.l,
    },
    option: {
        minWidth: 65,
        alignItems: 'center',
        marginHorizontal: theme.spacing.xl,
    },
    optionText: {
        fontFamily: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
        color: theme.colors.text,
    },
})