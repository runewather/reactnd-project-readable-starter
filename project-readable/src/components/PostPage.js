import React, { Component } from 'react'
import Post from './Post'
import Comment from './Comment'

class PostPage extends Component {
    render() {
        const { id } = this.props.match.params
        return (
            <div>                
                <Post />
                <h3 className="Title">Comments</h3>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>            
        )
    }
}

export default PostPage