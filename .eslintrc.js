module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 全局 defineProps, defineEmits 开启
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-recommended', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 启用vue/script-setup-uses-vars 规则
    'vue/script-setup-uses-vars': 'error',
    'import/no-absolute-path': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
