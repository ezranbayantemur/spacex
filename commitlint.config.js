module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      ['components', 'pages', 'redux', 'unit-test', 'e2e-test', 'other'],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
