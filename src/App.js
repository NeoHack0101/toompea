import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import UserTable from './components/UserTable'
import UserTable2 from './components/UserTable2'
import Navigation from './components/Navigation'
import './App.css'

const users = [
  {
    aadress: 'Nugise 14',
    eesNimi: 'Dimitri',
    email: 'ala@rull.ee',
    isikukood: '3939393939',
    sünniaeg: '1999-02-01',
    pereNimi: 'Nugis',
    sugu: 'M',
    sünniaeg: '',
    telefon: '565656565'
  },
  {
    aadress: 'Kallala 43',
    eesNimi: 'Dimitri',
    email: 'fasdf@fj.com',
    isikukood: '32342342',
    pereNimi: 'Kala',
    sugu: 'M',
    sünniaeg: '1995-01-02',
    telefon: '5656565656'
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',
      isSignedin: true
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

  onSubmit = user => {
    users.push(user)
    console.log(users)
  }

  render() {
    return (
      <Fragment>
        {!this.state.isSignedin ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <AppBar />
            <UserTable users={users} />
            <UserTable2 users={users} />

            <Form onSubmit={user => this.onSubmit(user)} />
          </div>
        )}
      </Fragment>
    )
  }
}

export default App
