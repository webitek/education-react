import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css' // need:  npm i style-loader css-loader --SD

class App extends Component {
  static propTypes = {

  };

  state = {
      selection: null
  }

  render() {
    const {articles} = this.props // чтоб не писать много раз this.props
    const options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id
    }))
    return (
      <div>
        <UserForm/>
        <Select options = {options}
                value={this.state.selection}
                onChange={this.changeSelection}
                //multi = {true}
                multi/>
        {/*для того чтоб при рендере открыть статью передаем id нужной статьи*/}
        <ArticleList articles = {articles } defaultOpenId = {articles[0].id}/>
        <ArticlesChart articles = {articles }/>
      </div>
    )
  }

  changeSelection = selection => this.setState({ selection })
}

export default App
