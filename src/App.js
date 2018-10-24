import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import AppBar from './components/AppBar'
import SignIn from './components/SignIn'
import UserTable from './components/UserTable'
import ModalWrapper from './components/ModalWrapper'
import Profile from './components/Profile'

// let users =
// [
//   {
//     first_name: 'Pedrik',
//     last_name: 'Kask',
//     id_code: '30101010101',
//     date_of_birth: '1920-01-01',
//     sex: '0',
//     phone: '56534255',
//     address: 'Kajaka 2',
//     email: 'pedrik@hot.ee'
//   },
//   {
//     first_name: 'Suslik',
//     last_name: 'Tamm',
//     id_code: '40101010101',
//     date_of_birth: '1930-01-01',
//     sex: '1',
//     phone: '56224255',
//     address: 'Majaka 2',
//     email: 'suslik@hot.ee'
//   }
// ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: 'home',
      isSignedin: true,
      open: false,
      users: [],
      clickedUser: {}
    }
    this.updateUsers = this.updateUsers.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.updateUsers()
  }

  updateUsers() {
    fetch('http://localhost:5000/get_users')
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .catch(err => console.log(err))
  }

  onRouteChange = route => {
    this.setState({ route: route })
    if (route === 'home' || route === 'addUser') {
      this.setState({ isSignedin: true })
    } else {
      this.setState({ isSignedin: false })
    }
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }

  getClickedUser = user => {
    this.setState({
      clickedUser: user
    })
  }

  handleDelete = user => {
    let tmp = { id: user.id }
    console.log(tmp)
    fetch('http://localhost:5000/delete_user', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    })
      .then(this.updateUsers)
      .catch(err => console.log('handleDelete error: ', err))
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
              <ModalWrapper
                toggleModal={this.toggleModal}
                open={this.state.open}
              >
                <Profile
                  user={this.state.clickedUser}
                  updateUsers={this.updateUsers}
                  toggleModal={this.toggleModal}
                />
              </ModalWrapper>
              <UserTable
                users={this.state.users}
                toggleModal={this.toggleModal}
                getClickedUser={this.getClickedUser}
                handleDelete={this.handleDelete}
              />
            </Fragment>
          ) : (
            <Form updateUsers={this.updateUsers} />
          )}
        </div>
      </Fragment>
    )
  }
}

export default App
