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
      route: 'signIn',
      isSignedin: false,
      open: false
    }
  }

  async componentDidMount() {
    const url = 'https://randomuser.me/api/?results=20'
    const response = await fetch(url)
    const data = await response.json()
    data.results.map(user => {
      users.push({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        phone: user.phone
      })
    })
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
    if (!this.state.isSignedin) {
      return <SignIn onRouteChange={this.onRouteChange} />
    }

    return (
      <Fragment>
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
