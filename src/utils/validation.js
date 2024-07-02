import * as yup from 'yup';

export const hireMeSchema = yup.object().shape({
    name: yup.string().required('Name is required').max(20, 'Name must be less than 20 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
  
    mobile: yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must be digits only')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(15, 'Mobile number must be at most 15 digits')
        .nullable(),
  
    budget: yup.string().matches(/^[0-9]+$/, 'Budget only contain digits').
        max(10, 'Budget must be less than or equal to 10 characters'),
    time: yup.string().matches(/^[0-9]+$/, 'Time must be a number').
        max(2, 'Ideal Time must be less than or equal to 2 characters'),
    message: yup.string().required('Need is required').max(2000, 'Message must be less than 2000 characters'),
    attachment: yup.mixed()
        .test('fileSize', 'File size is too large Need below 50 MB', (value) => {
            if (!value) return true;
            return value?.size <= 52428800; // 50 MB in bytes (50 * 1024 * 1024)
        })
        .nullable()

});

export const subscribeSchema = yup.object().shape({
    name: yup.string().required('Name is required').max(20, 'Name must be less than 20 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string()
    .matches(/^[0-9]+$/, 'Mobile number must be digits only')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(15, 'Mobile number must be at most 15 digits')
    .nullable(),
    note: yup.string().required('Note is required').max(2000, 'Message must be less than 2000 characters'),

})