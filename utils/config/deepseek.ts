

export const DEEPSEEK_CONFIG = {
  API_URL: 'https://api.deepseek.com/v1/chat/completions',
  API_KEY: process.env.DEEP_SEEK_API_KEY,
  MODEL: 'deepseek-chat',
  MAX_TOKENS: 200,
  TEMPERATURE: 0.1,
  TIMEOUT: 10000,
  MAX_INPUT_LENGTH: 500,
};

export const isDeepSeekConfigured = (): boolean => {
  return !!DEEPSEEK_CONFIG.API_KEY
}; 