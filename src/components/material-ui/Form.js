import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
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
      width: 600,
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
    sugu: '',
    telefon: '',
    aadress: '',
    email: ''
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    const { classes } = this.props

    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="eesNimi"
              label="Eesnimi"
              className={classes.textField}
              value={this.state.eesNimi}
              onChange={this.handleChange('eesNimi')}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              id="pereNimi"
              label="Perekonna nimi"
              className={classes.textField}
              value={this.state.pereNimi}
              onChange={this.handleChange('pereNimi')}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              id="isikukood"
              label="Isikukood"
              className={classes.textField}
              value={this.state.isikukood}
              onChange={this.handleChange('isikukood')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="sünniaeg"
              label="Sünniaeg"
              className={classes.textField}
              value={this.state.sünniaeg}
              onChange={this.handleChange('sünniaeg')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="sugu"
              label="Sugu"
              className={classes.textField}
              value={this.state.sugu}
              onChange={this.handleChange('sugu')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="telefon"
              label="Telefon"
              className={classes.textField}
              value={this.state.telefon}
              onChange={this.handleChange('telefon')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="aadress"
              label="Aadress"
              className={classes.textField}
              value={this.state.aadress}
              onChange={this.handleChange('aadress')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              variant="outlined"
            />
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
