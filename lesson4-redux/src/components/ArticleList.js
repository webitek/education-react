import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from "../decoretors/accordion";
import {connect} from 'react-redux'

// export default class ArticleList extends Component{
class ArticleList extends Component{

    /*state = {
        openArticleId: null
    }*/
    static propTypes ={
      // from connect
      articles: PropTypes.array.isRequired,
      //from accordion
      openItemId: PropTypes.string,
      toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
      const { articles, openItemId, toggleOpenItem } = this.props
      const articleElements = articles.map((article) => <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === openItemId}
            toggleOpen = {toggleOpenItem(article.id)}
          />
      </li>);

      return (
        <ul>
          {articleElements}
        </ul>
      )
    }

    toggleOpenArticle(openArticleId) {
        this.setState({openArticleId})
    }
}

export default connect((state) => ({
  articles: state.articles
}))(accordion(ArticleList))