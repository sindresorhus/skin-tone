'use strict';
const emojiModifierBase = require('unicode-emoji-modifier-base');

const skinTones = [
	{
		name: 'NONE',
		color: ''
	},
	{
		name: 'WHITE',
		color: '🏻'
	},
	{
		name: 'CREAM_WHITE',
		color: '🏼'
	},
	{
		name: 'LIGHT_BROWN',
		color: '🏽'
	},
	{
		name: 'BROWN',
		color: '🏾'
	},
	{
		name: 'DARK_BROWN',
		color: '🏿'
	}
];

module.exports = (emoji, type) => {
	if (type > 5 || type < 0) {
		throw new TypeError(`Expected \`type\` to be a number between 0 and 5, got ${type}`);
	}

	emoji = emoji.replace(/[\u{1f3fb}-\u{1f3ff}]/u, '');

	if (emojiModifierBase.has(emoji.codePointAt(0)) && type !== 0) {
		emoji += skinTones[type].color;
	}

	return emoji;
};

skinTones.forEach((skinTone, index) => {
	Object.defineProperty(module.exports, skinTone.name, {value: index, enumerable: true});
});
