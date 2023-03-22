import { configureStore } from '@reduxjs/toolkit'
import history, { HistoryState } from './slice/history'
import saved, { SavedState } from './slice/saved'
import flashcards, { FlashcardsState } from './slice/flashcards'

export type State = {
    history: HistoryState,
    saved: SavedState,
    flashcards: FlashcardsState
}

export default configureStore({
    reducer: {
        history,
        saved,
        flashcards
    }
})