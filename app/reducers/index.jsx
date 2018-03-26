import { combineReducers } from 'redux';

import tabReducer from 'reducers/tab';

const store = combineReducers({
    Tab: tabReducer
});

export default store;
