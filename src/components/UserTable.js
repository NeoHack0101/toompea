import React, { Fragment } from 'react'
import MaterialTable from 'material-table'

const UserTable = ({ users, toggleModal, getClickedUser, handleDelete }) => {
  return (
    <Fragment>
      <MaterialTable
        columns={[
          { title: 'Nimi', field: 'first_name' },
          { title: 'Perenimi', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Telefon', field: 'phone' },
          {
            title: 'Sünniaeg',
            field: 'date_of_birth',
            type: 'date'
          }
        ]}
        data={users}
        title="Members"
        actions={[
          {
            icon: 'account_box',
            onClick: (e, row) => {
              getClickedUser(row)
              console.log(row)
              toggleModal()
            }
          },
          {
            icon: 'delete',
            onClick: (e, row) => {
              handleDelete(row)
            }
          }
        ]}
        options={{ columnsButton: 'true' }}
      />
    </Fragment>
  )
}

export default UserTable
