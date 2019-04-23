import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from './Button'
import { handleAddNewPost } from '../actions/PostActions'
import { handleFetchCategories } from '../actions/CategoryAction'
import './AddPost.css'

class AddPost extends Component {
    
    state = {
        title: '',
        author: '',
        body: '',
        category: ''
    }

    selectRef = React.createRef();

    componentDidMount() {
        this.props.dispatch(handleFetchCategories())
    }

    showCategoriesOptions = () => {
        if(Object.keys(this.props.categories).length > 0) {
            return Object.keys(this.props.categories).map((c) => {
                return (<option key={this.props.categories[c].name} value={this.props.categories[c].name}>{this.props.categories[c].name}</option>)
            })
        }        
    }

    handleInput = (evt) => {
        let name = evt.target.name        
        this.setState({
            [name] : evt.target.value
        })        
    }
    
    addNewPost = () => {
        let newPost = this.state    
        newPost.category = this.selectRef.current.value
        newPost.timestamp = new Date().getTime()  
        this.props.dispatch(handleAddNewPost(newPost))        
    }

    render() {
        return (
            <Fragment>
                <h3 className="Post-title">Title</h3>
                <input name="title" type="text" value={this.state.title} onChange={this.handleInput} className="Post-input-title" />  
                <h3 className="Post-title">Author</h3>
                <input name="author" type="text" value={this.state.author} onChange={this.handleInput} className="Post-input-title" />             
                <h3 className="Post-title">Content</h3>
                <textarea name="body" value={this.state.body} onChange={this.handleInput} style={{ 'marginBottom' : '15px' }} rows="4" cols="50" className="Post-input" />
                <h3 style={{ 'marginBottom' : '15px', 'marginTop' : '0px' }} className="Post-title">Category</h3>
                <select ref={this.selectRef} name="category" value={this.state.category} onChange={this.handleInput} style={{ 'marginBottom' : '15px', 'marginTop' : '0px' }}>
                    { this.showCategoriesOptions() }
                </select>
                <Link to={'/'} style={{'textDecoration' : 'none', 'color': 'black'}} >
                    <Button name={'Submit'} action={this.addNewPost} /> 
                </Link>              
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    categories : {
      ...state.categories
    }
})

export default connect(mapStateToProps)(AddPost)