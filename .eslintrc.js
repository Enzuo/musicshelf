module.exports = {
  env: {
    webextensions : true
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    // https://eslint.vuejs.org/rules/
    'no-console': ["warn"]
  }
}
