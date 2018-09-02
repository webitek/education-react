/**
 * main reducer - управляет всем стором
 * собираем в кучу все редюсеры
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'


export default combineReducers({
  count: counterReducer,
  articles
})