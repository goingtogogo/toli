import axios from 'axios'

import { Language, TranslationMode } from './types'

import { getDeviceId } from '@/utils/deviceId'

const API_URL = process.env.EXPO_PUBLIC_API_URL

export type { Language, TranslationMode } from './types'

export const translate = async (
  text: string,
  languageFrom: Language,
  mode: TranslationMode,
): Promise<string> => {
  const deviceId = await getDeviceId()

  const { data } = await axios.post(
    `${API_URL}/translate`,
    { value: text, languageFrom, mode },
    { headers: { 'X-Device-Id': deviceId } },
  )

  return data.translation
}
