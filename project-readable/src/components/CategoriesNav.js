import React, { Component } from 'react'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { handleFetchCategories } from '../actions/CategoryAction'
import { handleFetchPostsByCategories } from '../actions/PostActions'

class CategoriesNav extends Component {

    componentDidMount() {
      this.props.dispatch(handleFetchCategories())
    }

    getPostsByCategories = (category) => {       
        this.props.dispatch(handleFetchPostsByCategories(category))
    }

    generateCategoriesButton = () => {
        if(this.props.categories !== undefined) {
            return this.props.categories.map((cat, index) => {
                return (                    
                    <Button key={index} name={cat.name} action={ () => { this.getPostsByCategories(cat.name) }} />
                )
            })
        }
    }


    render() {
        return (
            <div className="Categories">
              { this.generateCategoriesButton() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.categories
})

export default connect(mapStateToProps)(CategoriesNav)

