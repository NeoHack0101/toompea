import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import UserTable from './components/UserTable'
import UserTable2 from './components/UserTable2'
import UserModal from './components/UserModal'
import './App.css'

const users = [
  {
    aadress: 'Nugise 14',
    eesNimi: 'Sergei',
    email: 'ala@rull.ee',
    isikukood: '3939393939',
    sünniaeg: {
      aasta: '1919',
      kuu: '05',
      päev: '12'
    },
    pereNimi: 'Nugis',
    sugu: 'M',
    telefon: '565656565'
  },
  {
    aadress: 'Kallala 43',
    eesNimi: 'Dimitri',
    email: 'fasdf@fj.com',
    isikukood: '32342342',
    pereNimi: 'Kala',
    sugu: 'M',
    sünniaeg: {
      aasta: '2012',
      kuu: '02',
      päev: '02'
    },
    telefon: '5656565656'
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'home',
      isSignedin: true,
      open: false
    }
  }

  componentDidMount() {
    // fetch('http://cdb.randotm.tk/get_users') //http://localhost:5000
    //   .then(res => res.json())
    //   .then(console.log)
    //   .catch()
  }

  onRouteChange = route => {
    this.setState({ route: route })
    if (route === 'home' || route === 'addUser') {
      this.setState({ isSignedin: true })
    } else {
      this.setState({ isSignedin: false })
    }
  }

  onSubmit = user => {
    users.push(user)
    console.log(users)
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Fragment>
        {!this.state.isSignedin ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <AppBar onRouteChange={this.onRouteChange} />
            {this.state.route === 'home' ? (
              <Fragment>
                <UserModal
                  toggleModal={this.toggleModal}
                  open={this.state.open}
                />
                <UserTable2 users={users} toggleModal={this.toggleModal} />
              </Fragment>
            ) : (
              <Form onSubmit={user => this.onSubmit(user)} />
            )}
          </div>
        )}
      </Fragment>
    )
  }
}

export default App
