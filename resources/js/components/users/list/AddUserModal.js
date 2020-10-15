import React, { useState } from 'react';
import { isEmpty } from 'lodash/lang';
import {
  makeStyles, Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions, TextField,
  Button, FormControl, InputLabel, NativeSelect
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '0',
    marginRight: '2rem',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: '1rem',
  }
}));

export default (props) => {
  const { addUser, toggleModal, modal } = props;
  const { roles, projects } = props;

  const classes = useStyles();

  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    project: '',
  });

  const [message, setMessage] = useState('');

  const alertMessage = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleChange = (event) => {
    event.persist();
    setState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleClose = () => {
    toggleModal(false);
  };

  const handleSubmit = () => {
    const { firstname, lastname, email, role, project } = state;

    if (!firstname || !lastname || !email || !role || !project) return alertMessage('Вы должны заполнить все поля');

    const newUser = {
      firstname, lastname, email, role, project,
    };

    addUser(newUser);
    return handleClose();
  };

  return (
    <Dialog open={modal} onClose={handleClose} aria-labelledby="add-user-modal-title">
      { !isEmpty(message) && <Alert severity='error'>{message}</Alert>}
      <DialogTitle id="form-dialog-title">Добавить нового пользователя</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="firstname"
          name="firstname"
          label="Имя"
          type="text"
          value={state.firstname}
          onChange={(e) => handleChange(e)}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="lastname"
          name="lastname"
          label="Фамилия"
          type="text"
          value={state.lastname}
          onChange={(e) => handleChange(e)}
          fullWidth
        />
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={state.email}
          onChange={handleChange}
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true} htmlFor="role">Роль</InputLabel>
          <NativeSelect
            value={state.role}
            onChange={handleChange}
            inputProps={{
              name: 'role',
              id: 'role',
            }}
          >
            <option value="" disabled>Выберите роль</option>
            {
              roles.map(role => (<option value={role.name}>{role.label}</option>))
            }
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true} htmlFor="project">Проект</InputLabel>
          <NativeSelect
            value={state.project}
            onChange={handleChange}
            inputProps={{
              name: 'project',
              id: 'project',
            }}
          >
            <option value="" disabled>Выберите проект</option>
            {
              projects.map(project => (<option value={project.id}>{project.name}</option>))
            }
          </NativeSelect>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Закрыть
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
