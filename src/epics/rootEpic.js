import { combineEpics } from 'redux-observable';

import { userEpic } from './userEpic';

const rootEpic = combineEpics(
    userEpic,
);

export default rootEpic;