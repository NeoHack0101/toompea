import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    marginRight: 10
  }
}

class SimpleAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, onRouteChange } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
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
            <Typography variant="h6" color="inherit" className={classes.grow} />

            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={this.handleClose}
                    onClick={() => onRouteChange('signIn')}
                  >
                    Log out
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(SimpleAppBar)

/* function SimpleAppBar(props) {
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
 */
