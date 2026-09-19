export enum UserType {
  CLIENT = 'CLIENT',
  USER = 'USER'
}

export enum UserAuthOtpType {
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION'
}

export enum OnlineStatus {
  ONLINE = 'ONLINE',
  AWAY = 'AWAY',
  BUSY = 'BUSY',
  OFFLINE = 'OFFLINE'
}

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  CURRENT_USER: 'current_user'
} as const;

export const APP_TITLE = 'Sync Bridge';
