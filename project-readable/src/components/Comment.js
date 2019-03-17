import React, { Component } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import './Comment.css'
import Button from './Button';

class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ipsum sit amet commodo tincidunt. Integer a odio volutpat, rutrum nunc vitae, vestibulum ligula. In suscipit, lacus non rutrum ullamcorper, metus lacus iaculis metus, nec iaculis dolor sapien at risus. Aliquam eget sem et felis pharetra ultrices eu vitae turpis. Vestibulum aliquet eros quis orci molestie, vel pretium sapien malesuada. Integer feugiat nisl ut congue rhoncus. Aliquam vitae neque purus. Vivamus quis facilisis eros. Nulla sit amet erat tempus, rutrum diam id, fringilla elit. Curabitur et dolor velit. Nullam at tellus finibus, faucibus ipsum pellentesque, laoreet nisl. 
                Sed vitae ante auctor, posuere massa eu, lacinia quam. 
                Sed venenatis diam sit amet arcu aliquam aliquet id id dolor.</p>
                <span style={{ 'display' : 'block' }}>by <strong>Author</strong></span>
                <FaThumbsUp className="Post-comment-icon" /> 
                <div className="Icon-counter">
                    5
                </div>      
                <FaThumbsDown className="Post-comment-icon"/>
                <div className="Icon-counter">
                    5
                </div> 
                <Button name={'Edit'} />
                <Button name={'Delete'} />
            </div>
        )
    }
}

export default Comment