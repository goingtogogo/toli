import { Question } from './Quiz'

import { cards } from '@/store/slice/flashcards/content'

export const questions: {
  [key in keyof typeof cards]: Question[]
} = {
  greeting: [
    {
      id: 'q0',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Амгалан үдэр"?',
        en: 'How do you translate "Амгалан үдэр"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Добрый день!', en: 'Good afternoon!' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Добрый вечер!', en: 'Good evening!' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Как поживаете?', en: 'How are you?' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Все ли у вас хорошо?', en: 'Are you all right?' },
        },
      ],
    },
    {
      id: 'q1',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Сайн',
          isBlank: true,
        },
        {
          text: 'байна',
          isBlank: true,
        },
      ],
      options: ['Сайн', 'байна'],
    },
    {
      id: 'q2',
      type: 'OPEN_ENDED',
      text: { ru: 'Здравствуйте!', en: 'Hello!' },
      answer: 'Сайн байна!',
    },
    {
      id: 'q3',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Фойе',
          isBlank: true,
        },
        {
          text: 'соо',
          isBlank: true,
        },
        {
          text: 'уулзая',
          isBlank: true,
        },
      ],
      options: ['Фойе', 'уулзая', 'соо'],
    },
    {
      id: 'q4',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Баярта',
          isBlank: true,
        },
        {
          text: 'мэндэ',
          isBlank: true,
        },
        {
          text: 'хүргөөрэй',
          isBlank: true,
        },
      ],
      options: ['Баярта', 'хүргөөрэй', 'мэндэ'],
    },
    {
      id: 'q5',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Амгалан',
          isBlank: true,
        },
        {
          text: 'үдэр',
          isBlank: true,
        },
      ],
      options: ['Амгалан', 'үдэр'],
    },
    {
      id: 'q6',
      type: 'OPEN_ENDED',
      text: { ru: 'Знакомство', en: 'Introduction' },
      answer: 'Танилсалга',
    },
    {
      id: 'q7',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Һайн, һайн даа! Һайнта даа!"?',
        en: 'How do you translate "Һайн, һайн даа! Һайнта даа!"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: {
            ru: 'Хорошо, в порядке, спасибо',
            en: 'Okay, alright, thank you',
          },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: {
            ru: 'Давайте встретимся в фойе',
            en: "Let's meet in the foyer",
          },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Передавай привет Баиру', en: 'Say hello to Bair' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Передам', en: 'Will do' },
        },
      ],
    },
    {
      id: 'q8',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Амгалан',
          isBlank: true,
        },
        {
          text: 'үдэшэ',
          isBlank: true,
        },
      ],
      options: ['үдэшэ', 'Амгалан'],
    },
    {
      id: 'q9',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        {
          text: 'Һайн',
          isBlank: true,
        },
        {
          text: 'байна',
          isBlank: true,
        },
        {
          text: 'гүт?',
          isBlank: true,
        },
      ],
      options: ['Һайн', 'гүт?', 'байна'],
    },
  ],
  animals: [
    {
      id: 'q1',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Кошка', en: 'Cat' },
      options: [
        {
          id: 'option1',
          image: 'image_url_dog',
          text: { ru: 'Нохой', en: 'Нохой' },
        },
        {
          id: 'option2',
          image: 'image_url_cat',
          text: { ru: 'Миисгэй', en: 'Миисгэй' },
          correct: true,
        },
        {
          id: 'option3',
          image: 'image_url_bear',
          text: { ru: 'Баабгай', en: 'Баабгай' },
        },
      ],
    },
    {
      id: 'q2',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Собака', en: 'Dog' },
      options: [
        {
          id: 'option1',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
        },
        {
          id: 'option2',
          image: 'image_url_wolf',
          text: { ru: 'Шоной', en: 'Шоной' },
        },
        {
          id: 'option3',
          image: 'image_url_dog',
          text: { ru: 'Нохой', en: 'Нохой' },
          correct: true,
        },
      ],
    },
    {
      id: 'q3',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Лев', en: 'Lion' },
      options: [
        {
          id: 'option1',
          image: 'image_url_lion',
          text: { ru: 'Арсалан', en: 'Арсалан' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
        },
        {
          id: 'option3',
          image: 'image_url_rabbit',
          text: { ru: 'Шандаган', en: 'Шандаган' },
        },
      ],
    },
    {
      id: 'q10',
      type: 'OPEN_ENDED',
      text: { ru: 'Медведь', en: 'Bear' },
      answer: 'Баабгай',
    },
    {
      id: 'q11',
      type: 'OPEN_ENDED',
      text: { ru: 'Волк', en: 'Wolf' },
      answer: 'Шоной',
    },
    {
      id: 'q12',
      type: 'OPEN_ENDED',
      text: { ru: 'Заяц', en: 'Rabbit' },
      answer: 'Шандаган',
    },
    {
      id: 'q4',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Курица', en: 'Chicken' },
      options: [
        {
          id: 'option1',
          image: 'image_url_chicken',
          text: { ru: 'Тахяа', en: 'Тахяа' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url_duck',
          text: { ru: 'Өгсөг', en: 'Өгсөг' },
        },
        {
          id: 'option3',
          image: 'image_url_goose',
          text: { ru: 'Хун', en: 'Хун' },
        },
      ],
    },
    {
      id: 'q5',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Медведь', en: 'Bear' },
      options: [
        {
          id: 'option1',
          image: 'image_url_bear',
          text: { ru: 'Баабгай', en: 'Баабгай' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url_wolf',
          text: { ru: 'Шоной', en: 'Шоной' },
        },
        {
          id: 'option3',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
        },
      ],
    },
    {
      id: 'q6',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Волк', en: 'Wolf' },
      options: [
        {
          id: 'option1',
          image: 'image_url_dog',
          text: { ru: 'Нохой', en: 'Нохой' },
        },
        {
          id: 'option2',
          image: 'image_url_wolf',
          text: { ru: 'Шоной', en: 'Шоной' },
          correct: true,
        },
        {
          id: 'option3',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
        },
      ],
    },
    {
      id: 'q7',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Лисица', en: 'Fox' },
      options: [
        {
          id: 'option1',
          image: 'image_url_cat',
          text: { ru: 'Миисгэй', en: 'Миисгэй' },
        },
        {
          id: 'option2',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
          correct: true,
        },
        {
          id: 'option3',
          image: 'image_url_hedgehog',
          text: { ru: 'Заряа', en: 'Заряа' },
        },
      ],
    },
    {
      id: 'q8',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Заяц', en: 'Rabbit' },
      options: [
        {
          id: 'option1',
          image: 'image_url_rabbit',
          text: { ru: 'Шандаган', en: 'Шандаган' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url_squirrel',
          text: { ru: 'Сүхэ', en: 'Сүхэ' },
        },
        {
          id: 'option3',
          image: 'image_url_marmot',
          text: { ru: 'Тарбаган', en: 'Тарбаган' },
        },
      ],
    },
    {
      id: 'q9',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: { ru: 'Ёж', en: 'Hedgehog' },
      options: [
        {
          id: 'option1',
          image: 'image_url_hedgehog',
          text: { ru: 'Заряа', en: 'Заряа' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url_fox',
          text: { ru: 'Үнэгэн', en: 'Үнэгэн' },
        },
        {
          id: 'option3',
          image: 'image_url_dog',
          text: { ru: 'Нохой', en: 'Нохой' },
        },
      ],
    },
  ],
  family: [
    {
      id: 'q0',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Танай', isBlank: true },
        { text: 'бүлэ', isBlank: true },
        { text: 'ехэ', isBlank: true },
        { text: 'гү?', isBlank: true },
      ],
      options: ['Танай', 'гү?', 'бүлэ', 'ехэ'],
    },
    {
      id: 'q1',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Манай', isBlank: true },
        { text: 'бүлэ', isBlank: true },
        { text: 'ехэ', isBlank: true },
      ],
      options: ['Манай', 'ехэ', 'бүлэ'],
    },
    {
      id: 'q2',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Эжы', isBlank: true },
        { text: 'абатнай', isBlank: true },
        { text: 'хэн', isBlank: true },
        { text: 'гэжэ', isBlank: true },
        { text: 'нэрэтэйб?', isBlank: true },
      ],
      options: ['Эжы', 'гэжэ', 'нэрэтэйб?', 'абатнай', 'хэн'],
    },
    {
      id: 'q3',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Минии', isBlank: true },
        { text: 'эжы', isBlank: true },
        { text: 'Эржэна', isBlank: true },
        { text: 'гэжэ', isBlank: true },
        { text: 'нэрэтэй.', isBlank: true },
      ],
      options: ['Минии', 'эжы', 'нэрэтэй.', 'Эржэна', 'гэжэ'],
    },
    {
      id: 'q4',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Танда', isBlank: true },
        { text: 'аха', isBlank: true },
        { text: 'дүүнэр', isBlank: true },
        { text: 'бии', isBlank: true },
        { text: 'гү?', isBlank: true },
      ],
      options: ['Танда', 'аха', 'бии', 'гү?', 'дүүнэр'],
    },
    {
      id: 'q6',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Танай', isBlank: true },
        { text: 'аба', isBlank: true },
        { text: 'хэдытэйб?', isBlank: true },
      ],
      options: ['Танай', 'хэдытэйб?', 'аба'],
    },
    {
      id: 'q7',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Мой папа работает"?',
        en: 'How do you translate "My dad works"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Минии аба хүдэлдэг', en: 'Минии аба хүдэлдэг' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Манай бүлэ ехэ', en: 'Манай бүлэ ехэ' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: {
            ru: 'Минии эжы Эржэна гэжэ нэрэтэй',
            en: 'Минии эжы Эржэна гэжэ нэрэтэй',
          },
        },
      ],
    },
    {
      id: 'q8',
      type: 'OPEN_ENDED',
      text: { ru: 'Мою маму зовут Эржэна.', en: "My mom's name is Erzhena." },
      answer: 'Минии эжы Эржэна гэжэ нэрэтэй.',
    },
  ],
  goodbye: [
    {
      id: 'q0',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Би', isBlank: true },
        { text: 'зүбшөөнэб', isBlank: true },
      ],
      options: ['Би', 'зүбшөөнэб'],
    },
    {
      id: 'q1',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Тиигэжэ', isBlank: true },
        { text: 'болохо', isBlank: true },
      ],
      options: ['болохо', 'Тиигэжэ'],
    },
    {
      id: 'q7',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Я не согласен"?',
        en: 'How do you translate "I disagree"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Би зүбшөөнэгүйб', en: 'Би зүбшөөнэгүйб' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Би аргагүйб', en: 'Би аргагүйб' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Би арсанаб!', en: 'Би арсанаб!' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Болигты!', en: 'Болигты!' },
        },
      ],
    },
    {
      id: 'q8',
      type: 'OPEN_ENDED',
      text: { ru: 'Можно так', en: 'That is okay' },
      answer: 'Тиигэжэ болохо',
    },
    {
      id: 'q6',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Да, да, вы правы"?',
        en: 'How do you translate "Yes, yes, you are right"?',
      },
      options: [
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Би зүбшөөнэгүйб', en: 'Би зүбшөөнэгүйб' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Би аргагүйб', en: 'Би аргагүйб' },
        },
        {
          id: 'option1',
          image: 'image_url1',
          text: {
            ru: 'Тиимэ, тиимэ, зүб хэлэнэт',
            en: 'Тиимэ, тиимэ, зүб хэлэнэт',
          },
          correct: true,
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Та буруу ойлгоот', en: 'Та буруу ойлгоот' },
        },
      ],
    },
    {
      id: 'q9',
      type: 'OPEN_ENDED',
      text: { ru: 'Перестаньте!', en: 'Stop it!' },
      answer: 'Болигты!',
    },
    {
      id: 'q3',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Тиимэ', isBlank: true },
        { text: 'тиимэ', isBlank: true },
        { text: 'зүб', isBlank: true },
        { text: 'хэлэнэт', isBlank: true },
      ],
      options: ['Тиимэ', 'зүб', 'тиимэ', 'хэлэнэт'],
    },
    {
      id: 'q4',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Би', isBlank: true },
        { text: 'зүбшөөнэгүйб', isBlank: true },
      ],
      options: ['Би', 'зүбшөөнэгүйб'],
    },
    {
      id: 'q5',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Вы неправильно поняли"?',
        en: 'How do you translate "You misunderstood"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Та буруу ойлгоот', en: 'Та буруу ойлгоот' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Би аргагүйб', en: 'Би аргагүйб' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Би зүбшөөнэб', en: 'Би зүбшөөнэб' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: {
            ru: 'Тиимэ, тиимэ, зүб хэлэнэт',
            en: 'Тиимэ, тиимэ, зүб хэлэнэт',
          },
        },
      ],
    },
  ],
  weekdays: [
    {
      id: 'q0',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Үглөөдэр"?',
        en: 'How do you translate "Үглөөдэр"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Завтра', en: 'Tomorrow' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Вчера', en: 'Yesterday' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Сегодня', en: 'Today' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Скоро, на днях', en: 'Soon, these days' },
        },
      ],
    },
    {
      id: 'q2',
      type: 'OPEN_ENDED',
      text: { ru: 'Поздно вечером', en: 'Late in the evening' },
      answer: 'Удаша орой',
    },
    {
      id: 'q3',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Мунеедэр', isBlank: true },
        { text: 'хэдэн', isBlank: true },
        { text: 'бэ?', isBlank: true },
      ],
      options: ['Мунеедэр', 'бэ?', 'хэдэн'],
    },
    {
      id: 'q4',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Сентябриин нэгэн"?',
        en: 'How do you translate "Сентябриин нэгэн"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Первое сентября', en: 'September first' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Десять часов', en: "Ten o'clock" },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Десять с половиной', en: 'Ten and a half' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Сегодня понедельник', en: 'Today is Monday' },
        },
      ],
    },
    {
      id: 'q5',
      type: 'FILL_IN_THE_BLANK',
      parts: [
        { text: 'Хэды', isBlank: true },
        { text: 'саг', isBlank: true },
        { text: 'болооб?', isBlank: true },
      ],
      options: ['Хэды', 'болооб?', 'саг'],
    },
    {
      id: 'q6',
      type: 'OPEN_ENDED',
      text: { ru: 'Десять часов', en: "Ten o'clock" },
      answer: 'Арбан саг',
    },
    {
      id: 'q8',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Һаядаа"?',
        en: 'How do you translate "Һаядаа"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Скоро, на днях', en: 'Soon, these days' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Сегодня', en: 'Today' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: {
            ru: 'Какой сегодня день недели?',
            en: 'What day is it today?',
          },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Который час?', en: 'What time is it?' },
        },
      ],
    },
    {
      id: 'q12',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Үдэшэ орой"?',
        en: 'How do you translate "Үдэшэ орой"?',
      },
      options: [
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Поздно вечером', en: 'Late in the evening' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Завтра', en: 'Tomorrow' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Сегодня', en: 'Today' },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Скоро, на днях', en: 'Soon, these days' },
        },
      ],
    },
    {
      id: 'q13',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Арбан саг"?',
        en: 'How do you translate "Арбан саг"?',
      },
      options: [
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Первое сентября', en: 'September first' },
        },
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Десять часов', en: "Ten o'clock" },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Десять с половиной', en: 'Ten and a half' },
        },
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Сегодня понедельник', en: 'Today is Monday' },
        },
      ],
    },
    {
      id: 'q14',
      type: 'IMAGE_MULTIPLE_CHOICE',
      question: {
        ru: 'Как переводится "Мүнөөдэр гарагай хоёр"?',
        en: 'How do you translate "Мүнөөдэр гарагай хоёр"?',
      },
      options: [
        {
          id: 'option3',
          image: 'image_url3',
          text: { ru: 'Который час?', en: 'What time is it?' },
        },
        {
          id: 'option1',
          image: 'image_url1',
          text: { ru: 'Сегодня понедельник', en: 'Today is Monday' },
          correct: true,
        },
        {
          id: 'option2',
          image: 'image_url2',
          text: { ru: 'Какое сегодня число?', en: "What is today's date?" },
        },
        {
          id: 'option4',
          image: 'image_url4',
          text: { ru: 'Сегодня', en: 'Today' },
        },
      ],
    },
  ],
}
