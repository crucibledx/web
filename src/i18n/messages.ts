import aboutEn from './locales/en/about.json'
import commonEn from './locales/en/common.json'
import emberEn from './locales/en/ember.json'
import forgeEn from './locales/en/forge.json'
import homeEn from './locales/en/home.json'
import starterEn from './locales/en/starter.json'

const messages = {
  en: {
    common: commonEn,
    home: homeEn,
    forge: forgeEn,
    ember: emberEn,
    starter: starterEn,
    about: aboutEn,
  },
} as const

export type Locale = keyof typeof messages
export type Namespace = keyof (typeof messages)['en']

export const defaultLocale: Locale = 'en'
export const locales = Object.keys(messages) as Locale[]

export function getMessages<L extends Locale, N extends Namespace>(locale: L, namespace: N) {
  return messages[locale][namespace] as (typeof messages)[L][N]
}
