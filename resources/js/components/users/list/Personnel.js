import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { columns } from '../../../constants/user';
import { deleteUser, addUser } from '../../../store/actions/users';

const Personnel = ({ users, projects, deleteUser, addUser }) => {
  console.log('users from Personnel', users);
  const handleAddUser = (newUser) => {
    console.log('new user', newUser);
    addUser(newUser);
  };

  const handleDelete = (user) => {
    deleteUser(user.id);
  };

  return (
    <MaterialTable
      title="Персонал"
      columns={columns}
      data={users}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event, newUser) => alert('Click'),
        },
      ]}
      editable={{
        onRowDelete: (user) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              handleDelete(user);
            }, 600);
          }),
      }}
    />
  );
};

const mapStateToProps = ({ users }) => {
  console.log('users from ', users);
  return {
    users: users.data,
  }
};

const mapDispatchToActions = {
  deleteUser,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToActions)(Personnel);
