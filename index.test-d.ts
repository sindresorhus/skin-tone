import {expectType, expectError} from 'tsd';
import skinTone, {type SkinToneType} from './index.js';

const tone: SkinToneType = 'none';

expectType<string>(skinTone('👍', 'none'));
expectType<string>(skinTone('👍', 'white'));
expectType<string>(skinTone('👍', 'creamWhite'));
expectType<string>(skinTone('👍', 'lightBrown'));
expectType<string>(skinTone('👍', 'brown'));
expectType<string>(skinTone('👍', 'darkBrown'));
expectError(skinTone('👍', 'foo'));
