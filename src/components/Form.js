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
      <Paper className={classes.paper}>
        <form id="mainform" autoComplete="off">
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
                helperText={this.state.isikukoodErr}
              />
            </Grid>
            <Grid item sm={4}>
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
            </Grid>
            <Grid item sm={2}>
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
            helperText={this.state.emailErr}
          />
          <br />
          <div className={classes.button}>
            <Button onClick={this.onSubmit} variant="contained" color="primary">
              Lisa
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Form6)
