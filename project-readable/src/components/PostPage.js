import React, { Component } from 'react'
import Post from './Post'
import Button from './Button'
import Comment from './Comment'
import AddEditComment from './AddEditComment'
import { handleFetchPostById } from '../actions/PostActions'
import { connect } from 'react-redux'

const style = {
    display: 'flex',
    justifyContent: 'center'
}

class PostPage extends Component {
    constructor(props) {
        super(props)
        const { id } = this.props.match.params

        this.props.dispatch(handleFetchPostById(id))

        this.state = {
            showCommentForm : false
        }
    }

    showCommentForm = () => {        
        this.setState({
            showCommentForm : true
        })        
    }

    hideCommentForm = () => {
        this.setState({
            showCommentForm : false
        })
    }

    render() {
        const post  = this.props.post
        return (
            <div>                
                <Post key={post.id} 
                id={post.id}
                title={post.title} 
                author={post.author} 
                body={post.body} 
                voteScore={post.voteScore}
                timestamp={post.timestamp}
                commentCount={post.commentCount} />
                <h3 className="Title">Comments</h3>
                <div style={style}>
                    {
                        this.state.showCommentForm === false ? <Button name={'Add'} action={this.showCommentForm} /> 
                        : <Button name={'Hide'} action={this.hideCommentForm}/>
                    }                    
                </div>   
                {
                    this.state.showCommentForm ? <AddEditComment /> : null
                }                            
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>            
        )
    }
}

const mapStateToProps = state => ({
    post : {
      ...state.posts
    }
})

export default connect(mapStateToProps)(PostPage)