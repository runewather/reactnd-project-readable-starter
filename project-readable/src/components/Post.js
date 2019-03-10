import React, { Component } from 'react'
import { FaCommentAlt } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import './Post.css'

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <div className="Post-header">
                    <h3 className="Post-title">Titulo do post</h3>
                    <button className="Category-button">Category</button>
                </div>                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ipsum sit amet commodo tincidunt. Integer a odio volutpat, rutrum nunc vitae, vestibulum ligula. In suscipit, lacus non rutrum ullamcorper, metus lacus iaculis metus, nec iaculis dolor sapien at risus. Aliquam eget sem et felis pharetra ultrices eu vitae turpis. Vestibulum aliquet eros quis orci molestie, vel pretium sapien malesuada. Integer feugiat nisl ut congue rhoncus. Aliquam vitae neque purus. Vivamus quis facilisis eros. Nulla sit amet erat tempus, rutrum diam id, fringilla elit. Curabitur et dolor velit. Nullam at tellus finibus, faucibus ipsum pellentesque, laoreet nisl. Sed vitae ante auctor, posuere massa eu, lacinia quam. Sed venenatis diam sit amet arcu aliquam aliquet id id dolor. Ut mollis sagittis nisi eu facilisis. Maecenas iaculis congue sem, quis ultricies nulla aliquet eu. Mauris cursus justo metus, sed accumsan metus rhoncus vitae.</p>
                <span><strong>by Author</strong> in <strong>10/12/1994</strong></span>  
                <div className="Post-footer">
                    <FaCommentAlt className="Post-comment-icon" />  
                    <div className="Icon-counter">
                        5
                    </div>                   
                    <FaThumbsUp className="Post-comment-icon" /> 
                    <div className="Icon-counter">
                        5
                    </div>                                    
                </div>
            </div>
        )
    }
}

export default Post