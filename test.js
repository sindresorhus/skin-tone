import test from 'ava';
import capitalize from 'lodash.capitalize';
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

test('string type', t => {
	testAsString(t, '👍', 'NONE', '👍');
	testAsString(t, '👍', 'WHITE', '👍🏻');
	testAsString(t, '👍', 'CREAM_WHITE', '👍🏼');
	testAsString(t, '👍', 'LIGHT_BROWN', '👍🏽');
	testAsString(t, '👍', 'BROWN', '👍🏾');
	testAsString(t, '👍', 'DARK_BROWN', '👍🏿');
	testAsString(t, '👍🏿', 'NONE', '👍');
	testAsString(t, '👸', 'LIGHT_BROWN', '👸🏽');
	testAsString(t, '🐶', 'DARK_BROWN', '🐶');
	testAsString(t, '👍🏿', 'WHITE', '👍🏻');
});
test('constants', t => {
	t.is(m.NONE, 0);
	t.is(m.WHITE, 1);
	t.is(m.CREAM_WHITE, 2);
	t.is(m.LIGHT_BROWN, 3);
	t.is(m.BROWN, 4);
	t.is(m.DARK_BROWN, 5);
});

function testAsString(t, emoji, type, expected) {
	// Generates permutations for given list.
	const permutations = list => {
		if (list.length === 0) {
			return [[]];
		}

		return list.map((_e, i) => {
			const copy = list.concat();
			const ith = copy.splice(i, 1);
			const rest = permutations(copy);
			return rest.map(e => ith.concat(e));
		}).reduce((all, arr) => all.concat(arr), []);
	};
	// Apply each given functions to parameter x. applyAllRight does the same, in reverse order.
	const apply = (x, fns) => fns.reduce((result, fn) => fn(result), x);
	const applyRight = (x, fns) => apply(x, fns.concat().reverse());

	const constantName = name => name;
	const upperCaseName = name => name.toUpperCase();
	const lowerCaseName = name => name.toLowerCase();
	const capitalizedName = name => capitalize(name);
	const spacedName = name => name.replace(/_/g, ' ');

	// Generate permutations of mapping functions and test if the module returns expected result.
	permutations([constantName, upperCaseName, lowerCaseName, capitalizedName, spacedName])
		.forEach(fns => {
			t.is(m(emoji, apply(type, fns)), expected);
			t.is(m(emoji, applyRight(type, fns)), expected);
		});
}
