import React, { Component, Fragment } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import AddEditComment from './AddEditComment'
import { connect } from 'react-redux'
import { handleDeletePostComment, handleVoteComment } from '../actions/CommentActions'
import { handleFetchPostById } from '../actions/PostActions'
import './Comment.css'
import Button from './Button';

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            canEdit : false
        }
    }

    formatPostDate = (timestamp) => {
        let date = new Date(timestamp) 
        return date.toLocaleDateString() + " " + date.toLocaleTimeString()
    }

    deleteComment = async () => {
        await this.props.dispatch(handleDeletePostComment(this.props.id, this.props.parentId))
        await this.props.dispatch(handleFetchPostById(this.props.parentId))
    }

    render() {
        return (
            <Fragment>
                <div className="Comment">
                    <p>{ this.props.body }</p>
                    <span style={{ 'display' : 'block' }}>by <strong>{ this.props.author }</strong>, { this.formatPostDate(this.props.timestamp) }</span>
                    <FaThumbsUp onClick={() => { this.props.dispatch(handleVoteComment( this.props.parentId, this.props.id, { option: 'upVote'})) }} className="Post-comment-icon" />      
                    <FaThumbsDown onClick={() => { this.props.dispatch(handleVoteComment( this.props.parentId, this.props.id, { option: 'downVote'})) }} className="Post-comment-icon"/>
                    <div className="Icon-counter">
                        { this.props.voteScore }
                    </div> 
                    <Button name={'Edit'} action={() => { this.setState({ canEdit : !this.state.canEdit }) }} />
                    <Button name={'Delete'} action={ this.deleteComment } />
                </div>
                { this.state.canEdit ? <AddEditComment isEdit={true} id={this.props.id} parentId={this.props.parentId} body={this.props.body} /> : null }                
            </Fragment>
        )
    }
}

export default connect(() => { return {} })(Comment)