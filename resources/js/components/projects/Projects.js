import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import AddProjectModal from './AddProjectModal';
import { columns } from '../../constants/project';

export default ({ projects, addProject, deleteProject }) => {
  const [open, toggleModal] = useState(false);
  const history = useHistory();

  const handleView = (event, row) => {
    history.push(`/manager/projects/${row.id}`);
  };

  const handleAdd = () => {
    toggleModal(true);
  };

  const handleDelete = (project) => {
    deleteProject(project.id);
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
        title="Проекты"
        columns={columns}
        data={projects}
        editable={{
          onRowDelete: (project) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                handleDelete(project);
              }, 600);
            }),
        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Project',
            isFreeAction: true,
            onClick: (event) => handleAdd(),
          },
          {
            icon: 'visibility',
            tooltip: 'Project Detail',
            onClick: (event, row) => handleView(event, row),
          }
        ]}
      />
    </Fragment>
  );
};
