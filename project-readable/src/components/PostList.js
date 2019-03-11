import React, { Component, Fragment } from 'react'
import Post from './Post'

class PostList extends Component {
    render() {
        return (
            <Fragment>
                <Post />
                <Post />
                <Post />
                <Post />
            </Fragment>
        )
    }
}

export default PostList