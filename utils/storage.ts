import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (error) {
    return false
  }
}

export const save = async (key: string, value: string) =>
  saveString(key, JSON.stringify(value))

export const get = async (key: string) => {
  try {
    const itemString = await AsyncStorage.getItem(key)
    if (itemString) {
      return JSON.parse(itemString)
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export default {
  saveString,
  save,
  get,
}
