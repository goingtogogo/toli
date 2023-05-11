import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Appearance } from 'react-native';

export type Theme = 'light' | 'dark' | null | undefined;

export type ThemeState = {
    mode: Theme
}

const initialState: ThemeState = {
    mode: Appearance.getColorScheme() || 'light'
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
    }
})

export const { setTheme } = theme.actions
export default theme.reducer