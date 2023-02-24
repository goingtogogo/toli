import axios, { AxiosError } from 'axios'

type Data = {
    data: {
        translations: { value: string }[]
    };
}

export type Language = 'russian' | 'buryat';


export const translate = async (text: string, languageFrom: Language) => {
    const url = `https://burlang.ru/api/v1/${languageFrom}-word/translate?q=${text}`

    try {
        const { data } = await axios.get(url) as Data

        return format(data.translations?.[0].value)
    }

    catch (e) {
        // todo
        if ((e as AxiosError).response?.status === 404) {
            return text
        }

        throw (e as AxiosError)?.message || e
    }
}


const format = (text: string) => text.split('; ').join('\n')