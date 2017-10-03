module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      "jsx": true
    },
    sourceType: "module"
  },
  plugins: [
    "react",
    "jsx-a11y"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  rules: {
    eqeqeq: 1
  }
};
