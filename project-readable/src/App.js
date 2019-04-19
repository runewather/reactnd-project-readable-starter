import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AddPost from './components/AddPost'
import AddPostButton from './components/AddPostButton'
import PostList from './components/PostList'
import PostPage from './components/PostPage'
import CategoriesNav from './components/CategoriesNav'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleFetchPosts } from './actions/PostActions'

import './App.css'
import './Normalize.css'

class App extends Component {  
  render() {  
    return (
      <Router>
        <Fragment>
            <AddPostButton />
            <LoadingBar />
          <div className="App">                               
            <header className="App-header">              
              <Link to={'/'} onClick={ () => { this.props.dispatch(handleFetchPosts()) } } 
              style={ { textDecoration: 'none', color: 'black'} }>
                <h1 className="Title">React Blog</h1>   
              </Link>    
              <CategoriesNav />
            </header>            
            <div className="Wrapper">
              <Route exact path='/' component={PostList} />
              <Route exact path='/:category' component={PostList} />
              <Route exact path='/post/add' component={AddPost} />              
              <Route exact path='/postPage/:id' component={PostPage} />             
            </div>            
          </div>
        </Fragment>          
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App);
