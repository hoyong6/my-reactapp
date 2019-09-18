import { actionTypes } from '../common/actionTypes'

const addNum = {
  num: 0
}

function addNums (state = addNum, action) {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return {
        ...state,
        list: action.data
      }
    default: 
      return {
        ...state,
        list: 0
      }
  }
}

export default addNums