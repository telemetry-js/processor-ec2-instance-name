'use strict'

const test = require('tape')
const proxyquire = require('proxyquire')
const spies = []

const plugin = proxyquire('.', {
  '@telemetry-js/processor-ec2-instance-tags': function (...args) {
    return spies.shift()(...args)
  }
})

test('basic', function (t) {
  t.plan(3)

  spies.push((options) => {
    let m

    // Return a mock of telemetry-processor-ec2-instance-tags;
    // most of the functionality is tested there.
    return {
      process: (metric) => {
        t.ok(options.filter('name'))
        t.notOk(options.filter('other'))

        metric.tags.name = 'fake_name'
        m = metric
      },
      on: (event, fn) => {
        fn(m)
      }
    }
  })

  const p = plugin()
  const metric = { tags: {} }

  p.process(metric)
  p.on('metric', (metric) => {
    t.same(metric, {
      tags: {
        name: 'fake_name'
      }
    })
  })
})
