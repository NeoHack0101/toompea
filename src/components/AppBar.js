import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    marginRight: 10
  }
}

function SimpleAppBar(props) {
  const { classes } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          variant="contained"
          color=""
          className={classes.button}
          style={styles.button}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={styles.button}
        >
          Add member
        </Button>
      </Toolbar>
    </AppBar>
  )
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleAppBar)
