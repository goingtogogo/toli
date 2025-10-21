import uuid from 'react-native-uuid'

import { Question } from './Quiz'

import { cards as items } from '@/store/slice/flashcards/content'

const numberOfTrueOrFalseQ = 4
const numberOfMultipleOptionQ = 4

type Card = {
  text: string
  translatedText: string
}

const shuffle = <T>(arr: T[]) => {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

const rand = (length: number) => Math.floor(Math.random() * length)

export const generateQuestions = (key: keyof typeof items) => {
  const { cards } = items[key]
  const trueOrFalseQuestions = generateTrueOrFalseQuestions(
    cards,
    numberOfTrueOrFalseQ,
  )
  const multipleOptionQuestions = generateMultipleOptionQuestion(
    cards,
    numberOfMultipleOptionQ,
  )
  const openEndedQuestions = generateOpenEndedQuestion()

  return [
    ...trueOrFalseQuestions,
    ...multipleOptionQuestions,
    ...openEndedQuestions,
  ]
}

const generateTrueOrFalseQuestions = (cards: Card[], count: number) => {
  const questions: Question[] = []

  for (let i = 0; i < count; i++) {
    const question = {
      id: String(uuid.v4()),
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: 'Выберите один вариант',
      options: [
        {
          id: 'option1',
          text: 'Верно',
        },
        {
          id: 'option2',
          text: 'Неверно',
          correct: true,
        },
      ],
    }

    questions.push(question)
  }

  return shuffle(questions)
}

const generateMultipleOptionQuestion = (cards: Card[], count: number) => {
  const questions: Question[] = []
  const targets = new Set()

  for (let i = 0; i < count; i++) {
    let target = rand(cards.length)

    while (targets.has(target)) {
      target = rand(cards.length)
    }

    targets.add(target)

    const question = {
      id: String(uuid.v4()),
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: 'Выберите правильный перевод',
      text: cards[target].text,
      options: [
        {
          id: 'option1',
          text: 'Верно',
        },
        {
          id: 'option2',
          text: 'Неверно',
        },
      ],
    }

    questions.push(question)
  }

  return shuffle(questions)
}

const generateOpenEndedQuestion = () => {
  return []
}
