import test from 'ava';
import skinTone from './index.js';

test('main', t => {
	t.is(skinTone('👍', 'none'), '👍');
	t.is(skinTone('👍', 'white'), '👍🏻');
	t.is(skinTone('👍', 'creamWhite'), '👍🏼');
	t.is(skinTone('👍', 'lightBrown'), '👍🏽');
	t.is(skinTone('👍', 'brown'), '👍🏾');
	t.is(skinTone('👍', 'darkBrown'), '👍🏿');
	t.is(skinTone('👍🏿', 'none'), '👍');
	t.is(skinTone('👸', 'lightBrown'), '👸🏽');
	t.is(skinTone('🐶', 'darkBrown'), '🐶');
	t.is(skinTone('👍🏿', 'white'), '👍🏻');

	// Trickier emojis, where the presence of variation selector
	// or more than one person usually causes issues.
	t.is(skinTone('🕵️‍♀️', 'brown'), '🕵🏾‍♀');
	t.is(skinTone('⛹️‍♀️', 'darkBrown'), '⛹🏿‍♀');
	t.is(skinTone('👩‍❤️‍👨', 'brown'), '👩🏾‍❤‍👨🏾');
	t.is(skinTone('👬', 'white'), '👬🏻');

	// Family emojis don't support skin tone, so these shouldn't change.
	t.is(skinTone('👩‍👦', 'brown'), '👩‍👦');
	t.is(skinTone('👩‍👩‍👧‍👧', 'white'), '👩‍👩‍👧‍👧');
});
