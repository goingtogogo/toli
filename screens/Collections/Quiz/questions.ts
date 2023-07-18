import { cards } from "../../../store/slice/flashcards/content";
import { Question } from "./Quiz";

export const questions: {
  [key in keyof typeof cards]: Question[]
} =
{
  greeting: [
      {
        id: "q0",
        type: "FILL_IN_THE_BLANK",
        parts: [
          {
            text: "Фойе",
            isBlank: true,
          },
          {
            text: "соо",
            isBlank: true,
          },
          {
            text: "уулзая",
            isBlank: true,
          },
        ],
        options: ["Фойе", "уулзая", "соо"],
      },
      {
        id: "q1",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Как сказать "стекло"?',
        options: [
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "тагша",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "шэл",
            correct: true,
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "Һүн",
          },
        ],
      },
      {
        id: "q2",
        type: "OPEN_ENDED",
        text: "Который час?",
        answer: "Хэды саг болооб?",
      },
      {
        id: "q3",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the coffee"?',
        options: [
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
        ],
      },
      {
        id: "q4",
        type: "OPEN_ENDED",
        text: "La mujer",
        answer: "the woman",
      },
      {
        id: "q3",
        question: 'Which of these is "the cup"?',
        type: "IMAGE_MULTIPLE_CHOICE",
        options: [
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
            correct: true,
          },
        ],
      },
      {
        id: "q5",
        type: "OPEN_ENDED",
        text: "Me gusta React Native",
        answer: "I like react native",
      },
      {
        id: "q6",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the milk"?',
        options: [
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
            correct: true,
          },
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ],
      },
  ],
  animals: [
      {
        id: "q0",
        type: "FILL_IN_THE_BLANK",
        parts: [
          {
            text: "Фойе",
            isBlank: true,
          },
          {
            text: "соо",
            isBlank: true,
          },
          {
            text: "уулзая",
            isBlank: true,
          },
        ],
        options: ["Фойе", "уулзая", "соо"],
      },
      {
        id: "q1",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the glass"?',
        options: [
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
            correct: true,
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ],
      },
  ],
  family: [
      {
        id: "q0",
        type: "FILL_IN_THE_BLANK",
        parts: [
          {
            text: "Фойе",
            isBlank: true,
          },
          {
            text: "соо",
            isBlank: true,
          },
          {
            text: "уулзая",
            isBlank: true,
          },
        ],
        options: ["Фойе", "уулзая", "соо"],
      },
      {
        id: "q1",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the glass"?',
        options: [
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
            correct: true,
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ],
      },
  ],
  goodbye: [
      {
        id: "q0",
        type: "FILL_IN_THE_BLANK",
        parts: [
          {
            text: "Фойе",
            isBlank: true,
          },
          {
            text: "соо",
            isBlank: true,
          },
          {
            text: "уулзая",
            isBlank: true,
          },
        ],
        options: ["Фойе", "уулзая", "соо"],
      },
      {
        id: "q1",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the glass"?',
        options: [
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
            correct: true,
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ],
      },
  ],
  weekdays: [
      {
        id: "q0",
        type: "FILL_IN_THE_BLANK",
        parts: [
          {
            text: "Фойе",
            isBlank: true,
          },
          {
            text: "соо",
            isBlank: true,
          },
          {
            text: "уулзая",
            isBlank: true,
          },
        ],
        options: ["Фойе", "уулзая", "соо"],
      },
      {
        id: "q1",
        type: "IMAGE_MULTIPLE_CHOICE",
        question: 'Which of these is "the glass"?',
        options: [
          {
            id: "option1",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            text: "la taza",
          },
          {
            id: "option2",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            text: "el vaso",
            correct: true,
          },
          {
            id: "option3",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            text: "la leche",
          },
          {
            id: "option4",
            image:
              "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            text: "el café",
          },
        ],
      },
    ]
}