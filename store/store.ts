import { configureStore } from '@reduxjs/toolkit'
import history, { HistoryState } from './slice/history'
import saved, { SavedState } from './slice/saved'

export type State = {
    history: HistoryState,
    saved: SavedState
}

export default configureStore({
    reducer: {
        history,
        saved
    }
})