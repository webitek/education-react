/**
 * main reducer - управляет всем стором
 * собираем в кучу все редюсеры
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'

export default combineReducers({
  count: counterReducer
})