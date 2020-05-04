import React, { useState } from 'react';
import { isEmpty } from 'lodash/lang';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default (props) => {
  const { addProject, toggleModal, modal } = props;

  const [state, setState] = useState({
    name: '',
    description: '',
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
    const { name, description } = state;

    if (!name || !description) return alertMessage('Вы должны заполнить все поля');

    const newProject = {
      name, description,
    };

    addProject(newProject);

    handleClose();
    return setState((prevState) => ({ ...prevState, name: '', description: '', }));
  };

  return (
    <Dialog open={modal} onClose={handleClose} aria-labelledby="add-user-modal-title">
      { !isEmpty(message) && <Alert severity='error'>{message}</Alert>}
      <DialogTitle id="name">Создать новый проект</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Имя проекта"
          type="text"
          value={state.name}
          onChange={(e) => handleChange(e)}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          name="description"
          label="Описание проекта"
          type="text"
          value={state.description}
          onChange={(e) => handleChange(e)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Закрыть
        </Button>
        <Button onClick={() => handleSubmit()} color="primary">
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
};
