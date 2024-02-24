import eslint from '@antfu/eslint-config'

export default eslint({
  react: true,
  typescript: true,
  jsx: true,
  files: ['src/**/*.tsx'],
  ignore: ['node_modules/*', 'pnpm-lock.yaml'],
  rules: {
    'unicorn/no-instanceof-array': 'off',
  },
})
