import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button, Modal } from '@material-ui/core'

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
    const { classes, toggleModal, open } = this.props

    return (
      <div>
        {/* <Button onClick={toggleModal}>Open Modal</Button> */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={toggleModal}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            className={classes.paper}
          >
            <Typography variant="h6" id="modal-title">
              User profile
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(UserModal)
