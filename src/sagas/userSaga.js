import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import USER from '../constants/userConstants';
import { fetchUsers, postUser, deleteUser, editUser } from '../api/userAPI';
import { setUsers, setUsersError, createUserError, addedUserToDb, deleteUserError, deleteUserComplete, editUserError, editUserComplete } from '../actions/userActions';

function* handleUserPost(payload){
    try{
        yield call(postUser, payload);   //blocking call
        yield put(addedUserToDb);
        yield call(handleUsersLoad);
    }
    catch(error){
        yield put(createUserError(error));
    }
}

function* handleUsersLoad(){
    try {
        const users = yield call(fetchUsers);  //blocking call
        yield put(setUsers(users));
    }
    catch(error){
        yield put(setUsersError(error));
    }
}

function* handleUserDelete(payload){
    try{
        yield call(deleteUser, payload);
        yield put(deleteUserComplete);
        yield call(handleUsersLoad);
    }
    catch(error){
        yield put(deleteUserError(error));
    }
}

function* handleUserEdit(payload){
    try{
        yield call(editUser, payload);
        yield put(editUserComplete);
        yield call(handleUsersLoad);
    }
    catch(error){
        yield put(editUserError(error));
    }
}

// watcher
export default function* userWatcher(){
    yield takeEvery(USER.LOAD, handleUsersLoad);
    yield takeLatest(USER.CREATE, handleUserPost);
    yield takeLatest(USER.DELETE, handleUserDelete);
    yield takeLatest(USER.EDIT, handleUserEdit);
}