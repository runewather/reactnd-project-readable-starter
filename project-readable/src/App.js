import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AddPost from './components/AddPost'
import AddPostButton from './components/AddPostButton'
import PostList from './components/PostList'
import PostPage from './components/PostPage'
import Button from './components/Button'
import './App.css'
import './Normalize.css'

class App extends Component {  
  render() {        
    return (
      <Router>
          <div className="App">
            <AddPostButton />
            <header className="App-header">
              <Link to={'/'} style={ { textDecoration: 'none', color: 'black'} }>
                <h1 className="Title">React Blog</h1>   
              </Link>      
            </header>
            <div className="Categories">
              <Button name={"React"} />
              <Button name={"Redux"} />
              <Button name={"Udacity"} />
            </div>
            <div className="Wrapper">
              <Route exact path='/' component={PostList} />
              <Route exact path='/addPost' component={AddPost} />
              <Route exact path='/postPage/:id' component={PostPage} />
            </div>            
          </div>
      </Router>
    )
  }
}

export default App;
