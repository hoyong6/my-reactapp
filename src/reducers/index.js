// reducer主入口
import {combineReducers} from 'redux'
import {addNums, submitInput} from './addNums'

const reducer = combineReducers({
  addNums,
  submitInput
})

export default reducer
