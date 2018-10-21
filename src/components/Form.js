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

const initialState = {}

class Form6 extends React.Component {
  state = {
    eesNimi: '',
    pereNimi: '',
    isikukood: '',
    sünniaeg: {
      aasta: '1999',
      kuu: '01',
      päev: '01'
    },
    sugu: '',
    telefon: '',
    aadress: '',
    email: '',
    isikukoodErrMessage: '',
    emailErrMessage: ''
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })

    if (
      this.state.isikukood.startsWith('4') ||
      this.state.isikukood.startsWith('6')
    ) {
      this.setState({
        sugu: 'N'
      })
    } else if (
      this.state.isikukood.startsWith('3') ||
      this.state.isikukood.startsWith('5')
    ) {
      this.setState({
        sugu: 'M'
      })
    }

    if (this.state.isikukood.length === 3) {
      this.setState({
        sünniaeg: {
          ...this.state.sünniaeg,
          aasta: `${
            this.state.isikukood.charAt(0) === '3' ||
            this.state.isikukood.charAt(0) === '4'
              ? '19'
              : '20'
          }${this.state.isikukood.substring(1, 3)}`
        }
      })
    }
    if (this.state.isikukood.length === 5) {
      this.setState({
        sünniaeg: {
          ...this.state.sünniaeg,
          kuu: `${this.state.isikukood.substring(3, 5)}`
        }
      })
    }
    if (this.state.isikukood.length === 7) {
      this.setState({
        sünniaeg: {
          ...this.state.sünniaeg,
          päev: `${this.state.isikukood.substring(5, 7)}`
        }
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const err = false //this.validate()
    if (!err) {
      this.props.onSubmit(this.state)
      this.setState({
        eesNimi: '',
        pereNimi: '',
        isikukood: '',
        sünniaeg: {
          aasta: '1900',
          kuu: '01',
          päev: '01'
        },
        sugu: '',
        telefon: '',
        aadress: '',
        email: '',
        isikukoodErrMessage: '',
        emailErrMessage: ''
      })
    }
    return err
  }

  validate = () => {
    let isError = false
    const errors = {
      isikukoodErrMessage: '',
      emailErrMessage: ''
    }
    if (!this.state.email.includes('@')) {
      isError = true
      errors.emailErrMessage = 'kehtetu email'
    }
    if (this.state.isikukood.length !== 11) {
      isError = true
      errors.isikukoodErrMessage = 'viga isikukoodis'
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
                id="eesNimi"
                label="Eesnimi"
                className={classes.textField}
                value={this.state.eesNimi}
                onChange={this.handleChange('eesNimi')}
                margin="normal"
                variant="standard"
              />
            </Grid>
            <Grid item sm>
              <TextField
                id="pereNimi"
                label="Perekonna nimi"
                className={classes.textField}
                value={this.state.pereNimi}
                onChange={this.handleChange('pereNimi')}
                margin="normal"
                variant="standard"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item sm={6}>
              <TextField
                id="isikukood"
                label="Isikukood"
                className={classes.textField}
                value={this.state.isikukood}
                type="number"
                onChange={this.handleChange('isikukood')}
                margin="normal"
                variant="standard"
                helperText={this.state.isikukoodErrMessage}
                error={this.state.isikukoodErrMessage.length > 0}
                required
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="sünniaeg"
                label="Sünniaeg"
                className={classes.textField}
                value={`${this.state.sünniaeg.aasta}-${
                  this.state.sünniaeg.kuu
                }-${this.state.sünniaeg.päev}`}
                type="date"
                onChange={this.handleChange('sünniaeg')}
                margin="normal"
                variant="standard"
                disabled
              />
            </Grid>
            <Grid item sm={2}>
              <TextField
                id="sugu"
                label="Sugu"
                select
                disabled
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
