import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Button, TextField, MenuItem, Grid } from '@material-ui/core'

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    width: 500,
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
  },
  button: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const initialState = {
  firstName: '',
  lastName: '',
  id: '',
  dateOfBirth: '1900-01-01',
  sex: '',
  phone: '',
  address: '',
  email: '',
  idErrMessage: '',
  emailErrMessage: ''
}

class Form6 extends React.Component {
  state = initialState

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })

    if (this.state.id.startsWith('4') || this.state.id.startsWith('6')) {
      this.setState({
        sex: 'N'
      })
    } else if (this.state.id.startsWith('3') || this.state.id.startsWith('5')) {
      this.setState({
        sex: 'M'
      })
    }

    if (this.state.id.length === 7) {
      this.setState({
        dateOfBirth: `${
          this.state.id.charAt(0) === '3' || this.state.id.charAt(0) === '4'
            ? '19'
            : '20'
        }${this.state.id.substring(1, 3)}-${this.state.id.substring(
          3,
          5
        )}-${this.state.id.substring(5, 7)}`
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const err = false //this.validate()
    if (!err) {
      this.props.onSubmit(this.state)
      this.setState(initialState)
    }
    return err
  }

  validate = () => {
    let isError = false
    const errors = {
      idErrMessage: '',
      emailErrMessage: ''
    }
    if (!this.state.email.includes('@')) {
      isError = true
      errors.emailErrMessage = 'kehtetu email'
    }
    if (this.state.id.length !== 11) {
      isError = true
      errors.idErrMessage = 'viga isikukoodis'
    }
    this.setState({
      ...this.state,
      ...errors
    })
    return isError
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.paper}>
        <form id="mainform" autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid container>
            <Grid item sm>
              <TextField
                id="firstName"
                label="Eesnimi"
                className={classes.textField}
                value={this.state.firstName}
                onChange={this.handleChange('firstName')}
                margin="normal"
                variant="standard"
              />
            </Grid>
            <Grid item sm>
              <TextField
                id="lastName"
                label="Perekonna nimi"
                className={classes.textField}
                value={this.state.lastName}
                onChange={this.handleChange('lastName')}
                margin="normal"
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item sm={6}>
              <TextField
                id="id"
                label="Isikukood"
                className={classes.textField}
                value={this.state.id}
                type="number"
                onChange={this.handleChange('id')}
                margin="normal"
                variant="standard"
                helperText={this.state.idErrMessage}
                error={this.state.idErrMessage.length > 0}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="dateOfBirth"
                label="Sünniaeg"
                className={classes.textField}
                value={this.state.dateOfBirth}
                type="date"
                onChange={this.handleChange('dateOfBirth')}
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
                <MenuItem key="M" value="M">
                  M
                </MenuItem>
                <MenuItem key="N" value="N">
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
            label="address"
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
            helperText={this.state.emailErrMessage}
            error={this.state.emailErrMessage.length > 0}
          />
          <div className={classes.button}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Form6)
