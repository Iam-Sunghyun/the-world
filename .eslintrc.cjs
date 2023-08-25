module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app', // react 앱을 위한 eslint 설정(eslint-config-react-app 적용)
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      
    ],
    "no-unused-vars": "warn", // 사용되지 않은 변수에 대하여 경고 메시지 출력(기본은 에러 발생이었음)
  },
}
