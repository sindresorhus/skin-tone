import {expectType, expectError} from 'tsd';
import skinTone = require('.');

const tone: skinTone.Tone = 'none';

expectType<string>(skinTone('👍', 'none'));
expectType<string>(skinTone('👍', 'white'));
expectType<string>(skinTone('👍', 'creamWhite'));
expectType<string>(skinTone('👍', 'lightBrown'));
expectType<string>(skinTone('👍', 'brown'));
expectType<string>(skinTone('👍', 'darkBrown'));
expectError(skinTone('👍', 'foo'));
