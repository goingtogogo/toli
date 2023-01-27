import axios, { AxiosError } from 'axios';

type Data = {
    data: {
        translations: { value: string }[]
    };
}



export const translate = async (text: string, languageFrom: 'russian' | 'buryat') => {
    const url = `https://burlang.ru/api/v1/${languageFrom}-word/translate?q=${text}`;

    try {
        const { data } = await axios.get(url) as Data;

        return data.translations?.[0].value;
    }

    catch (e) {
        console.log({e})
        if ((e as AxiosError).response?.status === 404) {
            return text
        };

        return (e as AxiosError).message;
    }
}