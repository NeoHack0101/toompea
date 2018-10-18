import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

class Form6 extends React.Component {
  state = {
    eesNimi: '',
    pereNimi: '',
    isikukood: '',
    sünniaeg: '',
    sugu: 'M',
    telefon: '',
    aadress: '',
    email: '',
    isikukoodErr: '',
    emailErr: '',
    noInputErr: ''
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const err = this.validate()
    if (!err) {
      this.props.onSubmit(this.state)
      this.setState({
        eesNimi: '',
        pereNimi: '',
        isikukood: '',
        sünniaeg: '',
        sugu: 'M',
        telefon: '',
        aadress: '',
        email: '',
        isikukoodErr: '',
        emailErr: '',
        noInputErr: ''
      })
    }
    console.log('onsubmit error-', err)
    return err
  }

  validate = () => {
    let isError = false
    const errors = {}
    if (!this.state.email.includes('@')) {
      isError = true
      errors.emailErr = 'email ei ole korrektne'
    }
    if (this.state.isikukood.length !== 11) {
      isError = true
      errors.isikukoodErr = 'isikukood ei ole korrektne'
    }
    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      })
    }
    console.log('validate isError-', isError)

    return isError
  }

  render() {
    const { classes } = this.props

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <form id="mainform" className={classes.container} autoComplete="off">
            <TextField
              id="eesNimi"
              label="Eesnimi"
              className={classes.textField}
              value={this.state.eesNimi}
              onChange={this.handleChange('eesNimi')}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="pereNimi"
              label="Perekonna nimi"
              className={classes.textField}
              value={this.state.pereNimi}
              onChange={this.handleChange('pereNimi')}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="isikukood"
              label="Isikukood"
              className={classes.textField}
              value={this.state.isikukood}
              type="number"
              onChange={this.handleChange('isikukood')}
              margin="normal"
              variant="standard"
              helperText={this.state.isikukoodErr}
            />
            <TextField
              id="sünniaeg"
              label="Sünniaeg"
              className={classes.textField}
              defaultValue="1999-01-01"
              type="date"
              onChange={this.handleChange('sünniaeg')}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="sugu"
              label="Sugu"
              select
              className={classes.textField}
              value={this.state.sugu}
              onChange={this.handleChange('sugu')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="standard"
            >
              <MenuItem key="mees" value="M">
                Mees
              </MenuItem>
              <MenuItem key="naine" value="N">
                Naine
              </MenuItem>
            </TextField>
            <TextField
              id="telefon"
              label="Telefon"
              className={classes.textField}
              value={this.state.telefon}
              type="number"
              onChange={this.handleChange('telefon')}
              margin="normal"
              variant="standard"
            />
            <TextField
              id="aadress"
              label="Aadress"
              className={classes.textField}
              value={this.state.aadress}
              onChange={this.handleChange('aadress')}
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
              helperText={this.state.emailErr}
            />

            <Button onClick={this.onSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

Form6.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Form6)
