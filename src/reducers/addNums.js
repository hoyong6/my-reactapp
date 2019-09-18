import { actionTypes } from '../common/actionTypes'

const addNum = {
  num: 0
}

export function addNums (state = addNum, action) {
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

export function submitInput (state, action) {
  switch (action.type) {
    case actionTypes.SUBMITINPUT:
      return {
        ...state,
        res: action.data
      }
    default: 
      return {
        ...state,
        res: ''
      }  
  }
}