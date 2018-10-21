import React, { Fragment } from 'react'
import MaterialTable from 'material-table'

const UserTable = ({ users, toggleModal }) => {
  return (
    <Fragment>
      <MaterialTable
        columns={[
          { title: 'Nimi', field: 'firstName' },
          { title: 'Perenimi', field: 'lastName' },
          { title: 'Isikukood', field: 'id', type: 'numeric' },
          {
            title: 'Sünniaeg',
            field: 'dateOfBirth',
            type: 'date'
          }
        ]}
        data={users}
        title="Members"
        actions={[
          {
            icon: 'account_box',
            onClick: (e, row) => {
              toggleModal()
            }
          }
        ]}
      />
    </Fragment>
  )
}

export default UserTable
