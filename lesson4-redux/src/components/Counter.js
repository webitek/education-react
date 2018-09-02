import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux' // decorator redux-a для доступа в стор
import {increment} from '../AC'
/**
 * В STORE РУКАМИ НЕ ЛЕЗЕМ!!!
 * import store from '../store'
 * <h2>{store.getState().count}</h2>
 * так делать не нужно!
 */

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    )
  }

  handleIncrement = () => {
    console.log('handleIncrement');
    /**
     * реально никто так не передает значения в store
     * всё передается через action creators AC
     */
    /*this.props.dispatch({
      type: 'INCREMENT'
    })*/
    // this.props.dispatch(increment())
    // this.props.increment()
    const {increment} = this.props
    increment()
  }
}

/*function mapStateToProps(state) {
  return {
    counter: state.count
  }
}
const mapToDispatch = {increment}
const decorator = connect(mapStateToProps, mapToDispatch)
export default decorator(Counter)*/

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter)
