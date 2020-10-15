import React, { Fragment } from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default ({ setRole, selectedRole, roles, classes }) => {

  const handleChange = (event) => {
    console.log('handle change value', event.target.value);
    setRole(event.target.value);
  };

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <h5>Выберите роль</h5>
        <Select
          labelId="rolesLabel"
          id="roles"
          value={selectedRole}
          onChange={handleChange}
        >
          {roles.map(role => (<MenuItem key={role.id} value={role.name}>{role.label}</MenuItem>))}
        </Select>
      </FormControl>

    </Fragment>
  );
};
