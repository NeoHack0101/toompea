import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    marginRight: 10
  }
}

function SimpleAppBar(props) {
  const { classes, onRouteChange } = props

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          onClick={() => onRouteChange('home')}
          variant="contained"
          color=""
          className={classes.button}
          style={styles.button}
        >
          Home
        </Button>

        <Button
          onClick={() => onRouteChange('addUser')}
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
