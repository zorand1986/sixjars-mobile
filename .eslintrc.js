module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  //   extends: ["plugin:react/recommended", "airbnb"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
  parser: "babel-eslint",

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
