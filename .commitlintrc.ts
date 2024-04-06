import {
  RuleConfigSeverity, 
  UserConfig 
} from "@commitlint/types"

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'button',
      ]
    ]
  }
}

module.exports = Configuration