import USER from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        // User load actions
        case USER.LOAD:
            return true;
        case USER.LOAD_FAIL:
            return false;
        case USER.LOAD_SUCCESS:
            return false;
        // User create actions
        case USER.CREATE:
            return true;
        case USER.CREATE_FAIL:
            return false;
        case USER.CREATE_SUCCESS:
            return false;
        // User delete actions
        case USER.DELETE:
            return true;
        case USER.DELETE_FAIL:
            return false;
        case USER.DELETE_SUCCESS:
            return false;
        // User edit actions
        case USER.EDIT:
            return true;
        case USER.EDIT_FAIL:
            return false;
        case USER.EDIT_SUCCESS:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
