import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

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
                <TableCell>
                  {user.sünniaeg.aasta +
                    '-' +
                    user.sünniaeg.kuu +
                    '-' +
                    user.sünniaeg.päev}
                </TableCell>
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

export default withStyles(styles)(UserTable)
