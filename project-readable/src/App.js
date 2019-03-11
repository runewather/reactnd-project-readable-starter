import React, { Component } from 'react'
import Post from './components/Post'
import Button from './components/Button'
import './App.css'
import './Normalize.css'

class App extends Component {  
  render() {        
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Udacity React Readable</h1>         
        </header>
        <div className="Categories">
          <Button name={"React"} />
          <Button name={"Redux"} />
          <Button name={"Udacity"} />
        </div>
        <div className="Wrapper">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
