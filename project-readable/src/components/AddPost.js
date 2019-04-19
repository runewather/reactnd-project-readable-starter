import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { handleFetchCategories } from '../actions/CategoryAction'
import './AddPost.css'

class AddPost extends Component {
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

    render() {
        return (
            <Fragment>
                <h3 className="Post-title">Title</h3>
                <input type="text" className="Post-input-title" />  
                <h3 className="Post-title">Author</h3>
                <input type="text" className="Post-input-title" />             
                <h3 className="Post-title">Content</h3>
                <textarea style={{ 'marginBottom' : '15px' }} rows="4" cols="50" className="Post-input" />
                <h3 style={{ 'marginBottom' : '15px', 'marginTop' : '0px' }} className="Post-title">Category</h3>
                <select style={{ 'marginBottom' : '15px', 'marginTop' : '0px' }} name="cars">
                    { this.showCategoriesOptions() }
                </select>
                <Button name={'Submit'} />
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