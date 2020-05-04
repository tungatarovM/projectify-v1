import React, { Fragment, useState } from 'react';
import MaterialTable from 'material-table';
import AddProjectModal from './AddProjectModal';
import { columns } from '../../constants/project';

export default ({ projects, addProject, deleteProject }) => {
  const [open, toggleModal] = useState(false);

  const handleAdd = (event) => {
    toggleModal(true);
  };

  const handleDelete = (project) => {
    console.log('delete project ', project);
  };

  return (
    <Fragment>
      <AddProjectModal
        addProject={addProject}
        modal={open}
        toggleModal={toggleModal}
      />
      <h2 className='mb-4'>Управление проектами</h2>
      <MaterialTable
        title="Персонал"
        columns={columns}
        data={projects}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Project',
            isFreeAction: true,
            onClick: (event) => handleAdd(event),
          },
        ]}
        editable={{
          onRowDelete: (project) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                handleDelete(project);
              }, 600);
            }),
        }}
      />
    </Fragment>
  );
};
