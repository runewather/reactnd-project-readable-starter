import React, { Component, Fragment } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { handleUpdateComment, handleAddComment } from '../actions/CommentActions'
import './AddComment.css'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

class AddEditComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            body: props.body
        }
    }

    handleInput = (evt) => {
        let name = evt.target.name        
        this.setState({
            [name] : evt.target.value
        })        
    }

    addNewComment = () => {
        let comment = this.state
        comment.id = generateUID()
        comment.parentId = this.props.id
        comment.timestamp = new Date().getTime()    
        comment.voteScore = 1
        comment.deleted = false    
        this.props.dispatch(handleAddComment(this.props.id, comment))
    }

    updateComment = () => {
        let comment = this.state       
        comment.timestamp = new Date().getTime()    
        this.props.dispatch(handleUpdateComment(this.props.parentId, this.props.id, comment))
    }

    render() {
        return (
            <div className="Add-comment">
                {
                    !this.props.isEdit ? 
                    <Fragment>
                        <h4>Author</h4>
                        <input name="author" value={this.state.author} onChange={this.handleInput} type="text"></input> 
                    </Fragment>
                    : null
                }                
                <h4>Body</h4>
                <textarea name="body" value={this.state.body} onChange={this.handleInput} rows="3" cols="80" style={{marginBottom: '15px'}}></textarea>
                <Button name={this.props.isEdit ? 'Update' : 'Comment'} action={this.props.isEdit ? this.updateComment : this.addNewComment} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(AddEditComment)