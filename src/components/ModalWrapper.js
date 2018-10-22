import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
})

class ModalWrapper extends React.Component {
  render() {
    const { toggleModal, open } = this.props
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={toggleModal}
        >
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(ModalWrapper)
