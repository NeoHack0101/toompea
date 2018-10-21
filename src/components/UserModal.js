import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import Profile from './Profile'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
})

class UserModal extends React.Component {
  render() {
    const { toggleModal, open, users, getUser } = this.props
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={toggleModal}
        >
          <Profile users={users} getUser={getUser} />
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(UserModal)
