import USER from '../constants';

// Create User actions

const createUser = user => ({
    type: USER.CREATE,
    payload: user
})

const addedUserToDb = {
    type: USER.CREATE_SUCCESS,
}

const createUserError = error => ({
    type: USER.CREATE_FAIL,
    error
})

// Get User actions

const loadUsers = () => ({
    type: USER.LOAD
})

const setUsers = users => ({
    type: USER.LOAD_SUCCESS,
    users
})

const setUsersError = error => ({
    type: USER.LOAD_FAIL,
    error
})

// Delete user actions

const deleteUser = (userId) => ({
    type: USER.DELETE,
    payload: userId
})

const deleteUserComplete = {
    type: USER.DELETE_SUCCESS
}

const deleteUserError = error => ({
    type: USER.DELETE_FAIL,
    error
})

// Edit user actions

const editUser = (userId) => ({
    type: USER.EDIT,
    payload: userId
})

const editUserComplete = {
    type: USER.EDIT_SUCCESS
}

const editUserError = error => ({
    type: USER.EDIT_FAIL,
    error
})

export { createUser, addedUserToDb, createUserError, loadUsers, setUsers, setUsersError, deleteUser, deleteUserComplete, deleteUserError, editUser, editUserComplete, editUserError };