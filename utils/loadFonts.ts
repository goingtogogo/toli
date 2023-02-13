import * as Font from 'expo-font'

export const loadFonts = async () => {
    await Font.loadAsync({
        light: require('../assets/fonts/Inter-Light.ttf'),
        medium: require('../assets/fonts/Inter-Medium.ttf'),
        bold: require('../assets/fonts/Inter-Bold.ttf'),
    })
}