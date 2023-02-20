import * as Font from 'expo-font'

export const loadFonts = async () => {
    await Font.loadAsync({
        regular: require('../assets/fonts/Montserrat-Regular.ttf'),
        medium: require('../assets/fonts/Montserrat-Medium.ttf'),
        bold: require('../assets/fonts/Montserrat-Bold.ttf'),
        extraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    })
}