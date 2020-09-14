import USER from '../constants';

const createUser = user => ({
    type: USER.CREATE,
    user
})

const createUserError = error => ({
    type: USER.CREATE_FAIL,
    error
})

export { createUser, createUserError };