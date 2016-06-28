'use strict';
const emojiModifierBase = require('unicode-emoji-modifier-base');

const skinTones = [
	'',
	'🏻',
	'🏼',
	'🏽',
	'🏾',
	'🏿'
];

module.exports = (emoji, type) => {
	if (type > 5 || type < 0) {
		throw new TypeError(`Expected \`type\` to be a number between 0 and 5, got ${type}`);
	}

	// TODO: use this instead when targeting Node.js 6
	// emoji = emoji.replace(/[\u{1f3fb}-\u{1f3ff}]/u, '');
	skinTones.forEach(x => {
		emoji = emoji.replace(x, '');
	});

	if (emojiModifierBase.has(emoji.codePointAt(0)) && type !== 0) {
		emoji += skinTones[type];
	}

	return emoji;
};
