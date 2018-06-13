import React, {Component} from 'react'
import Comment from "./Comment";
import CommentList from "./CommentList";

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        //this.toggleOpen = this.toggleOpen().bind(this) //bad practices
    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        // const body  = isOpen ? <section>{article.text}</section> : null
        return (
            <div>
                {/*{(new Date).toLocaleString()}*/}
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody () {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text} <CommentList comments={article.comments} /></section>
    }

    // вместо .bind(this)
    toggleOpen =(e) => {
        e.preventDefault();
        console.log(e);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



/*
export default function Article(props) {
    const {article} = props;
    console.log('---',props);
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
