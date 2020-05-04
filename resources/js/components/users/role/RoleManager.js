import React, {Fragment} from 'react';
import Select from '@material-ui/core/Select';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { isEmpty, isNull } from 'lodash/lang';
import useStyles from './style';
import PersonnelSelector from "./PersonnelSelector";
import RoleSelector from "./RoleSelector";
import { roles } from '../../../constants/user';


export default function RoleManager({ personnel, changeRole }) {
  const classes = useStyles();
  const [selectedPersonnel, selectPersonnel] = React.useState([]);
  const [selectedRole, setRole] = React.useState('');

  const handleSubmit = () => {
    if (isEmpty(selectedPersonnel)) return alert('Вы должны выбрать хотя бы одного пользователя!');
    if (isNull(selectedRole)) return alert('Вы должны выбрать роль');

    console.log('handleSubmit', selectedPersonnel, selectedRole);

    changeRole(selectedPersonnel, selectedRole);
  };

  return (
    <div>
      <React.Fragment>
        <h2 className='mb-4'>Управление ролью пользователя</h2>
        <PersonnelSelector selectPersonnel={selectPersonnel} personnel={personnel} classes={classes}/>
        <Divider light className='mb-4 mt-4' />
        <RoleSelector setRole={setRole} selectedRole={selectedRole} roles={roles} classes={classes} />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Сохранить
        </Button>
      </React.Fragment>

    </div>
  );
}
