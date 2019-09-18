import { fork } from 'redux-saga/effects'
import {addNumFlow, submitInput} from './sagas/addNumSaga'

export default function* rootSaga() {
  yield fork(addNumFlow)
  yield fork(submitInput) // 增加监听
}