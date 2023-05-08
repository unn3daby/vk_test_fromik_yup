import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

const DateTimePickerField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const handleChange = (event) => {
    helpers.setValue(event);
  };

  return (
        <>
          <DateTimePicker
            label="Дата и время" 
            width = {'100%'}
            {...field}
            {...props}
            onChange={handleChange}
            error={false}
          />
        </>
    
  );
};

export default DateTimePickerField;