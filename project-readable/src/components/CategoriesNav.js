import React, { Component } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleFetchCategories } from '../actions/CategoryAction'
import { handleFetchPostsByCategories } from '../actions/PostActions'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

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
                    <Link key={generateUID()} to={'/' + cat.name} style={ { textDecoration: 'none', color: 'black'} } >
                        <Button name={cat.name} action={ () => { this.getPostsByCategories(cat.name) }} />
                    </Link>                 
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

