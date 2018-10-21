import React, { Fragment } from 'react'
import MaterialTable from 'material-table'
import UserModal from './UserModal'
import { TableRow } from '@material-ui/core'

const UserTable2 = ({ users, toggleModal }) => {
  console.log(users)
  console.log(users.sünniaeg)

  return (
    <Fragment>
      <MaterialTable
        columns={[
          { title: 'Nimi', field: 'eesNimi' },
          { title: 'Perenimi', field: 'pereNimi' },
          { title: 'Isikukood', field: 'isikukood', type: 'numeric' },
          {
            title: 'sünniaeg',
            field: 'sünniaeg.aasta'
          }
        ]}
        data={users}
        title="Members"
        actions={[
          {
            icon: 'account_box',
            onClick: (e, row) => toggleModal()
          }
        ]}
      />
    </Fragment>
  )
}

export default UserTable2

// {
//   user.sünniaeg.aasta + '-' + user.sünniaeg.kuu + '-' + user.sünniaeg.päev
// }
