import {takeLatest} from 'redux-saga/effects';
import { GET_LIST_STUDENT } from '../reducer/actionTypes';
import * as Saga from './saga';

export function* n10Saga() {
  yield takeLatest(GET_LIST_STUDENT, Saga.getListStudents);
}