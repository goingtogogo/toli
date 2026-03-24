import uuid from 'react-native-uuid'

import { get, saveString } from '@/utils/storage'

const STORAGE_KEY = 'device_id'

let cached: string | null = null

export const getDeviceId = async (): Promise<string> => {
  if (cached) return cached

  const stored = await get(STORAGE_KEY)
  if (stored) {
    cached = stored
    return stored
  }

  const id = uuid.v4() as string
  await saveString(STORAGE_KEY, id)
  cached = id
  return id
}
