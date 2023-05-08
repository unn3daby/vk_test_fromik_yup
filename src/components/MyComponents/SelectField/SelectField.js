import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Field } from 'formik';
import React from 'react';

const SelectField = ({id, labelId, label, items, ...props}) => {
    return (
        <Field name='tower'>
            {({field, form, meta}) => {
                return (
                    <FormControl {...props} fullWidth>
                        <InputLabel id="tower-label">Башня</InputLabel>
                        <Select
                            {...field}
                            labelId={labelId}
                            id={id}
                            label={label}
                            autoComplete='off'
                        >
                            {items.map(({value, label}, i) => <MenuItem key = {i} value={value}>{label}</MenuItem>)}
                        </Select>
                    </FormControl>
                );
            }}
        </Field>
    );
};

export default SelectField;