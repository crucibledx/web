import type {GetStaticPaths, InferGetStaticPropsType} from 'astro'

import {defaultLocale, locales} from './messages'

export const getLocalePaths = (() =>
  locales.map((lang) => ({
    params: {lang: lang === defaultLocale ? undefined : lang},
    props: {locale: lang},
  }))) satisfies GetStaticPaths

export type LocaleProps = InferGetStaticPropsType<typeof getLocalePaths>
