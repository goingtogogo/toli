import React from 'react'
import { Feather } from '@expo/vector-icons'
import FeatherIcons from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json'
import { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../utils/theme'
import { SettingsKey } from '../../screens/Settings'

type Props = {
    name: SettingsKey;
    title: string;
    subtitle: string;
    icon: keyof typeof FeatherIcons;
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

            <View style={styles.iconContainer}>
                <Feather name={props.icon} color={theme.colors.primary} size={24} />
            </View>
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
    },
    subtitle: {
        color: theme.colors.text,
        fontFamily: 'medium',
        fontSize: 12,
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})