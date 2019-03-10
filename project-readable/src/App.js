import React, { Component } from 'react'
import Post from './components/Post'
import './App.css'

class App extends Component {  
  render() {        
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Udacity React Readable</h1>         
        </header>
        <div className="Categories">
          
        </div>
        <div className="Wrapper">
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
