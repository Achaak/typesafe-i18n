// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

import it_it from './it-it'
import en_us from './en-us'
import fr_be from './fr-be'

const localeTranslations = {
	'it-it': it_it,
	'en-us': en_us,
	'fr-be': fr_be,
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void => {
	loadedFormatters[locale] = initFormatters(locale)
}
