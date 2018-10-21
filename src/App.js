import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import UserTable from './components/UserTable'
import UserModal from './components/UserModal'
import './App.css'

const users = [
  {
    address: 'Kastani 22',
    dateOfBirth: '1920-04-05',
    email: 'kall@i.ee',
    emailErrMessage: '',
    firstName: 'Vello',
    id: '31012110101',
    idErrMessage: '',
    lastName: 'Nahk',
    phone: '56564755',
    sex: 'M'
  },
  {
    address: 'Juurikas 22',
    dateOfBirth: '1845-04-05',
    email: 'kallis@i.ee',
    emailErrMessage: '',
    firstName: 'Peeter',
    id: '31012100101',
    idErrMessage: '',
    lastName: 'Eeter',
    phone: '565634355',
    sex: 'M'
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
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  getUser = selected => {
    return users[selected]
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
                  getUser={user => this.getUser(user)}
                />
                <UserTable
                  users={users}
                  toggleModal={this.toggleModal}
                  getUser={this.getUser}
                />
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
