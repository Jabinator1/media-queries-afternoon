import React, { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'

export class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Body />
      </body>
    )
  }
}

export default App
