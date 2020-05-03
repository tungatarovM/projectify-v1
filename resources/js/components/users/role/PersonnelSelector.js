import React, { Fragment } from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default ({ personnel, selectedPersonnel, selectPersonnel, classes }) => {

  const handleChange = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    selectPersonnel(value);
  };

  return (
    <Fragment>
      <h2 className='mb-4'>Управление ролями пользователей</h2>
      <FormControl className={classes.multiSelectFormControl}>
        <h5>Выберите 1 или несколько пользователей</h5>
        <Select
          multiple
          native
          value={selectedPersonnel}
          onChange={handleChange}
          inputProps={{
            id: 'personnel',
            className: classes.multiSelect,
          }}
        >
          {personnel.map(({ id, fullName }) => (
            <option key={id} value={id}>
              {fullName}
            </option>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
}
