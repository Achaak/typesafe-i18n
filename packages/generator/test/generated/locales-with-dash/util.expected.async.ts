// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

const localeTranslationLoaders = {
	'it-it': () => import('./it-it'),
	'en-us': () => import('./en-us'),
	'fr-be': () => import('./fr-be'),
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>) =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(
		locale,
		(await localeTranslationLoaders[locale]()).default as unknown as Translations
	)
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
