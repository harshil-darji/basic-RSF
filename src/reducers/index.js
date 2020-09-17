import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import newUserReducer from './newUserReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    users: userReducer,
    newUser: newUserReducer,
    error: errorReducer
})

export default rootReducer;