import test from 'ava';
import skinTone from '.';

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
});
