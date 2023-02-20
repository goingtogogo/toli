import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import OcticonsIcons from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json'

import { theme } from '../../utils/theme'
import { SettingsKey } from '../../screens/Settings'
import { ActionButton } from '../ActionButton/ActionButton'

type Props = {
    name: SettingsKey;
    title: string;
    subtitle: string;
    icon: keyof typeof OcticonsIcons;
    onPress: (key: SettingsKey) => void;
}

export const SettingsItem: React.FC<Props> = props => {

    const handlePress = useCallback(() => {
        const { name, onPress } = props

        onPress(name)
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {props.title}
                </Text>
                <Text style={styles.subtitle} numberOfLines={1}>
                    {props.subtitle}
                </Text>
            </View>

            <ActionButton name={props.icon} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderTopWidth: 0,
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.s,
    },
    textContainer: {
        flex: 1,
        marginRight: theme.spacing.xs,
    },
    title: {
        color: theme.colors.text,
        fontFamily: 'bold',
        fontSize: 18
    },
    subtitle: {
        color: theme.colors.secondaryText,
        fontFamily: 'medium',
        fontSize: 14,
    }
})