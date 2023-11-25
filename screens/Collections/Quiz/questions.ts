import { cards } from "../../../store/slice/flashcards/content";
import { Question } from "./Quiz";

export const questions: {
  [key in keyof typeof cards]: Question[]
} =
{
  greeting: [
    {
      id: "q0",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Амгалан үдэр"?',
      options: [
        { id: "option1", image: "image_url1", text: "Добрый день!", correct: true },
        { id: "option2", image: "image_url2", text: "Добрый вечер!" },
        { id: "option3", image: "image_url3", text: "Как поживаете?" },
        { id: "option4", image: "image_url4", text: "Все ли у вас хорошо?" },
      ],
    },
    {
      id: "q1",
      type: "FILL_IN_THE_BLANK",
      parts: [
        {
          text: "Сайн",
          isBlank: true,
        },
        {
          text: "байна",
          isBlank: true,
        },
      ],
      options: ["Сайн", "байна"],
    },
    {
      id: "q2",
      type: "OPEN_ENDED",
      text: "Здравствуйте!",
      answer: "Сайн байна!",
    },
    {
      id: "q3",
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
      id: "q4",
      type: "FILL_IN_THE_BLANK",
      parts: [
        {
          text: "Баярта",
          isBlank: true,
        },
        {
          text: "мэндэ",
          isBlank: true,
        },
        {
          text: "хүргөөрэй",
          isBlank: true,
        },
      ],
      options: ["Баярта", "хүргөөрэй", "мэндэ"],
    },
    {
      id: "q5",
      type: "FILL_IN_THE_BLANK",
      parts: [
        {
          text: "Амгалан",
          isBlank: true,
        },
        {
          text: "үдэр",
          isBlank: true,
        },
      ],
      options: ["Амгалан", "үдэр"],
    },
    {
      id: "q6",
      type: "OPEN_ENDED",
      text: "Знакомство",
      answer: "Танилсалга",
    },
    {
      id: "q7",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Һайн, һайн даа! Һайнта даа!"?',
      options: [
        { id: "option1", image: "image_url1", text: "Хорошо, в порядке, спасибо", correct: true },
        { id: "option2", image: "image_url2", text: "Давайте встретимся в фойе" },
        { id: "option3", image: "image_url3", text: "Передавай привет Баиру" },
        { id: "option4", image: "image_url4", text: "Передам" },
      ],
    },
    {
      id: "q8",
      type: "FILL_IN_THE_BLANK",
      parts: [
        {
          text: "Амгалан",
          isBlank: true,
        },
        {
          text: "үдэшэ",
          isBlank: true,
        },
      ],
      options: ["үдэшэ", "Амгалан"],
    },
    {
      id: "q9",
      type: "FILL_IN_THE_BLANK",
      parts: [
        {
          text: "Һайн",
          isBlank: true,
        },
        {
          text: "байна",
          isBlank: true,
        },
        {
          text: "гүт?",
          isBlank: true,
        },
      ],
      options: ["Һайн", "гүт?", "байна"],
    },
  ],
  animals: [
    {
      id: "q1",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Кошка',
      options: [
        { id: "option1", image: "image_url_dog", text: "Нохой" },
        { id: "option2", image: "image_url_cat", text: "Миисгэй", correct: true },
        { id: "option3", image: "image_url_bear", text: "Баабгай" },
      ],
    },
    {
      id: "q2",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Собака',
      options: [
        { id: "option1", image: "image_url_fox", text: "Үнэгэн" },
        { id: "option2", image: "image_url_wolf", text: "Шоной" },
        { id: "option3", image: "image_url_dog", text: "Нохой", correct: true },
      ],
    },
    {
      id: "q3",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Лев',
      options: [
        { id: "option1", image: "image_url_lion", text: "Арсалан", correct: true },
        { id: "option2", image: "image_url_fox", text: "Үнэгэн" },
        { id: "option3", image: "image_url_rabbit", text: "Шандаган" },
      ],
    },
    {
      id: "q10",
      type: "OPEN_ENDED",
      text: "Медведь",
      answer: "Баабгай",
    },
    {
      id: "q11",
      type: "OPEN_ENDED",
      text: "Волк",
      answer: "Шоной",
    },
    {
      id: "q12",
      type: "OPEN_ENDED",
      text: "Заяц",
      answer: "Шандаган",
    },
    {
      id: "q4",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Курица',
      options: [
        { id: "option1", image: "image_url_chicken", text: "Тахяа", correct: true },
        { id: "option2", image: "image_url_duck", text: "Өгсөг" },
        { id: "option3", image: "image_url_goose", text: "Хун" },
      ],
    },
    {
      id: "q5",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Медведь',
      options: [
        { id: "option1", image: "image_url_bear", text: "Баабгай", correct: true },
        { id: "option2", image: "image_url_wolf", text: "Шоной" },
        { id: "option3", image: "image_url_fox", text: "Үнэгэн" },
      ],
    },
    {
      id: "q6",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Волк',
      options: [
        { id: "option1", image: "image_url_dog", text: "Нохой" },
        { id: "option2", image: "image_url_wolf", text: "Шоной", correct: true },
        { id: "option3", image: "image_url_fox", text: "Үнэгэн" },
      ],
    },
    {
      id: "q7",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Лисица',
      options: [
        { id: "option1", image: "image_url_cat", text: "Миисгэй" },
        { id: "option2", image: "image_url_fox", text: "Үнэгэн", correct: true },
        { id: "option3", image: "image_url_hedgehog", text: "Заряа" },
      ],
    },
    {
      id: "q8",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Заяц',
      options: [
        { id: "option1", image: "image_url_rabbit", text: "Шандаган", correct: true },
        { id: "option2", image: "image_url_squirrel", text: "Сүхэ" },
        { id: "option3", image: "image_url_marmot", text: "Тарбаган" },
      ],
    },
    {
      id: "q9",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Ёж',
      options: [
        { id: "option1", image: "image_url_hedgehog", text: "Заряа", correct: true },
        { id: "option2", image: "image_url_fox", text: "Үнэгэн" },
        { id: "option3", image: "image_url_dog", text: "Нохой" },
      ],
    },
  ],
  family: [
    {
      id: "q0",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Танай", isBlank: true },
        { text: "гү?", isBlank: true },
        { text: "бүлэ", isBlank: true },
        { text: "ехэ", isBlank: true },
      ],
      options: ["Танай", "гү?", "бүлэ", "ехэ",],
    },
    {
      id: "q1",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Манай", isBlank: true },
        { text: "бүлэ", isBlank: true },
        { text: "ехэ", isBlank: true },
      ],
      options: ["Манай", "ехэ", "бүлэ"],
    },
    {
      id: "q2",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Эжы", isBlank: true },
        { text: "абатнай", isBlank: true },
        { text: "хэн", isBlank: true },
        { text: "гэжэ", isBlank: true },
        { text: "нэрэтэйб?", isBlank: true },
      ],
      options: ["Эжы", "гэжэ", "нэрэтэйб?", "абатнай", "хэн"],
    },
    {
      id: "q3",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Минии", isBlank: true },
        { text: "эжы", isBlank: true },
        { text: "Эржэна", isBlank: true },
        { text: "гэжэ", isBlank: true },
        { text: "нэрэтэй.", isBlank: true },
      ],
      options: ["Минии", "эжы", "нэрэтэй.", "Эржэна", "гэжэ"],
    },
    {
      id: "q4",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Танда", isBlank: true },
        { text: "аха", isBlank: true },
        { text: "дүүнэр", isBlank: true },
        { text: "бии", isBlank: true },
        { text: "гү?", isBlank: true },
      ],
      options: ["Танда", "аха", "бии", "гү?", "дүүнэр",],
    },
    {
      id: "q6",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Танай", isBlank: true },
        { text: "аба", isBlank: true },
        { text: "хэдытэйб?", isBlank: true },
      ],
      options: ["Танай", "хэдытэйб?", "аба"],
    },
    {
      id: "q7",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Мой папа работает"?',
      options: [
        { id: "option1", image: "image_url1", text: "Минии аба хүдэлдэг", correct: true },
        { id: "option2", image: "image_url2", text: "Манай бүлэ ехэ" },
        { id: "option3", image: "image_url3", text: "Минии эжы Эржэна гэжэ нэрэтэй" },
      ],
    },
    {
      id: "q8",
      type: "OPEN_ENDED",
      text: "Мою маму зовут Эржэна.",
      answer: "Минии эжы Эржэна гэжэ нэрэтэй.",
    },
  ],
  goodbye: [
    {
      id: "q0",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Би", isBlank: true },
        { text: "зүбшөөнэб", isBlank: true },
      ],
      options: ["Би", "зүбшөөнэб"],
    },
    {
      id: "q1",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Тиигэжэ", isBlank: true },
        { text: "болохо", isBlank: true },
      ],
      options: ["болохо", "Тиигэжэ"],
    },
    {
      id: "q7",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Я не согласен"?',
      options: [
        { id: "option1", image: "image_url1", text: "Би зүбшөөнэгүйб", correct: true },
        { id: "option2", image: "image_url2", text: "Би аргагүйб" },
        { id: "option3", image: "image_url3", text: "Би арсанаб!" },
        { id: "option4", image: "image_url4", text: "Болигты!" },
      ],
    },
    {
      id: "q8",
      type: "OPEN_ENDED",
      text: "Можно так",
      answer: "Тиигэжэ болохо",
    },
    {
      id: "q6",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Да, да, вы правы"?',
      options: [
        { id: "option2", image: "image_url2", text: "Би зүбшөөнэгүйб" },
        { id: "option3", image: "image_url3", text: "Би аргагүйб" },
        { id: "option1", image: "image_url1", text: "Тиимэ, тиимэ, зүб хэлэнэт", correct: true },
        { id: "option4", image: "image_url4", text: "Та буруу ойлгоот" },
      ],
    },
    {
      id: "q9",
      type: "OPEN_ENDED",
      text: "Перестаньте!",
      answer: "Болигты!",
    },
    {
      id: "q3",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Тиимэ", isBlank: true },
        { text: "тиимэ", isBlank: true },
        { text: "зүб", isBlank: true },
        { text: "хэлэнэт", isBlank: true },
      ],
      options: ["Тиимэ", "зүб", "тиимэ", "хэлэнэт"],
    },
    {
      id: "q4",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Би", isBlank: true },
        { text: "зүбшөөнэгүйб", isBlank: true },
      ],
      options: ["Би", "зүбшөөнэгүйб"],
    },
    {
      id: "q5",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Вы неправильно поняли"?',
      options: [
        { id: "option1", image: "image_url1", text: "Та буруу ойлгоот", correct: true },
        { id: "option2", image: "image_url2", text: "Би аргагүйб" },
        { id: "option3", image: "image_url3", text: "Би зүбшөөнэб" },
        { id: "option4", image: "image_url4", text: "Тиимэ, тиимэ, зүб хэлэнэт" },
      ],
    },
  ],
  weekdays: [
    {
      id: "q0",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Үглөөдэр"?',
      options: [
        { id: "option1", image: "image_url1", text: "Завтра", correct: true },
        { id: "option2", image: "image_url2", text: "Вчера" },
        { id: "option3", image: "image_url3", text: "Сегодня" },
        { id: "option4", image: "image_url4", text: "Скоро, на днях" },
      ],
    },
    {
      id: "q2",
      type: "OPEN_ENDED",
      text: "Поздно вечером",
      answer: "Удаша орой",
    },
    {
      id: "q3",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Мунеедэр", isBlank: true },
        { text: "хэдэн", isBlank: true },
        { text: "бэ?", isBlank: true },
      ],
      options: ["Мунеедэр", "бэ?", "хэдэн"],
    },
    {
      id: "q4",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Сентябриин нэгэн"?',
      options: [
        { id: "option1", image: "image_url1", text: "Первое сентября", correct: true },
        { id: "option2", image: "image_url2", text: "Десять часов" },
        { id: "option3", image: "image_url3", text: "Десять с половиной" },
        { id: "option4", image: "image_url4", text: "Сегодня понедельник" },
      ],
    },
    {
      id: "q5",
      type: "FILL_IN_THE_BLANK",
      parts: [
        { text: "Хэды", isBlank: true },
        { text: "саг", isBlank: true },
        { text: "болооб?", isBlank: true },
      ],
      options: ["Хэды", "болооб?", "саг"],
    },
    {
      id: "q6",
      type: "OPEN_ENDED",
      text: "Десять часов",
      answer: "Арбан саг",
    },
    {
      id: "q8",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Һаядаа"?',
      options: [
        { id: "option1", image: "image_url1", text: "Скоро, на днях", correct: true },
        { id: "option2", image: "image_url2", text: "Сегодня" },
        { id: "option3", image: "image_url3", text: "Какой сегодня день недели?" },
        { id: "option4", image: "image_url4", text: "Который час?" },
      ],
    },
    {
      id: "q12",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Үдэшэ орой"?',
      options: [
        { id: "option1", image: "image_url1", text: "Поздно вечером", correct: true },
        { id: "option2", image: "image_url2", text: "Завтра" },
        { id: "option3", image: "image_url3", text: "Сегодня" },
        { id: "option4", image: "image_url4", text: "Скоро, на днях" },
      ],
    },
    {
      id: "q13",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Арбан саг"?',
      options: [
        { id: "option4", image: "image_url4", text: "Первое сентября" },
        { id: "option1", image: "image_url1", text: "Десять часов", correct: true },
        { id: "option2", image: "image_url2", text: "Десять с половиной" },
        { id: "option3", image: "image_url3", text: "Сегодня понедельник" },
      ],
    },
    {
      id: "q14",
      type: "IMAGE_MULTIPLE_CHOICE",
      question: 'Как переводится "Мүнөөдэр гарагай хоёр"?',
      options: [
        { id: "option3", image: "image_url3", text: "Который час?" },
        { id: "option1", image: "image_url1", text: "Сегодня понедельник", correct: true },
        { id: "option2", image: "image_url2", text: "Какое сегодня число?" },
        { id: "option4", image: "image_url4", text: "Сегодня" },
      ],
    }
  ],
}