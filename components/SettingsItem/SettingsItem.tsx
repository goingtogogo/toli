import { Feather } from "@expo/vector-icons";
import FeatherIcons from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json";
import { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../utils/colors";

type Props = {
    name: 'history' | 'saved';
    title: string;
    subtitle: string;
    icon: keyof typeof FeatherIcons;
    onPress: (key: 'history' | 'saved') => void;
}

export const SettingsItem: React.FC<Props> = props => {

    const handlePress = useCallback(() => {
        const {name, onPress} = props;

        onPress(name);
    }, []);

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
                <Feather name={props.icon} color={colors.primary} size={24} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderWidth: 1,
        borderTopWidth: 0, 
        paddingVertical: 16,
        paddingHorizontal: 12
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    title: {
        color: colors.text,
        fontFamily: 'bold',
    },
    subtitle: {
        color: colors.text,
        fontFamily: 'medium',
        fontSize: 12, 
    },
    iconContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})