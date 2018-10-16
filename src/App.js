import React, { Component, Fragment } from 'react'
import Form from './components/material-ui/Form'
import AppBar from './components/material-ui/AppBar'
import SignIn from './components/material-ui/SignIn'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      collapse: true,
      route: 'signin',
      isSignedin: false
    }
  }

  onButtonClick = () => {
    if (this.state.collapse === true) {
      this.setState({ collapse: false })
    } else if (this.state.collapse === false) {
      this.setState({ collapse: true })
    }
  }

  onRouteChange = route => {
    this.setState({ route: route })
    if (route === 'home') {
      this.setState({ isSignedin: true })
    } else {
      this.setState({ isSignedin: false })
    }
  }

  render() {
    return (
      <Fragment>
        {!this.state.isSignedin ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <AppBar />
            <Form />
          </div>
        )}
      </Fragment>
    )
  }
}

export default App
