import { combineReducers } from 'redux';

import userReducer from './userReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import teacherReducer from './teacherReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    users: userReducer,
    error: errorReducer,
    teachers: teacherReducer
})

export default rootReducer;