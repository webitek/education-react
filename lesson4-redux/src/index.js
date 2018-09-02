import React from 'react'
import {render} from 'react-dom'
// import App from './components/App'
import Root from './components/Root'
//import {articles} from './fixtures'
//import ArticleList from './components/ArticleList';

//читаем из store все статьи
render(<Root />, document.getElementById('container'));
// читали из fixtuares
// render(<Root articles = {articles} />, document.getElementById('container'));

// const article = articles[0];

/*function HelloWorld() {
    return <h1>Hello World1</h1>
}*/
// render(<Article article = {articles[0]} foo = 'string' />, document.getElementById('container'));

// render(<Article article = {article}/>, document.getElementById('container'))
