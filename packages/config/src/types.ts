import type { Locale } from '../../runtime/src/core'

export type Adapters = 'angular' | 'node' | 'react' | 'solid' | 'svelte' | 'vue'

export type OutputFormats = 'TypeScript' | 'JavaScript'

export type GeneratorConfig = {
	$schema?: string

	baseLocale?: Locale

	tempPath?: string
	outputPath?: string
	outputFormat?: OutputFormats
	typesFileName?: string
	utilFileName?: string
	formattersTemplateFileName?: string
	typesTemplateFileName?: string
	esmImports?: boolean

	adapter?: Adapters
	adapterFileName?: string
	generateOnlyTypes?: boolean

	banner?: string
	runAfterGenerator?: string | undefined
}

export type RollupConfig = {
	locales?: Locale[]
}

export type GeneratorConfigWithDefaultValues = GeneratorConfig & {
	baseLocale: Locale

	tempPath: string
	outputPath: string
	outputFormat: OutputFormats
	typesFileName: string
	utilFileName: string
	formattersTemplateFileName: string
	typesTemplateFileName: string
	esmImports: boolean

	generateOnlyTypes: boolean
	banner: string
	runAfterGenerator: string | undefined
}
