import uuid from 'react-native-uuid'

export const cards = {
  greeting: {
    name: 'Приветствие',
    translation: 'Амаршалга',
    icon: require('../../../assets/icons/hand-wave.png'),
    cards: [
      {
        text: 'Здравствуйте!',
        translatedText: 'Сайн байна! (Сайн!)',
        id: uuid.v4(),
      },
      { text: 'Добрый день!', translatedText: 'Амгалан үдэр!', id: uuid.v4() },
      {
        text: 'Добрый вечер!	',
        translatedText: 'Амгалан үдэшэ!',
        id: uuid.v4(),
      },
      {
        text: 'Как поживаете?',
        translatedText: 'Һайн байна гүт?',
        id: uuid.v4(),
      },
      {
        text: 'Все ли у вас хорошо?',
        translatedText: 'Һайн гүт?',
        id: uuid.v4(),
      },
      {
        text: 'Хорошо, в порядке, спасибо	',
        translatedText: 'Һайн, һайн даа! Һайнта даа!',
        id: uuid.v4(),
      },
      {
        text: 'Давайте встетимся в фойе',
        translatedText: 'Фойе соо уулзая',
        id: uuid.v4(),
      },
      {
        text: 'Передавай привет Баиру	',
        translatedText: 'Баярта мэндэ хүргөөрэй',
        id: uuid.v4(),
      },
      { text: 'Передам', translatedText: 'Хүргэхэб', id: uuid.v4() },
      { text: 'Какие новости?	', translatedText: 'Юу һонин бэ?' },
      { text: 'Знакомство', translatedText: 'Танилсалга', id: uuid.v4() },
      { text: 'Друг', translatedText: 'Нүхэр', id: uuid.v4() },
    ],
  },
  animals: {
    name: 'Животные',
    translation: 'Амитад',
    icon: require('../../../assets/icons/cat.png'),
    cards: [
      { text: 'Кошка', translatedText: 'Миисгэй', id: uuid.v4() },
      { text: 'Сурок', translatedText: 'Тарбаган', id: uuid.v4() },
      { text: 'Собака', translatedText: 'Нохой', id: uuid.v4() },
      { text: 'Лев', translatedText: 'Арсалан', id: uuid.v4() },
      { text: 'Курица', translatedText: 'Тахяа', id: uuid.v4() },
      { text: 'Медведь', translatedText: 'Баабгай', id: uuid.v4() },
      { text: 'Волк', translatedText: 'Шоной', id: uuid.v4() },
      { text: 'Лисица', translatedText: 'Үнэгэн', id: uuid.v4() },
      { text: 'Заяц', translatedText: 'Шандаган', id: uuid.v4() },
      { text: 'Ёж', translatedText: 'Заряа', id: uuid.v4() },
    ],
  },
  family: {
    name: 'Семья',
    translation: 'Гэр бүлэ',
    icon: require('../../../assets/icons/baby-bottle.png'),
    cards: [
      {
        text: 'У вас большая семья?',
        translatedText: 'Танай бүлэ ехэ гү?',
        id: uuid.v4(),
      },
      {
        text: 'У нас большая семья.',
        translatedText: 'Манай бүлэ ехэ.',
        id: uuid.v4(),
      },
      {
        text: 'Как зовут ваших родителей?',
        translatedText: 'Эжы абатнай хэн гэжэ нэрэтэйб?',
        id: uuid.v4(),
      },
      {
        text: 'Мою маму зовут Эржэна.',
        translatedText: 'Минии эжы Эржэна гэжэ нэрэтэй.',
        id: uuid.v4(),
      },
      {
        text: 'У вас есть сестры, братья?',
        translatedText: 'Танда аха дүүнэр бии гү?',
        id: uuid.v4(),
      },
      {
        text: 'У меня есть старший брат / старшая сестра',
        translatedText: 'Нада аха / эгэшэ',
        id: uuid.v4(),
      },
      {
        text: 'Сколько вашей матери / отцу лет?',
        translatedText: 'Танай эжы / аба хэдытэйб?',
        id: uuid.v4(),
      },
      {
        text: 'Моей матери (моему отцу) 45 лет.',
        translatedText: 'Минии эжы / аба дүшэн табатай.',
        id: uuid.v4(),
      },
      {
        text: 'Чем занимаются ваши родители?',
        translatedText: 'Танай түрэлхид юу хэдэг бэ?',
        id: uuid.v4(),
      },
      {
        text: 'Мой папа работает',
        translatedText: 'Минии аба … хүдэлдэг',
        id: uuid.v4(),
      },
      {
        text: 'В каком классе учится младший брат?',
        translatedText: 'Танай дүү хбүн хэдыдэхи ангида һуранаб?',
        id: uuid.v4(),
      },
      {
        text: 'Мой младший брат учится в первом классе',
        translatedText: 'Дүү хүбүүмни нэгэдэхи ангида һурана',
        id: uuid.v4(),
      },
    ],
  },
  goodbye: {
    name: 'Разговор',
    translation: 'Xөөрэлдөөн',
    icon: require('../../../assets/icons/hand-handshake.png'),
    cards: [
      { text: 'Я согласен', translatedText: 'Би зүбшөөнэб', id: uuid.v4() },
      { text: 'Можно так', translatedText: 'Тиигэжэ болохо', id: uuid.v4() },
      { text: 'Верно, правильно', translatedText: 'Зүб', id: uuid.v4() },
      {
        text: 'Да, да, вы правы',
        translatedText: 'Тиимэ, тиимэ, зүб хэлэнэт',
        id: uuid.v4(),
      },
      { text: 'Нет', translatedText: 'Үгы', id: uuid.v4() },
      {
        text: 'Вы неправильно поняли',
        translatedText: 'Та буруу ойлгоот',
        id: uuid.v4(),
      },
      { text: 'Я не могу', translatedText: 'Би аргагүйб', id: uuid.v4() },
      {
        text: 'Я не согласен',
        translatedText: 'Би зүбшөөнэгүйб',
        id: uuid.v4(),
      },
      { text: 'Я возражаю', translatedText: 'Би арсанаб!', id: uuid.v4() },
      { text: 'Перестаньте!', translatedText: 'Болигты!', id: uuid.v4() },
    ],
  },
  weekdays: {
    name: 'Время',
    translation: 'Caг, үe',
    icon: require('../../../assets/icons/calendar-day.png'),
    cards: [
      { text: 'Завтра', translatedText: 'Үглөөдэр', id: uuid.v4() },
      { text: 'Вчера', translatedText: 'Үсэгэлдэр', id: uuid.v4() },
      { text: 'Поздно вечером', translatedText: 'Удаша орой', id: uuid.v4() },
      {
        text: 'Какое сегодня число?',
        translatedText: 'Мунеедэр хэдэн бэ?',
        id: uuid.v4(),
      },
      {
        text: 'Первое сентября',
        translatedText: 'Сентябриин нэгэн',
        id: uuid.v4(),
      },
      {
        text: 'Который час?',
        translatedText: 'Хэды саг болооб?',
        id: uuid.v4(),
      },
      {
        text: 'Десять часов	',
        translatedText: 'Арбан саг. Арбан час',
        id: uuid.v4(),
      },
      {
        text: 'Десять с половиной',
        translatedText: 'Арба хахад',
        id: uuid.v4(),
      },
      { text: 'Скоро, на днях', translatedText: 'Һаядаа', id: uuid.v4() },
      { text: 'Сегодня', translatedText: 'Мүнөөдэр', id: uuid.v4() },
      {
        text: 'Какой сегодня день недели?',
        translatedText: 'Мүнөөдэр гараг хэдыб?',
        id: uuid.v4(),
      },
      {
        text: 'Сегодня понедельник',
        translatedText: 'Мүнөөдэр гарагай хоёр',
        id: uuid.v4(),
      },
    ],
  },
  // weather: {
  //   name: 'Погода',
  //   icon: require('../../../assets/icons/sun.png'),
  //   cards: [
  //     { text: 'Солнечно', translatedText: 'Наратай', id: uuid.v4() },
  //     { text: 'Дождь', translatedText: 'Бороо', id: uuid.v4() },
  //     { text: 'Снег', translatedText: 'Саһан', id: uuid.v4() },
  //     { text: 'Ветер', translatedText: 'һалхин', id: uuid.v4() },
  //     { text: 'Холодно', translatedText: 'Хүйтэн', id: uuid.v4() },
  //     { text: 'Жарко', translatedText: 'Халуун', id: uuid.v4() }
  //   ]
  // }
}
