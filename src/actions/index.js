// 需要提交的 actions
import { actionTypes } from '../common/actionTypes'

export function addItem(value) {
  return {
    type: actionTypes.TODO_ADD,
    value
  }
}

export function submitInput(value) {
  return {
    type: actionTypes.SUBMITINPUT,
    value
  }
}