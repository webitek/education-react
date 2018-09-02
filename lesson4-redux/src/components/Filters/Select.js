import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectFilter extends Component {
  state = {
    selected: []
  }

  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = selected => this.setState({selected})

  render() {
    const {selected} = this.state
    const {articles} = this.props

    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return <Select options={options}
                   value={selected}
                  //multi = {true}
                   multi
                   onChange={this.handleChange}/>
  }
}

export default SelectFilter
