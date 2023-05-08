import React from 'react';
import { useField, Field } from 'formik';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const DateTimePickerField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const handleChange = (event) => {
      helpers.setValue(event);
  };

  return (
        <Field name='dateAndTime'>
          {() => {
            return(
              <DateTimePicker
                minDate={dayjs()}
                label="Дата и время" 
                width = {'100%'}
                {...field}
                {...props}
                value = {field.value}
                onChange={(e) => {
                    if(e.diff(dayjs()) > 0)
                      handleChange(e);
                    else {
                      helpers.setValue(null);
                    }
                }}
                error={false}
              />
            );
          }}
        </Field>
    
  );
};

export default DateTimePickerField;