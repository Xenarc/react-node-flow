module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreComments: true,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
      ],
      env: {
        jest: true,
      },
      rules: {
        'max-len': [
          'error',
          {
            code: 90,
            tabWidth: 2,
            ignoreComments: true,
            comments: 80,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
      },
      plugins: ['jest', 'react'],
    },
  ],
};
