import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import UserTable from './components/UserTable'
import UserModal from './components/UserModal'
import './App.css'

const users = [
  {
    first_name: 'Pedrik',
    last_name: 'Kask',
    id_code: '30101010101',
    date_of_birth: '1920-01-01',
    sex: '0',
    phone: '56534255',
    address: 'Kajaka 2',
    email: 'pedrik@hot.ee'
  },
  {
    first_name: 'Suslik',
    last_name: 'Tamm',
    id_code: '40101010101',
    date_of_birth: '1930-01-01',
    sex: '1',
    phone: '56224255',
    address: 'Majaka 2',
    email: 'suslik@hot.ee'
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
  // async componentDidUpdate() {
  //   const url = 'http://localhost:5000/get_users'
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   console.log('componentDidUpdate', data)
  //   data.map(user => {
  //     users.push(user)
  //   })
  // }

  async componentDidMount() {
    const url = 'http://localhost:5000/get_users'
    const response = await fetch(url)
    const data = await response.json()
    console.log('componentDidMount', data)
    data.map(user => {
      users.push(user)
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

  // onSubmit = user => {
  //   users.push(user)
  // }

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
            <Form />
          )}
        </div>
        )}
      </Fragment>
    )
  }
}

export default App
