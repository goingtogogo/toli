export const palette = {
    blue: '#1a73e8',
    white: '#fff',
    gray: '#dedede',
    black: '#202124'
}

export const theme = {
    colors: {
        background: palette.white,
        primary: palette.blue,
        secondary: palette.gray,
        text: palette.black
    },
    spacing: {
        xs: 8,
        s: 12,
        m: 16,
        l: 20,
        xl: 24,
    }
}

export const darkTheme = {
    ...theme,
    //
}