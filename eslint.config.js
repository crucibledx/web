import eslintConfigPrettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      '@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },
)
