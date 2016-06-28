'use strict';
const emojiModifierBase = require('unicode-emoji-modifier-base');
const snakeCase = require('lodash.snakecase');

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

function iterateSkinTones(emoji) {
	// TODO: use this instead when targeting Node.js 6
	// emoji = emoji.replace(/[\u{1f3fb}-\u{1f3ff}]/u, '');
	skinTones.forEach(x => {
		emoji = emoji.replace(x.color, '');
	});
	return emoji;
}

function processEmoji(emoji, skinTone) {
	if (emojiModifierBase.has(emoji.codePointAt(0)) && skinTones.indexOf(skinTone) > 0) {
		emoji += skinTone.color;
	}

	return emoji;
}

function typeAsNumber(emoji, type) {
	if (type > 5 || type < 0) {
		throw new TypeError(`Expected \`type\` to be a number between 0 and 5, got ${type}`);
	}

	return skinTones[type];
}

function typeAsString(emoji, type) {
	const typeAsName = snakeCase(type).toUpperCase();
	const skinTone = skinTones.filter(x => x.name === typeAsName)[0];
	if (!skinTone) {
		throw new TypeError(`Expected \`type\` to be a string matching one of skin tone names, got ${type}`);
	}

	return skinTone;
}

module.exports = (emoji, type) => {
	const fnByType = (() => {
		switch (typeof type) {
			case 'number': return typeAsNumber;
			case 'string': return typeAsString;
			default: return () => {};
		}
	})();
	return processEmoji(iterateSkinTones(emoji), fnByType(emoji, type));
};

skinTones.forEach((x, i) => {
	Object.defineProperty(module.exports, x.name, {value: i, enumerable: true});
});
