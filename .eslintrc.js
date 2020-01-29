module.exports = {
  "extends": [
    "airbnb",
    "plugin:react-redux/recommended"
  ],
  "plugins": [
    "react-redux"
  ],
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "implicit-arrow-linebreak": "off",
    "comma-dangle": "off",
    "indent": "off",
    "no-trailing-spaces": "off",
    "arrow-parens": ["error", "as-needed"],
    "react/destructuring-assignment": "off",
    "no-restricted-syntax": "off",
    "no-labels": "off",
    "no-unused-expressions": "off",
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    "no-confusing-arrow": "off"
  }
}
