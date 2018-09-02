import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css' // need:  npm i style-loader css-loader --SD
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component {

  render() {
    return (
      <div>
        <Counter/>
        <UserForm/>
        {/*читаем из store все статьи*/}
        <Filters articles = {[]}/>
        {/*читали из fixtuares*/}
        {/*<Filters articles = {articles}/>*/}

        {/*читаем из store все статьи*/}
        <ArticleList/>
        {/*для того чтоб при рендере открыть статью передаем id нужной статьи*/}
        {/*<ArticleList articles={articles } defaultOpenId={articles[0].id}/>*/}
      </div>
    )
  }
}

export default App
