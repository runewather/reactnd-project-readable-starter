import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import { FaCommentAlt } from 'react-icons/fa'
import Button from './Button'
import { handleDeletePostById, handleVotePost } from '../actions/PostActions'
import './Post.css'

class Post extends Component {

    formatPostDate = (timestamp) => {
        let date = new Date(timestamp) 
        return date.toLocaleDateString() + " " + date.toLocaleTimeString()
    }
    
    deletePost = () => {
        this.props.dispatch(handleDeletePostById(this.props.id) )      
    }

    render() {      
        return (
            <div className="Post">
                <div className="Post-header">
                    <Link to={`/posts/${this.props.category}/${this.props.id}`} style={{'textDecoration' : 'none', 'color': 'black'}} >
                        <h3 className="Post-title">{ this.props.title }</h3>
                    </Link>                  
                </div>                
                <p>{ this.props.body }</p>
                <span>by<strong> { this.props.author }</strong>, { this.formatPostDate(this.props.timestamp) }</span>  
                <div className="Post-footer">
                    <Link to={`/posts/${this.props.category}/${this.props.id}`} style={{'textDecoration' : 'none', 'color': 'black'}} >     
                        <FaCommentAlt className="Post-comment-icon"/>
                    </Link>
                    <div className="Icon-counter">
                        { this.props.commentCount }
                    </div>
                    <FaThumbsUp onClick={() => { this.props.dispatch(handleVotePost(this.props.id, { option: 'upVote'}, this.props.isSinglePage)) }} className="Post-comment-icon" /> 
                    <FaThumbsDown onClick={() => { this.props.dispatch(handleVotePost(this.props.id, { option: 'downVote'}, this.props.isSinglePage)) }} className="Post-comment-icon"/>  
                    <div className="Icon-counter">
                        { this.props.voteScore }
                    </div>
                    {
                        this.props.canEdit ? <Button name={"Edit"}/> : null
                    }
                    {
                        this.props.canDelete ? <Link to={'/'} style={{'textDecoration' : 'none', 'color': 'black'}}><Button name={"Delete"} action={this.deletePost} /></Link>  : null
                    }                                             
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    canEdit : PropTypes.bool
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(Post)