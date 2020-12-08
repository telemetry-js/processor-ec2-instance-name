'use strict'

const Processor = require('@telemetry-js/processor-ec2-instance-tags')

module.exports = function plugin (options) {
  const filter = (key) => key === 'name'
  return new Processor(Object.assign({}, options, { filter }))
}
