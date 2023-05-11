import { Dimensions, Platform } from 'react-native'
import { Theme } from '../store/slice/theme';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const isSmallDevice = dimensions.fullHeight < 800;
export const isAndroid = Platform.OS === 'android'


export const lightPalette = {
    blue: '#161a57',
    darkBlue: '#0e113a',
    white: '#ffffff',
    lightGray: '#fcfcfd',
    gray: '#aaacba',
    black: '#000000',
    pink: '#eb6b84'
}

export const darkPalette = {
    blue: '#1b206b',
    darkBlue: '#c5c8f1',
    white: '#141319',
    lightGray: '#0f0f0f',
    gray: '#aaacba',
    black: '#ffffff',
    pink: '#eb6b84'
}

export type Theming = {
    colors: {
        [key: string]: string;
    },
    spacing: {
        [key: string]: number;
    },
    shadows: {
        basicShadow: object
    }
}

export const theming = (theme: Theme) => {
    const palette = theme === 'dark' ? darkPalette : lightPalette;
    return {
        colors: {
            background: palette.lightGray,
            primary: palette.blue,
            secondary: palette.white,
            accent: palette.pink,
            text: palette.darkBlue,
            accentText: palette.black,
            secondaryText: palette.gray
        },
        spacing: {
            xs: 8,
            s: 12,
            m: 16,
            l: 20,
            xl: 24,
        },
        shadows: {
            basicShadow: {
                shadowOffset: {
                    height: 8,
                    width: 0
                },
                shadowOpacity: 0.15,
                shadowRadius: 10,
                shadowColor: '#040844',
                elevation: 3,
            }
        }
    }
}