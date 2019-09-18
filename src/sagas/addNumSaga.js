import { put, call, take } from 'redux-saga/effects'
import { actionTypes } from '../common/actionTypes'
// 写一个定时器玩儿，promise版本的
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* addNum(num) {
  try {
    console.log('--->查看传过来的参数', num)
    return yield call(delay, 100)
  } catch (err) {
    yield put({type: actionTypes.ERROR})
  }
}

export function* addNumFlow() {
  while (true) {
    yield take(actionTypes.TODO_ADD) // 阻塞函数
    yield call(addNum, 2)
    yield put({
      type: actionTypes.TODO_ADD,
      data: 1
    })
  }
}
