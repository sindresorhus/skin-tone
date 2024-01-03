const skinTones = new Map([
	['none', ''],
	['white', '🏻'],
	['creamWhite', '🏼'],
	['lightBrown', '🏽'],
	['brown', '🏾'],
	['darkBrown', '🏿']
]);

const emojiBaseModifierRegex = /\p{Emoji_Modifier_Base}/ug
const unicodeVariationSelector = '\uFE0F'
const twoFamilyEmojis = ['👩‍👦', '👩‍👧', '👨‍👧', '👨‍👦']

export default function skinTone(emoji, tone) {
	if (!skinTones.has(tone)) {
		throw new TypeError(`Unexpected \`skinTone\` name: ${tone}`);
	}

	emoji = emoji.replace(/[\u{1F3FB}-\u{1F3FF}]/u, '');

	if (tone !== 'none' && (emoji).match(emojiBaseModifierRegex).length < 3 && !twoFamilyEmojis.includes(emoji)) {
		emoji = [...emoji].reduce((res, char, idx, arr) => {
			if (idx !== arr.length - 1 && char === unicodeVariationSelector) {
				return res
			}
			res += char
			if (emojiBaseModifierRegex.test(char)) {
				res += skinTones.get(tone)
			}
			return res
		}, '')
	}

	return emoji
}
