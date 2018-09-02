import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decoretors/toggleOpen'

/**
 * React Stateless Functional Components
 * @param comments
 * @param isOpen
 * @param toggleOpen
 * @returns {XML}
 * @constructor
 */

function CommentList ({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show ' + comments.length +' somments';
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>);
}

/**
 *
 * @param comments
 * @param isOpen
 * @returns {*}
 */

function getBody({comments, isOpen}) {
    if(!isOpen) return null
    if(!comments.length) return <p>No comments yet</p>
    return (
      <div>
        <ul>
          {comments.map(comment =><li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
        <CommentForm/>
      </div>
    )
}

/**
 * React Class Components
 */

/*class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const text = this.props.isOpen ? 'hide comments' : 'show ' + this.props.comments.length +' somments';
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>);
    }

    getBody() {
        const {comments, isOpen} = this.props
        if(!isOpen) return null
        if(!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment =><li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }

}*/

export default toggleOpen(CommentList)