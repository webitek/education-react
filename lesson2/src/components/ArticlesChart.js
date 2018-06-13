import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
  static propTypes = {

  };

  componentDidMount() {
    //d3 works with this.refs.container
  }

  componentWillReceiveProps(nextProps) {
    //update chart for new articles
  }

  render() {
    return (
      <div ref='chart'></div>
    )
  }

  componentWillUnmount() {
    //do some cleanup
  }
}

export default ArticlesChart
