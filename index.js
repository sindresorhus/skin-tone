const skinTones = new Map([
	['none', ''],
	['white', '🏻'],
	['creamWhite', '🏼'],
	['lightBrown', '🏽'],
	['brown', '🏾'],
	['darkBrown', '🏿']
]);

const emojiBaseModifierRegex = /\p{Emoji_Modifier_Base}/ug;
const unicodeVariationSelector = '\uFE0F';
const twoFamilyEmojis = new Set(['👩‍👦', '👩‍👧', '👨‍👧', '👨‍👦']);

export default function skinTone(emoji, tone) {
	if (!skinTones.has(tone)) {
		throw new TypeError(`Unexpected \`skinTone\` name: ${tone}`);
	}

	emoji = emoji.replace(/[\u{1F3FB}-\u{1F3FF}]/ug, '').replace(/[\u{1F3FB}-\u{1F3FF}]/ug, '');

	if (tone === 'none') {
		return emoji;
	}

	const baseModifierMatch = (emoji).match(emojiBaseModifierRegex);
	if (baseModifierMatch !== null && baseModifierMatch.length < 3 && !twoFamilyEmojis.has(emoji)) {
		const emojiArray = [...emoji];
		emoji = '';

		for (let i = 0; i < emojiArray.length; i++) {
			if (i !== emojiArray.length - 1 && emojiArray[i] === unicodeVariationSelector) {
				continue;
			}

			emoji += emojiArray[i];
			if (emojiBaseModifierRegex.test(emojiArray[i])) {
				emoji += skinTones.get(tone);
			}
		}
	}

	return emoji;
}
