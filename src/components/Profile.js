import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Button, TextField, MenuItem, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'flex',
    flexGrow: 1
  }
})

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  updateUser = e => {
    e.preventDefault()
    let tmp = { id: this.state.id }
    console.log(this.state)
    fetch('/api/update_user', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(this.props.updateUsers)
      .then(this.props.toggleModal)
      .catch(err => console.log('user update error', err))
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.paper}>
        <form id="mainform" autoComplete="off">
          <Grid container>
            <Grid item sm>
              <TextField
                id="first_name"
                label="Eesnimi"
                className={classes.textField}
                value={this.state.first_name}
                onChange={this.handleChange('first_name')}
                margin="normal"
                variant="standard"
                autoFocus={true}
                required
              />
            </Grid>
            <Grid item sm>
              <TextField
                id="last_name"
                label="Perekonna nimi"
                className={classes.textField}
                value={this.state.last_name}
                onChange={this.handleChange('last_name')}
                margin="normal"
                variant="standard"
                required
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item sm={6}>
              <TextField
                id="id_code"
                label="Isikukood"
                className={classes.textField}
                value={this.state.id_code}
                type="number"
                onChange={this.handleChange('id_code')}
                margin="normal"
                variant="standard"
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="date_of_birth"
                label="Sünniaeg"
                className={classes.textField}
                value={this.state.date_of_birth}
                type="date"
                onChange={this.handleChange('date_of_birth')}
                margin="normal"
                variant="standard"
              />
            </Grid>
            <Grid item sm={2}>
              <TextField
                id="sex"
                label="Sugu"
                select
                className={classes.textField}
                value={this.state.sex}
                onChange={this.handleChange('sex')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
                variant="standard"
              >
                <MenuItem key="M" value="0">
                  M
                </MenuItem>
                <MenuItem key="N" value="1">
                  N
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <TextField
            id="phone"
            label="Telefon"
            className={classes.textField}
            value={this.state.phone}
            type="number"
            onChange={this.handleChange('phone')}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="address"
            label="Address"
            className={classes.textField}
            value={this.state.address}
            onChange={this.handleChange('address')}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="standard"
            required
          />
          <div className={classes.button}>
            <Button
              onClick={this.updateUser}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile)
