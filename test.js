import test from 'ava';
import m from './';

test('modify skin tone', t => {
	t.is(m('👍', 0), '👍');
	t.is(m('👍', 1), '👍🏻');
	t.is(m('👍', 2), '👍🏼');
	t.is(m('👍', 3), '👍🏽');
	t.is(m('👍', 4), '👍🏾');
	t.is(m('👍', 5), '👍🏿');
	t.is(m('👍🏿', 0), '👍');
	t.is(m('👸', 3), '👸🏽');
	t.is(m('🐶', 5), '🐶');
	t.is(m('👍🏿', 1), '👍🏻');
});

test('constants', t => {
	t.is(m.NONE, 0);
	t.is(m.WHITE, 1);
	t.is(m.CREAM_WHITE, 2);
	t.is(m.LIGHT_BROWN, 3);
	t.is(m.BROWN, 4);
	t.is(m.DARK_BROWN, 5);
});
