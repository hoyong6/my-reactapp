import { actionTypes } from '../common/actionTypes'

const addNum = {
  num: 0
}

function addNums (state = addNum, action) {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return state.num + 1
    default: 
      return state
  }
}

export default addNums