import uuid from 'react-native-uuid';
import { save, get } from './storage';

const USER_ID_KEY = 'user_id';
const USAGE_KEY = 'usage';
export const DAILY_LIMIT = 10;


export const getOrCreateUserId = async () => {
  let userId = await get(USER_ID_KEY);
  if (!userId) {
    userId = uuid.v4();
    await save(USER_ID_KEY, userId);
  }
  return userId;
};

export const getUsageKey = (userId: string) => {
  const today = new Date().toISOString().split('T')[0];
  return `${USAGE_KEY}_${userId}_${today}`;
};

export const trackRequest = async (userId: string) => {
  const usageKey = getUsageKey(userId);

  const currentRequests = parseInt(await get(usageKey) || '0');
  const newRequestCount = currentRequests + 1;

  await save(usageKey, newRequestCount.toString());

  return newRequestCount;
};

export const checkDailyLimit = async (userId: string) => {
  const usageKey = getUsageKey(userId);

  const dailyRequests = parseInt(await get(usageKey) || '0');

  return {
    canMakeRequest: dailyRequests < DAILY_LIMIT,
    requestsUsed: dailyRequests,
    requestsRemaining: Math.max(0, DAILY_LIMIT - dailyRequests)
  };
};