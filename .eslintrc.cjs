module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    // https://eslint.vuejs.org/user-guide/#usage
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-reserved-component-names': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-dupe-keys': 'off',
    'scss/operator-no-unspaced': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // TypeScript 严格规则
    '@typescript-eslint/no-explicit-any': 'error', // 禁止使用 any 类型
    '@typescript-eslint/explicit-function-return-type': 'warn', // 要求函数有明确的返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // 要求导出函数有明确的类型
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }], // 警告未使用的变量
    '@typescript-eslint/no-empty-function': 'warn', // 警告空函数
    '@typescript-eslint/no-non-null-assertion': 'warn', // 警告非空断言
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 3
    }],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { 
      functions: false,
      classes: true,
      variables: true 
    }],

    // 代码长度限制规则
    'max-lines': ['warn', { 
      max: 300, 
      skipBlankLines: true, 
      skipComments: true 
    }],
    'max-lines-per-function': ['warn', { 
      max: 50, 
      skipBlankLines: true, 
      skipComments: true,
      IIFEs: true 
    }],
    'complexity': ['warn', 10], // 圈复杂度限制

    'prettier/prettier': [
      'error',
      {
        useTabs: false // 不使用制表符
      }
    ]
  },
  // eslint不能对html文件生效
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ],
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-globals
  globals: {
    OptionType: 'readonly'
  }
};
