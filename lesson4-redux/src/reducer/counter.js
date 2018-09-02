/**
 * Reducer - чистая ф-ция
 * не сохраняет состояние
 * не зависит от окружения
 *
 * получает состояние store
 * на выход отдает новое состояние нашего Store
 *
 * in console
 * strore.getState()
 * strore.dispatch({type:'INCREMENT'})
 */
export default (count = 0, action) => {
  const {type} = action
  switch (type) {
    case 'INCREMENT' :return count + 1
  }
  return count
}
