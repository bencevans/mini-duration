# @bencevans/mini-duration

> Mini Duration Parser

## Install

    $ npm install --save @bencevans/mini-duration

## Usage

```js
const miniDuration = require('@bencevans/mini-duration')

miniDuration('5d12h') // => (5 * DAY) + (12 * HOUR) => 475200000
miniDuration('4s') // => (4 * SECOND) => 4000
miniDuration('not a mini duration') // => null
```

## API

### miniDuration(input: string) : null | number

Returns `null` if invalid mini duration string.
