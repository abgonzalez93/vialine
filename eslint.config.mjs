import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'eol-last': ['error', 'always'], // Exige una línea en blanco al final
      'quotes': ['error', 'single'],   // Usa comillas simples siempre
      'semi': ['error', 'never'],      // Evita los punto y coma al final
    },
  },
]

export default eslintConfig
