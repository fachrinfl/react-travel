module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', 'functional'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    
    rules: {
      'no-console': 'error',
      'react/jsx-boolean-value': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-fragments': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-uses-react': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'functional/prefer-readonly-type': [
        'warn',
        {
          allowLocalMutation: true,
          allowMutableReturnType: true,
          ignoreClass: true,
        },
      ],
    },
  };