import { ImageSourcePropType } from 'react-native'
import uuid from 'react-native-uuid'

export type Card = {
  ru: string
  en: string
  buryat: string
  id: string | number[]
}

export type Cards = {
  [key: string]: {
    name: string
    translation: string
    icon: ImageSourcePropType
    cards: Card[]
  }
}

export const cards: Cards = {
  greeting: {
    name: 'collections.greeting',
    translation: 'Амаршалга',
    icon: require('../../../assets/icons/hand-wave.png'),
    cards: [
      {
        ru: 'Здравствуйте!',
        en: 'Hello!',
        buryat: 'Сайн байна! (Сайн!)',
        id: uuid.v4(),
      },
      {
        ru: 'Добрый день!',
        en: 'Good afternoon!',
        buryat: 'Амгалан үдэр!',
        id: uuid.v4(),
      },
      {
        ru: 'Добрый вечер!',
        en: 'Good evening!',
        buryat: 'Амгалан үдэшэ!',
        id: uuid.v4(),
      },
      {
        ru: 'Как поживаете?',
        en: 'How are you?',
        buryat: 'Һайн байна гүт?',
        id: uuid.v4(),
      },
      {
        ru: 'Все ли у вас хорошо?',
        en: 'Are you all right?',
        buryat: 'Һайн гүт?',
        id: uuid.v4(),
      },
      {
        ru: 'Хорошо, в порядке, спасибо',
        en: 'Good, fine, thank you',
        buryat: 'Һайн, һайн даа! Һайнта даа!',
        id: uuid.v4(),
      },
      {
        ru: 'Давайте встетимся в фойе',
        en: "Let's meet in the foyer",
        buryat: 'Фойе соо уулзая',
        id: uuid.v4(),
      },
      {
        ru: 'Передавай привет Баиру',
        en: 'Say hello to Bair',
        buryat: 'Баярта мэндэ хүргөөрэй',
        id: uuid.v4(),
      },
      {
        ru: 'Передам',
        en: 'I will pass it on',
        buryat: 'Хүргэхэб',
        id: uuid.v4(),
      },
      {
        ru: 'Какие новости?',
        en: 'What news?',
        buryat: 'Юу һонин бэ?',
        id: uuid.v4(),
      },
      {
        ru: 'Знакомство',
        en: 'Meeting',
        buryat: 'Танилсалга',
        id: uuid.v4(),
      },
      {
        ru: 'Друг',
        en: 'Friend',
        buryat: 'Нүхэр',
        id: uuid.v4(),
      },
    ],
  },
  animals: {
    name: 'collections.animals',
    translation: 'Амитад',
    icon: require('../../../assets/icons/cat.png'),
    cards: [
      { ru: 'Кошка', en: 'Cat', buryat: 'Миисгэй', id: uuid.v4() },
      { ru: 'Сурок', en: 'Marmot', buryat: 'Тарбаган', id: uuid.v4() },
      { ru: 'Собака', en: 'Dog', buryat: 'Нохой', id: uuid.v4() },
      { ru: 'Лев', en: 'Lion', buryat: 'Арсалан', id: uuid.v4() },
      { ru: 'Курица', en: 'Chicken', buryat: 'Тахяа', id: uuid.v4() },
      { ru: 'Медведь', en: 'Bear', buryat: 'Баабгай', id: uuid.v4() },
      { ru: 'Волк', en: 'Wolf', buryat: 'Шоной', id: uuid.v4() },
      { ru: 'Лисица', en: 'Fox', buryat: 'Үнэгэн', id: uuid.v4() },
      { ru: 'Заяц', en: 'Hare', buryat: 'Шандаган', id: uuid.v4() },
      { ru: 'Ёж', en: 'Hedgehog', buryat: 'Заряа', id: uuid.v4() },
    ],
  },
  family: {
    name: 'collections.family',
    translation: 'Гэр бүлэ',
    icon: require('../../../assets/icons/baby-bottle.png'),
    cards: [
      {
        ru: 'У вас большая семья?',
        en: 'Do you have a big family?',
        buryat: 'Танай бүлэ ехэ гү?',
        id: uuid.v4(),
      },
      {
        ru: 'У нас большая семья.',
        en: 'We have a big family.',
        buryat: 'Манай бүлэ ехэ.',
        id: uuid.v4(),
      },
      {
        ru: 'Как зовут ваших родителей?',
        en: 'What are your parents names?',
        buryat: 'Эжы абатнай хэн гэжэ нэрэтэйб?',
        id: uuid.v4(),
      },
      {
        ru: 'Мою маму зовут Эржэна.',
        en: 'My mother is called Erzhena.',
        buryat: 'Минии эжы Эржэна гэжэ нэрэтэй.',
        id: uuid.v4(),
      },
      {
        ru: 'У вас есть сестры, братья?',
        en: 'Do you have sisters, brothers?',
        buryat: 'Танда аха дүүнэр бии гү?',
        id: uuid.v4(),
      },
      {
        ru: 'У меня есть старший брат / старшая сестра',
        en: 'I have an older brother / older sister',
        buryat: 'Нада аха / эгэшэ',
        id: uuid.v4(),
      },
      {
        ru: 'Сколько вашей матери / отцу лет?',
        en: 'How old is your mother / father?',
        buryat: 'Танай эжы / аба хэдытэйб?',
        id: uuid.v4(),
      },
      {
        ru: 'Моей матери (моему отцу) 45 лет.',
        en: 'My mother (my father) is 45 years old.',
        buryat: 'Минии эжы / аба дүшэн табатай.',
        id: uuid.v4(),
      },
      {
        ru: 'Чем занимаются ваши родители?',
        en: 'What do your parents do?',
        buryat: 'Танай түрэлхид юу хэдэг бэ?',
        id: uuid.v4(),
      },
      {
        ru: 'Мой папа работает',
        en: 'My father works',
        buryat: 'Минии аба … хүдэлдэг',
        id: uuid.v4(),
      },
      {
        ru: 'В каком классе учится младший брат?',
        en: 'What grade is your younger brother in?',
        buryat: 'Танай дүү хбүн хэдыдэхи ангида һуранаб?',
        id: uuid.v4(),
      },
      {
        ru: 'Мой младший брат учится в первом классе',
        en: 'My younger brother is in first grade',
        buryat: 'Дүү хүбүүмни нэгэдэхи ангида һурана',
        id: uuid.v4(),
      },
    ],
  },
  goodbye: {
    name: 'collections.conversation',
    translation: 'Xөөрэлдөөн',
    icon: require('../../../assets/icons/hand-handshake.png'),
    cards: [
      {
        ru: 'Я согласен',
        en: 'I agree',
        buryat: 'Би зүбшөөнэб',
        id: uuid.v4(),
      },
      {
        ru: 'Можно так',
        en: 'It is possible like that',
        buryat: 'Тиигэжэ болохо',
        id: uuid.v4(),
      },
      {
        ru: 'Верно, правильно',
        en: 'Correct, right',
        buryat: 'Зүб',
        id: uuid.v4(),
      },
      {
        ru: 'Да, да, вы правы',
        en: 'Yes, yes, you are right',
        buryat: 'Тиимэ, тиимэ, зүб хэлэнэт',
        id: uuid.v4(),
      },
      { ru: 'Нет', en: 'No', buryat: 'Үгы', id: uuid.v4() },
      {
        ru: 'Вы неправильно поняли',
        en: 'You misunderstood',
        buryat: 'Та буруу ойлгоот',
        id: uuid.v4(),
      },
      { ru: 'Я не могу', en: "I can't", buryat: 'Би аргагүйб', id: uuid.v4() },
      {
        ru: 'Я не согласен',
        en: 'I disagree',
        buryat: 'Би зүбшөөнэгүйб',
        id: uuid.v4(),
      },
      {
        ru: 'Я возражаю',
        en: 'I object',
        buryat: 'Би арсанаб!',
        id: uuid.v4(),
      },
      { ru: 'Перестаньте!', en: 'Stop it!', buryat: 'Болигты!', id: uuid.v4() },
    ],
  },
  weekdays: {
    name: 'collections.time',
    translation: 'Caг, үe',
    icon: require('../../../assets/icons/calendar-day.png'),
    cards: [
      { ru: 'Завтра', en: 'Tomorrow', buryat: 'Үглөөдэр', id: uuid.v4() },
      { ru: 'Вчера', en: 'Yesterday', buryat: 'Үсэгэлдэр', id: uuid.v4() },
      {
        ru: 'Поздно вечером',
        en: 'Late in the evening',
        buryat: 'Удаша орой',
        id: uuid.v4(),
      },
      {
        ru: 'Какое сегодня число?',
        en: 'What is the date today?',
        buryat: 'Мунеедэр хэдэн бэ?',
        id: uuid.v4(),
      },
      {
        ru: 'Первое сентября',
        en: 'September first',
        buryat: 'Сентябриин нэгэн',
        id: uuid.v4(),
      },
      {
        ru: 'Который час?',
        en: 'What time is it?',
        buryat: 'Хэды саг болооб?',
        id: uuid.v4(),
      },
      {
        ru: 'Десять часов',
        en: "Ten o'clock",
        buryat: 'Арбан саг. Арбан час',
        id: uuid.v4(),
      },
      {
        ru: 'Десять с половиной',
        en: 'Ten thirty',
        buryat: 'Арба хахад',
        id: uuid.v4(),
      },
      {
        ru: 'Скоро, на днях',
        en: 'Soon, one of these days',
        buryat: 'Һаядаа',
        id: uuid.v4(),
      },
      { ru: 'Сегодня', en: 'Today', buryat: 'Мүнөөдэр', id: uuid.v4() },
      {
        ru: 'Какой сегодня день недели?',
        en: 'What day of the week is it today?',
        buryat: 'Мүнөөдэр гараг хэдыб?',
        id: uuid.v4(),
      },
      {
        ru: 'Сегодня понедельник',
        en: 'Today is Monday',
        buryat: 'Мүнөөдэр гарагай хоёр',
        id: uuid.v4(),
      },
    ],
  },
  weather: {
    name: 'collections.weather',
    translation: 'Уларил',
    icon: require('../../../assets/icons/cloud.png'),
    cards: [
      { ru: 'Солнечно', en: 'Sunny', buryat: 'Наратай', id: uuid.v4() },
      { ru: 'Дождь', en: 'Rain', buryat: 'Бороо', id: uuid.v4() },
      { ru: 'Снег', en: 'Snow', buryat: 'Саһан', id: uuid.v4() },
      { ru: 'Ветер', en: 'Wind', buryat: 'һалхин', id: uuid.v4() },
      { ru: 'Холодно', en: 'Cold', buryat: 'Хүйтэн', id: uuid.v4() },
      { ru: 'Жарко', en: 'Hot', buryat: 'Халуун', id: uuid.v4() },
    ],
  },
  numbers: {
    name: 'collections.numbers',
    translation: 'Тоонууд',
    icon: require('../../../assets/icons/calculator.png'),
    cards: [
      { ru: 'Один', en: 'One', buryat: 'Нэгэн', id: uuid.v4() },
      { ru: 'Два', en: 'Two', buryat: 'Хоёр', id: uuid.v4() },
      { ru: 'Три', en: 'Three', buryat: 'Гурбан', id: uuid.v4() },
      { ru: 'Четыре', en: 'Four', buryat: 'Дүрбэн', id: uuid.v4() },
      { ru: 'Пять', en: 'Five', buryat: 'Табан', id: uuid.v4() },
      { ru: 'Шесть', en: 'Six', buryat: 'Зургаан', id: uuid.v4() },
      { ru: 'Семь', en: 'Seven', buryat: 'Долоон', id: uuid.v4() },
      { ru: 'Восемь', en: 'Eight', buryat: 'Найман', id: uuid.v4() },
      { ru: 'Девять', en: 'Nine', buryat: 'Юһэ', id: uuid.v4() },
      { ru: 'Десять', en: 'Ten', buryat: 'Арбан', id: uuid.v4() },
    ],
  },
  numbers2: {
    name: 'collections.numbers2',
    translation: 'Тоонууд (2)',
    icon: require('../../../assets/icons/calculator.png'),
    cards: [
      { ru: 'Десять', en: 'Ten', buryat: 'Арбан', id: uuid.v4() },
      { ru: 'Двадцать', en: 'Twenty', buryat: 'Хорин', id: uuid.v4() },
      { ru: 'Тридцать', en: 'Thirty', buryat: 'Гушан', id: uuid.v4() },
      { ru: 'Сорок', en: 'Forty', buryat: 'Дүшэн', id: uuid.v4() },
      { ru: 'Пятьдесят', en: 'Fifty', buryat: 'Табин', id: uuid.v4() },
      { ru: 'Шестьдесят', en: 'Sixty', buryat: 'Жаран', id: uuid.v4() },
      { ru: 'Семьдесят', en: 'Seventy', buryat: 'Далан', id: uuid.v4() },
      { ru: 'Восемьдесят', en: 'Eighty', buryat: 'Наян', id: uuid.v4() },
      { ru: 'Девяносто', en: 'Ninety', buryat: 'Ерэн', id: uuid.v4() },
      { ru: 'Сто', en: 'Hundred', buryat: 'Зуун', id: uuid.v4() },
    ],
  },
  colors: {
    name: 'collections.colors',
    translation: 'үнгэнүүд',
    icon: require('../../../assets/icons/creativity.png'),
    cards: [
      { ru: 'Черный', en: 'Black', buryat: 'Хара', id: uuid.v4() },
      { ru: 'Белый', en: 'White', buryat: 'Сагаан', id: uuid.v4() },
      { ru: 'Серый', en: 'Gray', buryat: 'Боро', id: uuid.v4() },
      { ru: 'Красный', en: 'Red', buryat: 'Улаан', id: uuid.v4() },
      { ru: 'Коричневый', en: 'Brown', buryat: 'Хүрин', id: uuid.v4() },
      { ru: 'Зеленый', en: 'Green', buryat: 'Ногоон', id: uuid.v4() },
      { ru: 'Голубой', en: 'Light Blue', buryat: 'Сэнхир', id: uuid.v4() },
      { ru: 'Синий', en: 'Blue', buryat: 'Хүхэ', id: uuid.v4() },
      { ru: 'Розовый', en: 'Pink', buryat: 'Ягаан', id: uuid.v4() },
      { ru: 'Оранжевый', en: 'Orange', buryat: 'Улаан Шара', id: uuid.v4() },
    ],
  },
}
