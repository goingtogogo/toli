import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryItem } from '../history';
import { cards } from './content';
import { Question } from '../../../screens/Collections/Quiz/Quiz';


type Flashcard = {
  name: string;
  translation: string;
  icon: any;
  cards: HistoryItem[];
  quiz: Question[];
  completedFlashcards?: boolean;
  completedQuiz?: boolean;
}

type Flashcards = {
  [key: string]: Flashcard
}

export type FlashcardsState = {
  items: Flashcards,
  completedFlashcards: {
    [key: string]: boolean
  };
  completedQuiz: {
    [key: string]: boolean
  }
}

const initialState: FlashcardsState = {
  items: cards,
  completedFlashcards: {},
  completedQuiz: {}
}

const flashcards = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    setCompletedFlashcards: (state, action: PayloadAction<{ items: { [key: string]: boolean } }>) => {
      const { items } = action.payload

      state.completedFlashcards = items
    },
    setCompletedQuiz: (state, action: PayloadAction<{ items: { [key: string]: boolean } }>) => {
      const { items } = action.payload

      state.completedQuiz = items
    },
  }
})

export const { setCompletedFlashcards, setCompletedQuiz } = flashcards.actions
export default flashcards.reducer