import React from 'react';
import { useField } from 'formik';
import { Autocomplete, TextField } from '@mui/material';

const AutocompleteField = ({ name, label, options, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event, values) => {
    helpers.setValue(values);
  };

  return (
    <Autocomplete
      {...field}
      {...props}
      options={options}
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AutocompleteField;