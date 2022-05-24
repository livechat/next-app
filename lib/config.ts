import lcConfig from '../livechat.config.json'

export const Config = {
  lcClientId: lcConfig.auth.clientId,
  lcAccountsURL: 'https://accounts.livechat.com',
  lcApiURL: 'https://api.livechatinc.com/v3.4',
} as const
