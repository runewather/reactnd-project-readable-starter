import React, { Component, Fragment } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import AddEditComment from './AddEditComment'
import './Comment.css'
import Button from './Button';

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            canEdit : false
        }
    }

    render() {
        return (
            <Fragment>
                <div className="Comment">
                    <p>{ this.props.body }</p>
                    <span style={{ 'display' : 'block' }}>by <strong>{ this.props.author }</strong></span>
                    <FaThumbsUp className="Post-comment-icon" /> 
                    <div className="Icon-counter">
                        5
                    </div>      
                    <FaThumbsDown className="Post-comment-icon"/>
                    <div className="Icon-counter">
                        5
                    </div> 
                    <Button name={'Edit'} action={() => { this.setState({ canEdit : !this.state.canEdit }) }} />
                    <Button name={'Delete'} />
                </div>
                { this.state.canEdit ? <AddEditComment /> : null }                
            </Fragment>
        )
    }
}

export default Comment