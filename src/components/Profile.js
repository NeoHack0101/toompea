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

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.getUser(1)
  }

  /*  handleChange = input => event => {
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
  } */

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.paper}>
        <form id="mainform" autoComplete="off">
          <Grid container>
            <Grid item sm>
              <TextField
                id="firstName"
                label="Eesnimi"
                className={classes.textField}
                value={this.state.firstName}
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
                margin="normal"
                variant="standard"
                helperText={this.state.idErrMessage}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="dateOfBirth"
                label="Sünniaeg"
                className={classes.textField}
                value={this.state.dateOfBirth}
                type="date"
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
            margin="normal"
            variant="standard"
          />
          <TextField
            id="address"
            label="address"
            className={classes.textField}
            value={this.state.address}
            margin="normal"
            variant="standard"
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            margin="normal"
            variant="standard"
            helperText={this.state.emailErrMessage}
          />
          <div className={classes.button}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Profile)
