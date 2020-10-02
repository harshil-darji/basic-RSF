import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import TEACHER from '../constants/teacherConstants';
import { fetchTeachers, postTeacher, deleteTeacher, editTeacher } from '../api/teacherAPI';
import { setTeachers, setTeachersError, createTeacherError, addedTeacherToDb, deleteTeacherError, deleteTeacherComplete, editTeacherError, editTeacherComplete } from '../actions/teacherActions';

function* handleTeacherPost(payload){
    try{
        yield call(postTeacher, payload);
        yield put(addedTeacherToDb);
        yield call(handleTeachersLoad);
    }
    catch(error){
        yield put(createTeacherError(error));
    }
}

function* handleTeachersLoad(){
    try {
        const teachers = yield call(fetchTeachers);
        yield put(setTeachers(teachers));
    }
    catch(error){
        yield put(setTeachersError(error));
    }
}

function* handleTeacherDelete(payload){
    try{
        yield call(deleteTeacher, payload);
        yield put(deleteTeacherComplete);
        yield call(handleTeachersLoad);
    }
    catch(error){
        yield put(deleteTeacherError(error));
    }
}

function* handleTeacherEdit(payload){
    try{
        yield call(editTeacher, payload);
        yield put(editTeacherComplete);
        yield call(handleTeachersLoad);
    }
    catch(error){
        yield put(editTeacherError(error));
    }
}

// watcher
export default function* teacherWatcher(){
    yield takeEvery(TEACHER.LOAD, handleTeachersLoad);
    yield takeLatest(TEACHER.CREATE, handleTeacherPost);
    yield takeLatest(TEACHER.DELETE, handleTeacherDelete);
    yield takeLatest(TEACHER.EDIT, handleTeacherEdit);
}