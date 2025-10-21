import { configureStore } from '@reduxjs/toolkit'

import flashcards, { FlashcardsState } from './slice/flashcards'
import history, { HistoryState } from './slice/history'
import saved, { SavedState } from './slice/saved'
import theme, { ThemeState } from './slice/theme'

export type State = {
  history: HistoryState
  saved: SavedState
  flashcards: FlashcardsState
  theme: ThemeState
}

export default configureStore({
  reducer: {
    history,
    saved,
    flashcards,
    theme,
  },
})
