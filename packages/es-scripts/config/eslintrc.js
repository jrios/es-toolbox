module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
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
  },
  overrides: [
    {
      files: [
        "*.spec.js",
        "*.specs.js",
        "*-spec.js",
        "*-specs.js",
        "*.tests.js",
        "*.test.js",
        "*-test.js",
        "*-tests.js"
      ],
      plugins: ["jest"],
      env: {
        "jest/globals": true
      }
    }
  ]
};
