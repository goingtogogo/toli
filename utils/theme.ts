export const palette = {
    blue: '#161a57',
    darkBlue: '#0e113a',
    white: '#ffffff',
    lightGray: '#fcfcfd',
    gray: '#aaacba',
    black: '#000000',
    pink: '#eb6b84'
}

export const theme = {
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
    }
} as const

export const darkTheme = {
    ...theme,
    //
}