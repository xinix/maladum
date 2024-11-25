import vue from 'eslint-plugin-vue'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    files: ['*.ts', '*.tsx', '*.vue'], // Specify file types
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      vue,
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...vue.configs.recommended.rules,
      'prettier/prettier': 'error', // Prettier as an ESLint rule
    },
  },
]
