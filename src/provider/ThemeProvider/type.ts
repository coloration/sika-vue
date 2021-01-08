export enum ThemeType {
  default = 'theme-default',
  hack = 'theme-hack',
  breath = 'theme-breath'
}

export type ThemeConfigure = {
  primary: string
  secondary: string
  textPrimary: string
  textSecondary: string
  bgPrimary: string
  bgSecondary: string
}


export const themeDefaultConfig: ThemeConfigure = {
  primary: '#1890ff',
  secondary: '#722ed1',
  textPrimary: '#1f1f1f',
  textSecondary: '#8c8c8c',
  bgPrimary: '#ffffff',
  bgSecondary: 'rgba(0, 0, 0, 0.1)',
}

export const themeBreathConfig: ThemeConfigure = {
  primary: '#19f5fe',
  secondary: '#19f5fe',
  textPrimary: '#19f5fe',
  textSecondary: '#00c4cc',
  bgPrimary: 'rgba(28,79,128,.53)',
  bgSecondary: 'rgba(255,255,255,.1)',
}

export const themeHackConfig: ThemeConfigure = {
  primary: '#f9a100',
  secondary: '#f9a100',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
  bgPrimary: 'rgba(0, 0, 0, 0.2)',
  bgSecondary: 'rgba(255, 255, 255, 0.2)',
}