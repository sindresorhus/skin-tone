# skin-tone [![Build Status](https://travis-ci.org/sindresorhus/skin-tone.svg?branch=master)](https://travis-ci.org/sindresorhus/skin-tone)

> Change the skin tone of an emoji 👌👌🏻👌🏼👌🏽👌🏾👌🏿

The [Fitzpatrick scale](https://en.wikipedia.org/wiki/Fitzpatrick_scale#Unicode) is used to specify skin tones for emoji characters which represent humans.


## Install

```
$ npm install --save skin-tone
```


## Usage

```js
const skinTone = require('skin-tone');

skinTone('👍', 4);
//=> '👍🏾'

skinTone('👍', 1);
//=> '👍🏻'

// can also remove skin tone
skinTone('👍🏾', 0);
//=> '👍'

// just passes it through when not supported
skinTone('🦄', 5);
//=> '🦄'
```


## API

### skinTone(emoji, type)

#### emoji

Type: `string`

Emoji to modify.

#### type

Type: `number`<br>
Values:

- `0` None
- `1` 🏻 White        *(Fitzpatrick Type-1–2)*
- `2` 🏼 Cream white  *(Fitzpatrick Type-3)*
- `3` 🏽 Light brown  *(Fitzpatrick Type-4)*
- `4` 🏾 Brown        *(Fitzpatrick Type-5)*
- `5` 🏿 Dark brown   *(Fitzpatrick Type-6)*


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
