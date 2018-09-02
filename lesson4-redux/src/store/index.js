import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev only !!!!!!!!!!!!!
/**
 * для того чтоб в дев режиме могли увидеть
 * @type {Store<any & any, AnyAction> & any}
 */
window.strore = store

export default store