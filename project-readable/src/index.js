import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import App from './App'
import posts from './reducers/posts'
import categories from './reducers/category'

const store = createStore(combineReducers({posts, categories, loadingBar: loadingBarReducer}), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
  )
