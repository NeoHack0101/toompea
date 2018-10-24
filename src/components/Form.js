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
  first_name: '',
  last_name: '',
  id_code: '',
  date_of_birth: '1900-01-01',
  sex: '0',
  phone: '',
  address: '',
  email: ''
}

class Form6 extends React.Component {
  state = initialState

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })

    if (
      this.state.id_code.startsWith('4') ||
      this.state.id_code.startsWith('6')
    ) {
      this.setState({
        sex: '1'
      })
    } else if (
      this.state.id_code.startsWith('3') ||
      this.state.id_code.startsWith('5')
    ) {
      this.setState({
        sex: '0'
      })
    }

    if (this.state.id_code.length === 7) {
      this.setState({
        date_of_birth: `${
          this.state.id_code.charAt(0) === '3' ||
          this.state.id_code.charAt(0) === '4'
            ? '19'
            : '20'
        }${this.state.id_code.substring(1, 3)}-${this.state.id_code.substring(
          3,
          5
        )}-${this.state.id_code.substring(5, 7)}`
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const err = false //this.validate()
    console.log(this.state)
    if (!err) {
      fetch('http://localhost:5000/add_user', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      })
        .then(this.props.updateUsers)
        .catch(err => console.log('formsubmit error', err))
      //this.props.onSubmit(this.state)
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
    if (this.state.id_code.length !== 11) {
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
