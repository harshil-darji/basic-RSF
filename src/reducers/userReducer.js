import USER from '../constants';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER.LOAD_SUCCESS:
            return [...action.users]
        default:
            return state;
    }
}

export default userReducer;