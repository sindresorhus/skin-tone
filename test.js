import test from 'ava';
import skinTone from '.';

test('modify skin tone', t => {
	t.is(skinTone('👍', 0), '👍');
	t.is(skinTone('👍', 1), '👍🏻');
	t.is(skinTone('👍', 2), '👍🏼');
	t.is(skinTone('👍', 3), '👍🏽');
	t.is(skinTone('👍', 4), '👍🏾');
	t.is(skinTone('👍', 5), '👍🏿');
	t.is(skinTone('👍🏿', 0), '👍');
	t.is(skinTone('👸', 3), '👸🏽');
	t.is(skinTone('🐶', 5), '🐶');
	t.is(skinTone('👍🏿', 1), '👍🏻');
});

test('constants', t => {
	t.is(skinTone.NONE, 0);
	t.is(skinTone.WHITE, 1);
	t.is(skinTone.CREAM_WHITE, 2);
	t.is(skinTone.LIGHT_BROWN, 3);
	t.is(skinTone.BROWN, 4);
	t.is(skinTone.DARK_BROWN, 5);
});
