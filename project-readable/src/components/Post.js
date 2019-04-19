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
    
    deletePost = () => {
        this.props.dispatch(handleDeletePostById(this.props.id) )      
    }

    render() {      
        return (
            <div className="Post">
                <div className="Post-header">
                    <Link to={`/postPage/${this.props.id}`} style={{'textDecoration' : 'none', 'color': 'black'}} >
                        <h3 className="Post-title">{ this.props.title }</h3>
                    </Link>                  
                </div>                
                <p>{ this.props.body }</p>
                <span>by<strong> { this.props.author }</strong>, { this.formatPostDate(this.props.timestamp) }</span>  
                <div className="Post-footer">
                    <Link to={`/postPage/${this.props.id}`} style={{'textDecoration' : 'none', 'color': 'black'}} >     
                        <FaCommentAlt className="Post-comment-icon"/>
                    </Link>
                    <div className="Icon-counter">
                        { this.props.commentCount }
                    </div>
                    <FaThumbsUp onClick={() => { this.props.dispatch(handleVotePost(this.props.id, { option: 'upVote'})) }} className="Post-comment-icon" /> 
                    <FaThumbsDown onClick={() => { this.props.dispatch(handleVotePost(this.props.id, { option: 'downVote'})) }} className="Post-comment-icon"/>  
                    <div className="Icon-counter">
                        { this.props.voteScore }
                    </div>
                    {
                        this.state.canEdit ? <Button name={"Edit"}/> : null
                    }
                    <Button name={"Delete"} action={this.deletePost} />                          
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