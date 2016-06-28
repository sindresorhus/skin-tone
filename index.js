'use strict';
const emojiModifierBase = require('unicode-emoji-modifier-base');

const skinTones = [
	{
		color: '',
		name: 'NONE'
	},
	{
		color: '🏻',
		name: 'WHITE'
	},
	{
		color: '🏼',
		name: 'CREAM_WHITE'
	},
	{
		color: '🏽',
		name: 'LIGHT_BROWN'
	},
	{
		color: '🏾',
		name: 'BROWN'
	},
	{
		color: '🏿',
		name: 'DARK_BROWN'
	}
];

module.exports = (emoji, type) => {
	if (type > 5 || type < 0) {
		throw new TypeError(`Expected \`type\` to be a number between 0 and 5, got ${type}`);
	}

	// TODO: use this instead when targeting Node.js 6
	// emoji = emoji.replace(/[\u{1f3fb}-\u{1f3ff}]/u, '');
	skinTones.forEach(x => {
		emoji = emoji.replace(x.color, '');
	});

	if (emojiModifierBase.has(emoji.codePointAt(0)) && type !== 0) {
		emoji += skinTones[type].color;
	}

	return emoji;
};

skinTones.forEach((x, i) => {
	Object.defineProperty(module.exports, x.name, {value: i, enumerable: true});
});
