import React, {Component, PureComponent} from 'react'
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

    /**
     * import {PureComponent} from 'react'
     * PureComponent сравнивает все старые props
     * со всеми новыми props
     */
    /**
     *  нужно ли обновлять все 7 статей
     *  shouldComponentUpdate
     */
    /*shouldComponentUpdate(nextProps, nextState) {
      return nextProps.isOpen !== this.props.isOpen
    }*/


    render() {
        const {article, isOpen, toggleOpen} = this.props;
      console.log('---', 'update article');
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
        // console.log('---', ref)
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