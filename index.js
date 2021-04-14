import emojiModifierBase from 'unicode-emoji-modifier-base';

const skinTones = new Map([
	['none', ''],
	['white', '🏻'],
	['creamWhite', '🏼'],
	['lightBrown', '🏽'],
	['brown', '🏾'],
	['darkBrown', '🏿']
]);

export default function skinTone(emoji, tone) {
	if (!skinTones.has(tone)) {
		throw new TypeError(`Unexpected \`skinTone\` name: ${tone}`);
	}

	emoji = emoji.replace(/[\u{1F3FB}-\u{1F3FF}]/u, '');

	if (emojiModifierBase.has(emoji.codePointAt(0)) && tone !== 'none') {
		emoji += skinTones.get(tone);
	}

	return emoji;
}
