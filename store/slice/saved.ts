import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Screens } from '../../components/TabNavigator/TabNavigator'
import { HistoryItem } from './history'

export type SavedState = {
    items: HistoryItem[]
}

const initialState: SavedState = {
    items: []
}

const saved = createSlice({
    name: Screens.Saved,
    initialState,
    reducers: {
        setSaved: (state, action: PayloadAction<{ items: HistoryItem[] }>) => {
            const { items } = action.payload

            state.items = items
        },
        clearSaved: (state) => { state.items = [] }
    }
})

export const { setSaved, clearSaved } = saved.actions
export default saved.reducer