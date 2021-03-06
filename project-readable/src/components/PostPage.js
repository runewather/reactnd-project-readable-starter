import React, { Component } from 'react'
import Post from './Post'
import Button from './Button'
import Comment from './Comment'
import AddEditComment from './AddEditComment'
import EditPost from './EditPost'
import { handleFetchPostById } from '../actions/PostActions'
import { handleFetchPostComments } from '../actions/CommentActions'
import { connect } from 'react-redux'

const style = {
    display: 'flex',
    justifyContent: 'center'
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

class PostPage extends Component {
    constructor(props) {
        super(props)        

        this.state = {
            showCommentForm : false,
            showPostForm: false
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params

        this.props.dispatch(handleFetchPostById(id))
        this.props.dispatch(handleFetchPostComments(id))
    }

    showPostComments = () => {
        return Object.values(this.props.comments).map((comment) => {
            return (
                <Comment key={generateUID()} id={comment.id} parentId={comment.parentId} body={comment.body} author={comment.author} voteScore={comment.voteScore} timestamp={comment.timestamp} />
            )
        })
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

    showPostForm = () => {        
        this.setState({
            showPostForm : true
        })        
    }

    hidePostForm = () => {
        this.setState({
            showPostForm : false
        })
    }

    render() {
        const post = this.props.posts
        return (
            <div style={ { width : '100%' } }>                
                {
                    Object.keys(this.props.posts).length > 0 ? 
                    <Post key={generateUID()} 
                    isSinglePage={true}
                    id={post.id}
                    title={post.title} 
                    author={post.author} 
                    body={post.body} 
                    voteScore={post.voteScore}
                    timestamp={post.timestamp}
                    category={post.category}
                    commentCount={post.commentCount}
                    canEdit={true}
                    canDelete={true} />
                    : <h3 style={ { textAlign : 'center' }}> 404 PAGE NOT FOUND </h3>
                }
                <div style={style}>
                    {
                        this.state.showPostForm === false ? <Button name={'Edit'} action={this.showPostForm} /> 
                        : <Button name={'Hide'} action={this.hidePostForm}/>
                    }                    
                </div>
                {
                    this.state.showPostForm ? <EditPost id={post.id} title={post.title} body={post.body} /> : null
                }  
                <h3 className="Title">Comments</h3>
                <div style={style}>
                    {
                        this.state.showCommentForm === false ? <Button name={'Add'} action={this.showCommentForm} /> 
                        : <Button name={'Hide'} action={this.hideCommentForm}/>
                    }                    
                </div>   
                {
                    this.state.showCommentForm ? <AddEditComment isEdit={false} id={this.props.posts.id} /> : null
                }                            
                { Object.keys(this.props.comments).length > 0 ? 
                this.showPostComments() : <h3 style={ { textAlign : 'center' }}>No Comments</h3> }
            </div>            
        )
    }
}

const mapStateToProps = state => ({
    posts : {
      ...state.posts
    },
    comments : {
      ...state.comments
    }
})

export default connect(mapStateToProps)(PostPage)