# skin-tone

> Change the skin tone of an emoji 👌👌🏻👌🏼👌🏽👌🏾👌🏿

The [Fitzpatrick scale](https://en.wikipedia.org/wiki/Fitzpatrick_scale#Unicode) is used to specify skin tones for emoji characters which represent humans.

## Install

```sh
npm install skin-tone
```

## Usage

```js
import skinTone from 'skin-tone';

skinTone('👍', 'brown');
//=> '👍🏾'

skinTone('👍', 'white');
//=> '👍🏻'

// Can also remove skin tone
skinTone('👍🏾', 'none');
//=> '👍'

// Just passes it through when not supported
skinTone('🦄', 'darkBrown');
//=> '🦄'
```

## API

### skinTone(emoji, type)

#### emoji

Type: `string`

Emoji to modify.

#### type

Type: `'none' | 'white' | 'creamWhite' | 'lightBrown' | 'brown' | 'darkBrown'`

Skin tone to use for `emoji`.

- `'none'`       :      *(Removes skin tone)*
- `'white'`      : 🏻   *(Fitzpatrick Type-1–2)*
- `'creamWhite'` : 🏼   *(Fitzpatrick Type-3)*
- `'lightBrown'` : 🏽   *(Fitzpatrick Type-4)*
- `'brown'`      : 🏾   *(Fitzpatrick Type-5)*
- `'darkBrown'`  : 🏿   *(Fitzpatrick Type-6)*

> [!NOTE]
> `'none'` removes only skin tone modifiers. Presentation selectors (like `\uFE0F`) are not restored, because the original selector state is lost once a skin tone is applied. Both forms (`✌` and `✌️`) are valid.
