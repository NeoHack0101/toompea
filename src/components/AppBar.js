import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const styles = {
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

export default withStyles(styles)(SimpleAppBar)
