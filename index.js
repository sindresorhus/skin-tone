const skinTones = new Map([
	['none', ''],
	['white', '🏻'],
	['creamWhite', '🏼'],
	['lightBrown', '🏽'],
	['brown', '🏾'],
	['darkBrown', '🏿']
]);

// This emoji modifier base \p{Emoji_Modifier_Base} is present in emojis that the skin tone can apply to
const emojiBaseModifierRegex = /\p{Emoji_Modifier_Base}/ug;
// Emoji presentation selector takes the same place as skin tone modifier https://unicode.org/reports/tr51/#composing_zwj_seq
// So it should be removed if present, otherwise it causes issues like this '🕵🏼️‍♀️'
const emojiPresentationSelector = '\u{FE0F}';
// Skin tones aren't supported for family emojis
// Family emojis with 3+ person emojis this easily checked by the number of modifiable component emojis
// For two person family emojis it's needed to check directly
// To distinguish them from other two person emojis: couple, handshake, fencing, etc.
const twoFamilyEmojis = new Set(['👩‍👦', '👩‍👧', '👨‍👧', '👨‍👦']);

export default function skinTone(emoji, tone) {
	if (!skinTones.has(tone)) {
		throw new TypeError(`Unexpected \`skinTone\` name: ${tone}`);
	}

	emoji = emoji.replaceAll(/[\u{1F3FB}-\u{1F3FF}]/ug, '');

	// If tone is not 'none', emoji has less than 3 modifiable components (i.e. no families)
	// And is not any of the two-person family emojis, then tone should be applied
	if (tone !== 'none' && (emoji).match(emojiBaseModifierRegex)?.length < 3 && !twoFamilyEmojis.has(emoji)) {
		let tonedEmoji = '';

		for (const segment of emoji) {
			// If this segment is emoji presentation selector it should not be added to toned emoji
			if (segment === emojiPresentationSelector) {
				continue;
			}

			tonedEmoji += segment;
			// Tone should be applied to all modifiable components
			// E.g. both persons in couple emojis, etc.
			if (emojiBaseModifierRegex.test(segment)) {
				tonedEmoji += skinTones.get(tone);
			}
		}

		return tonedEmoji;
	}

	return emoji;
}
