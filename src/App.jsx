import React from 'react'

import { store } from './components/redux/store'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import { Provider } from 'react-redux'
import './App.css'

function App() {


  return (
    <>
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
    </>
  )
}

export default App
