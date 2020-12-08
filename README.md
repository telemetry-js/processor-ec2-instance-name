# processor-ec2-instance-name

> **Add name tag of EC2 instance to metrics. The instance tag is normalized to lowercase. If you need more tags, use `telemetry-processor-ec2-instance-tags` instead.**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/telemetry-js/processor-ec2-instance-name.svg)](https://www.npmjs.org/package/@telemetry-js/processor-ec2-instance-name)
[![node](https://img.shields.io/node/v/@telemetry-js/processor-ec2-instance-name.svg)](https://www.npmjs.org/package/@telemetry-js/processor-ec2-instance-name)
[![Test](https://github.com/telemetry-js/processor-ec2-instance-name/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/processor-ec2-instance-name/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [Options](#options)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

```js
const telemetry = require('@telemetry-js/telemetry')()
const name = require('@telemetry-js/processor-ec2-instance-name')

telemetry.task()
  .process(name)

// Or with options
telemetry.task()
  .process(name, { /* options */ })
```

## Options

Any options are passed down to `telemetry-processor-ec2-instance-tags`. You normally shouldn't need this.

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/processor-ec2-instance-name
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Inc](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
