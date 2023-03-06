import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { ActivityIndicator, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

import { theme } from '../../../utils/theme'
import { Language } from '../../../utils/api/translate'

type Props = {
    value: string;
    loading: boolean;
    onSubmit: (value: string) => void;
    setValue: (value: string) => void;
    languageFrom: Language
}

export const Search: React.FC<Props> = props => {
    const { value, setValue, onSubmit, loading, languageFrom } = props;

    const handleLetterClick = (letter: string) => setValue(value + letter)

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {!value && <Octicons name="search" size={24} color="#F9BCC8" style={styles.searchIcon} />}
                {!value && <Text style={styles.placeholder}>Введите слово</Text>}
                <TextInput
                    multiline
                    style={styles.input} value={value}
                    onChangeText={(text) => setValue(text)}
                    maxLength={80}
                    onSubmitEditing={() => onSubmit(value)}
                />

                {value &&
                    <TouchableOpacity
                        onPress={() => setValue('')}
                        style={styles.closeIconContainer}
                    >
                        {loading ?
                            <ActivityIndicator size="small" color={theme.colors.accent} /> :
                            <Octicons name="x" size={28} color={theme.colors.accent} />
                        }
                    </TouchableOpacity>
                }
            </View>

            {languageFrom === 'buryat' &&
                <View style={styles.lettersContainer}>
                    <TouchableOpacity onPress={() => handleLetterClick('ү')}><Text style={styles.letter}>ү</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLetterClick('һ')}><Text style={styles.letter}>һ</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLetterClick('ө')}><Text style={styles.letter}>ө</Text></TouchableOpacity>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    inputContainer: {
        position: 'relative',
        height: 240,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginHorizontal: 36,
        paddingLeft: theme.spacing.l,
        paddingRight: theme.spacing.xl,
        borderRadius: 20,
        shadowOffset: {
            height: 8,
            width: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowColor: '#040844',
        backgroundColor: theme.colors.secondary,
    },
    searchIcon: {
        position: 'absolute',
        left: 24,
        top: 18,
    },
    placeholder: {
        position: 'absolute',
        left: 54,
        top: 16,
        fontFamily: 'regular',
        fontSize: 24,
        color: '#F9BCC8',
    },
    input: {
        flex: 1,
        marginTop: theme.spacing.s,
        fontFamily: 'regular',
        fontSize: 24,
        color: theme.colors.accentText,
    },
    closeIconContainer: {
        position: 'absolute',
        top: theme.spacing.m,
        right: theme.spacing.m,
    },
    lettersContainer: {
        position: 'absolute',
        bottom: theme.spacing.s,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    letter: {
        paddingHorizontal: theme.spacing.m,
        paddingVertical: 2,
        marginHorizontal: 4,
        fontSize: 24,
        fontFamily: 'regular',
        color: theme.colors.accentText,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#F9BCC8'
    },
})