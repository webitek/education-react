import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'
import ArticleList from './components/ArticleList';


render(<App articles = {articles} />, document.getElementById('container'));

// const article = articles[0];

/*function HelloWorld() {
    return <h1>Hello World1</h1>
}*/
// render(<Article article = {articles[0]} foo = 'string' />, document.getElementById('container'));

// render(<Article article = {article}/>, document.getElementById('container'))
