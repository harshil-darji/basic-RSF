import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import teacherSaga from './teacherSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    teacherSaga()
  ])
}