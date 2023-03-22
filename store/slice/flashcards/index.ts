import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryItem } from '../history';
import { cards } from './content';


type Flashcard = {
  name: string;
  translation: string;
  icon: any;
  cards: HistoryItem[]
  completed?: boolean
}
type Flashcards = {
  [key: string]: Flashcard
}

export type FlashcardsState = {
  items: Flashcards,
  completed: {
    [key: string]: boolean
  }
}

const initialState: FlashcardsState = {
  items: cards,
  completed: {}
}

const flashcards = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    setCompleted: (state, action: PayloadAction<{ items: { [key: string]: boolean } }>) => {
      const { items } = action.payload

      state.completed = items
    },
  }
})

export const { setCompleted } = flashcards.actions
export default flashcards.reducer