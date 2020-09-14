import USER from '../constants';

const userReducer = (state = [], action) => {
    switch(action.type){
        case USER.CREATE_SUCCESS:
            return [...state, ...action.user]
        default:
            return state;
    }
}

export default userReducer;