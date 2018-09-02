import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Comment from "./Comment";
import CommentList from "./CommentList";
import toggleOpen from "../decoretors/toggleOpen"

class Article extends Component {
    /**
     * для указания типа ожидаемых данных
     * https://reactjs.org/docs/typechecking-with-proptypes.html
     * в конце указывается .isRequired для обязательных
     *
    */
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
      isOpen: PropTypes.bool,
      toggleOpen: PropTypes.func
    }

    // обновление
    componentWillReceiveProps(nextProps) {
      console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    // готов и будет строится
    componentWillMount() {
        console.log('---', 'mounting')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            // работа с рефами с реальным домом
            <div ref = {this.setContainerRef}>
                {/*{(new Date).toLocaleString()}*/}
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    // работа с рефами с реальным домом
    setContainerRef = ref => {
        this.container = ref
        console.log('---', ref)
    }

  // потроился
    componentDidMount() {
      console.log('---', 'mounted')
    }

    getBody () {
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref = {this.setCommentsRef} />
            </section>
        )
    }

  setCommentsRef = ref => {
    console.log('---', findDOMNode(ref));
  }

}

export default Article