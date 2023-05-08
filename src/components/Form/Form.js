import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMemo } from 'react';
import './Form.scss';
import { Grid, TextField, Box, Button, Stack } from '@mui/material';import AutocompleteField from '../MyComponents/AutocompleteField/AutocompleteField';
import DateTimePickerField from '../MyComponents/DateAndTimePickerField/DateTimePickerField';
import SelectField from '../MyComponents/SelectField/SelectField';
import output from '../../api/output';



const CustomForm = () => {

    const onHandleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        console.log('siaoi');
    }

    const floors = useMemo(() => Array.from({ length: 25 }, (_, i) => i + 3).map(item => ({label: `${item}`, id: `floor-${item}`,  value: item})), []);
    const meetings = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1).map(item => ({label: `${item}`, id: `meeting-${item}`, value: item})), []);
    return (
        <Formik 
            initialValues = {{
                tower: '',
                floor: null,
                meetingRoom: null,
                dateAndTime: null,
                text: '',
            }}
            validationSchema = {Yup.object({
                tower: Yup.string()
                    .required('Обязательное поле!'),
                floor: Yup.object()
                    .required('Обязательное поле!'),
                meetingRoom: Yup.object()
                    .required('Обязательное поле!'),
                dateAndTime: Yup.object()
                    .required('Обязательное поле!'),
                text: Yup.string(),
            })}
            onSubmit={(values) => {
                console.log(output(values));
              }}
            onReset={() => {
                console.log('Form reset');
              }}
            >
            <Form className="form">
                <Grid container spacing={2}>
                        <Grid justifyContent={'center'} alignItems={'center'} textAlign={'center'} fontSize={{md:'20px', sm: '15px', xs: '10px'}} m={'0 auto'}>
                            <h1>Форма бронирования переговорной</h1>
                        </Grid>
                    <Grid item md={6} xs={12} sm = {6}>
                        <SelectField 
                            labelId="tower-label" 
                            id="tower-select" 
                            label="Башня" 
                            items = {[{value: 'A', label: 'A'}, {value: 'B', label: 'B'}]}/>
                        <ErrorMessage name ="tower" component='div' className='error'/>
                    </Grid>
                    <Grid item md={6} xs={12} sm = {6}>
                        <AutocompleteField
                            name="floor"
                            label="Этаж"
                            options={floors}
                        />
                         <ErrorMessage name ="floor" component='div' className='error'/>
                    </Grid>
                    <Grid item md={6} xs={12} sm = {6}>      
                        <AutocompleteField
                            name="meetingRoom"
                            label="Переговорная"
                            options={meetings}
                        />
                        <ErrorMessage name ="meetingRoom" component='div' className='error'/>
                    </Grid>
                    <Grid item md={6} xs={12} sm = {6}>
                        <DateTimePickerField sx={{width: "100%"}} name = 'dateAndTime'/>
                        <ErrorMessage name ="dateAndTime" component='div' className='error'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field name = 'text'>
                            {({field, form, meta}) => {
                                return <TextField label = 'Комментарий' multiline rows={4} fullWidth {...field}/>
                            }}
                        </Field>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Field>
                            {({field, form, meta}) => {
                                return (
                                    <Stack  
                                        direction={{ xs: 'column', md: 'row', sm: 'row' }}
                                        spacing={2}
                                        justifyContent={'space-evenly'}
                                        alignItems={'center'} >
                                        <Button
                                            type="submit" 
                                            sx={{height: {md: '50px', xs: '50px'}, width: { xs: '155px'}}} 
                                            variant="contained">
                                            Отправить
                                        </Button>
                                        <Button 
                                            onClick={() => form.handleReset()}
                                            sx={{height: {md: '50px', xs: '50px'}, width: { xs: '155px'}}}
                                            color="error" 
                                            variant="contained">
                                            Отчистить
                                        </Button>
                                    </Stack>
                                );
                            }}
                        </Field>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}

export default CustomForm;