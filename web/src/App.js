import React from 'react'
import Header from './Header'
import Main from './Main'
import './global.css'
import './App.css'

function App () {
  return (
    <>
      <Header />
      <div id='app'>
        <Main />
      </div>
    </>
  )
}

export default App
