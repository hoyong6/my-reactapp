import { put, call, take } from 'redux-saga/effects'
import { actionTypes } from '../common/actionTypes'
// 写一个定时器玩儿，promise版本的
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* addNum(num) {
  try {
    console.log('--->查看传过来的参数', num)
    return yield call(delay, 1000)
  } catch (err) {
    yield put({type: actionTypes.ERROR})
  }
}
let num = 0
export function* addNumFlow() {
  while (true) {
    yield take(actionTypes.TODO_ADD) // 阻塞函数
    num += 1
    yield call(addNum, num)
    yield put({
      type: actionTypes.TODO_ADD,
      data: num
    })
  }
}

export function* submitInput() {
  while (true) {
   let res = yield take(actionTypes.SUBMITINPUT) // 查看返回的函数到底是什么
   console.log(res)
   yield put({
    type: actionTypes.SUBMITINPUT,
    data: res.value
  })
  }
}
