import React from 'react'
import { Octicons } from '@expo/vector-icons'
import { ActivityIndicator, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

import { theme } from '../../../utils/theme'

type Props = {
    value: string;
    setValue: (value: string) => void;
    loading: boolean;
    onSubmit: (value: string) => void;
}

export const Search: React.FC<Props> = props => {
    const { value, setValue, onSubmit, loading } = props;


    return (
        <View style={styles.inputContainer}>
            {!value && <Octicons name="search" size={24} color="#F9BCC8" style={styles.searchIcon} />}
            {!value && <Text style={styles.placeholder}>Введите слово</Text>}
            <TextInput
                multiline
                style={styles.input} value={value}
                onChangeText={(text) => setValue(text)}
                maxLength={150}
                onSubmitEditing={() => onSubmit(value)}
            />

            {value &&
                <TouchableOpacity
                    onPress={() => onSubmit(value)}
                >
                    {loading ?
                        <ActivityIndicator size="small" color={theme.colors.accent} /> :
                        <Octicons name="arrow-right" size={24} color={theme.colors.accent} />
                    }
                </TouchableOpacity>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        height: 240,
        flexDirection: 'row',
        alignItems: 'baseline',
        marginHorizontal: 36,
        paddingHorizontal: theme.spacing.xl,
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
        top: 18
    },
    placeholder: {
        position: 'absolute',
        left: 54,
        top: 16,
        fontFamily: 'regular',
        fontSize: 24,
        color: '#F9BCC8'
    },
    input: {
        flex: 1,
        marginTop: theme.spacing.s,
        fontFamily: 'regular',
        fontSize: 24,
        color: theme.colors.accentText,
    },
})