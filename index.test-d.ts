import {expectType} from 'tsd';
import skinTone = require('.');

expectType<string>(skinTone('👍', 4));
expectType<string>(skinTone('👍', skinTone.NONE));
expectType<string>(skinTone('👍', skinTone.WHITE));
expectType<string>(skinTone('👍', skinTone.CREAM_WHITE));
expectType<string>(skinTone('👍', skinTone.LIGHT_BROWN));
expectType<string>(skinTone('👍', skinTone.BROWN));
expectType<string>(skinTone('👍', skinTone.DARK_BROWN));
