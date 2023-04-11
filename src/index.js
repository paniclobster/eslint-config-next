const base = require('@paniclobster/eslint-config-react')

module.exports = {
  ...base,
  extends: [...base.extends, 'next/core-web-vitals'],
}
