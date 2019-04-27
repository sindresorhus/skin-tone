declare const skinTone: {
	/**
	Change the skin tone of an emoji 👌👌🏻👌🏼👌🏽👌🏾👌🏿.

	@param emoji - Emoji to modify.
	@param type - Skin tone to use for `emoji`.

	- `skinTone.NONE`        | `0`:      *(Removes skin tone)*
	- `skinTone.WHITE`       | `1`: 🏻   *(Fitzpatrick Type-1–2)*
	- `skinTone.CREAM_WHITE` | `2`: 🏼   *(Fitzpatrick Type-3)*
	- `skinTone.LIGHT_BROWN` | `3`: 🏽   *(Fitzpatrick Type-4)*
	- `skinTone.BROWN`       | `4`: 🏾   *(Fitzpatrick Type-5)*
	- `skinTone.DARK_BROWN`  | `5`: 🏿   *(Fitzpatrick Type-6)*

	@example
	```
	import skinTone = require('skin-tone');

	skinTone('👍', skinTone.BROWN);
	//=> '👍🏾'

	// or by using the constant value directly
	skinTone('👍', 4);
	//=> '👍🏾

	skinTone('👍', skinTone.WHITE);
	//=> '👍🏻'

	// can also remove skin tone
	skinTone('👍🏾', skinTone.NONE);
	//=> '👍'

	// just passes it through when not supported
	skinTone('🦄', skinTone.DARK_BROWN);
	//=> '🦄'
	```
	*/
	(emoji: string, type: 0 | 1 | 2 | 3 | 4 | 5): string;

	/**
	Removes skin tone.
	*/
	readonly NONE: 0;

	/**
	Fitzpatrick Type-1–2: 🏻.
	*/
	readonly WHITE: 1;

	/**
	Fitzpatrick Type-3: 🏼.
	*/
	readonly CREAM_WHITE: 2;

	/**
	Fitzpatrick Type-4: 🏽.
	*/
	readonly LIGHT_BROWN: 3;

	/**
	Fitzpatrick Type-5: 🏾.
	*/
	readonly BROWN: 4;

	/**
	Fitzpatrick Type-6: 🏿.
	*/
	readonly DARK_BROWN: 5;
};

export = skinTone;
