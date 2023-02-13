import {createSlice, PayloadAction} from '@reduxjs/toolkit' 


export type HistoryItem = {
    text: string;
    translatedText: string;
    id: string | number[];
    dateTime: string;
}

export type HistoryState = {
    items: HistoryItem[]
}

const initialState: HistoryState = {
    items: []
}

const history = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{item: HistoryItem}>) => {
            const {item} = action.payload

            if (item) {
                state.items.push(item)
            }
        },
        setItems: (state, action: PayloadAction<{items: HistoryItem[]}>) => {
            const {items} = action.payload
             
            state.items = items
        },
        clearHistory: (state) => {state.items = []}
    }
})

export const {addItem, setItems, clearHistory} = history.actions
export default history.reducer