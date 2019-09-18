import { fork } from 'redux-saga/effects'
import {addNumFlow} from './sagas/addNumSaga'

export default function* rootSaga() {
  yield fork(addNumFlow)
}