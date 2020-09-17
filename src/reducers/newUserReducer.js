import USER from '../constants';

const initialValues = {
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country_code: ""
};

const newUserReducer = (state = initialValues, action) => {
    switch (action.type) {
        case USER.CREATE:
            return action.payload;
        case USER.CREATE_SUCCESS:
            return initialValues;
        default:
            return state;
    }
}

export default newUserReducer;