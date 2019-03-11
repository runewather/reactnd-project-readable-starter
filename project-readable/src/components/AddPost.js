import React, { Component, Fragment } from 'react'
import Button from './Button'
import './AddPost.css'

class AddPost extends Component {
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
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <Button name={'Submit'} />
            </Fragment>
        )
    }
}

export default AddPost