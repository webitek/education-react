import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import Comment from "./Comment";
import CommentList from "./CommentList";
import { CSSTransitionGroup } from 'react-transition-group'
import toggleOpen from "../decoretors/toggleOpen"
import './article.css'

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
                {/*{this.getBody()}*/}
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true} // для анимированого появления по дефолту открытой статьи
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={300} // react добавляет в реальный дом элем.
                    transitionLeaveTimeout={500} // react убирает из реального дома элем.
                    component = 'div' // by default CSSTransitionGroup обворчивает эл в span
                >
                    {this.getBody()}
                </CSSTransitionGroup>
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
            <section className="section">
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