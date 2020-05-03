import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { columns } from '../../../constants/user';
import { deleteUser, addUser } from '../../../store/actions/users';
import AddUserModal from "./AddUserModal";
import { roles } from '../../../constants/user';

const Personnel = ({ users, projects, deleteUser, addUser }) => {
  const [open, toggleModal] = useState(false);

  const handleAddUser = (event) => {
    toggleModal(true);
  };

  const handleDelete = (user) => {
    deleteUser(user.id);
  };

  return (
    <Fragment>
      <AddUserModal
        addUser={addUser}
        modal={open}
        toggleModal={toggleModal}
        roles={roles}
        projects={projects}
      />
      <MaterialTable
        title="Персонал"
        columns={columns}
        data={users}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => handleAddUser(event),
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
    </Fragment>

  );
};

const mapStateToProps = ({ users, projects }) => {
  console.log('users from personnel', users);
  console.log('projects from personnel', projects);
  return {
    users: users.data,
    projects: projects.data,
  }
};

const mapDispatchToActions = {
  deleteUser,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToActions)(Personnel);
