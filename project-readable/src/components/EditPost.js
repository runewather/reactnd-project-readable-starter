import React, { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { handleUpdatePost } from '../actions/PostActions'
import './AddComment.css'

class EditPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            body: props.body
        }
    }

    handleInput = (evt) => {
        let name = evt.target.name        
        this.setState({
            [name] : evt.target.value
        })        
    }

    updatePost = () => {
        const newData = this.state
        newData.timestamp = new Date().getTime()  
        this.props.dispatch(handleUpdatePost(this.state.id, newData))
    }

    render() {
        return (
            <div className="Add-comment">
                <h4>Title</h4>
                <input name="title" value={this.state.title} onChange={this.handleInput} type="text"></input>
                <h4>Body</h4>
                <textarea name="body" value={this.state.body} onChange={this.handleInput} rows="3" cols="80" style={{marginBottom: '15px'}}></textarea>
                <Button name={'Update'} action={this.updatePost} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps)(EditPost)