import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

function UserTable(props) {
  const { classes, users } = props

  let id = 0
  function createData(name, calories, fat, carbs, protein) {
    id += 1
    return { id, name, calories, fat, carbs, protein }
  }

  console.log(users)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell>Eesnimi</TableCell>
            <TableCell>Perenimi</TableCell>
            <TableCell>Isikukood</TableCell>
            <TableCell>Sünniaeg</TableCell>
            <TableCell>Sugu</TableCell>
            <TableCell>telefon</TableCell>
            <TableCell>Aadress</TableCell>
            <TableCell>e-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, i) => {
            return (
              <TableRow key={i}>
                <TableCell component="th" scope="user">
                  {i}
                </TableCell>
                <TableCell>{user.eesNimi}</TableCell>
                <TableCell>{user.pereNimi}</TableCell>
                <TableCell>{user.isikukood}</TableCell>
                <TableCell>{user.sünniaeg}</TableCell>
                <TableCell>{user.sugu}</TableCell>
                <TableCell>{user.telefon}</TableCell>
                <TableCell>{user.aadress}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

UserTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserTable)
