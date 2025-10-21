import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ImageSourcePropType } from 'react-native'

import { cards } from './content'

import { HistoryItem } from '@/store/slice/history'

type Flashcard = {
  name: string
  translation: string
  icon: ImageSourcePropType
  cards: HistoryItem[]
  completedFlashcards?: boolean
  completedQuiz?: boolean
}

type Flashcards = {
  [key: string]: Flashcard
}

export type FlashcardsState = {
  items: Flashcards
  completedFlashcards: {
    [key: string]: boolean
  }
  completedQuiz: {
    [key: string]: boolean
  }
}

const initialState: FlashcardsState = {
  items: cards,
  completedFlashcards: {},
  completedQuiz: {},
}

const flashcards = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    setCompletedFlashcards: (
      state,
      action: PayloadAction<{ items: { [key: string]: boolean } }>,
    ) => {
      const { items } = action.payload

      state.completedFlashcards = items
    },
    setCompletedQuiz: (
      state,
      action: PayloadAction<{ items: { [key: string]: boolean } }>,
    ) => {
      const { items } = action.payload

      state.completedQuiz = items
    },
  },
})

export const { setCompletedFlashcards, setCompletedQuiz } = flashcards.actions
export default flashcards.reducer
