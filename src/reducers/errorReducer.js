import USER from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case USER.LOAD_FAIL:
            return action.error;
        case USER.LOAD_SUCCESS:
            return null;

        case USER.CREATE_FAIL:
            return action.error;
        case USER.CREATE_SUCCESS:
            return null;

        case USER.DELETE_FAIL:
            return action.error;
        case USER.DELETE_SUCCESS:
            return null;

        case USER.EDIT_FAIL:
            return action.error;
        case USER.EDIT_SUCCESS:
            return null;
        default:
            return state;
    }
}

export default errorReducer;