import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { useFormik } from 'formik';
import styles from './ContactForm.module.css';
import * as Yup from "yup";

const ContactUsValidationSchema = Yup.object().shape({
    from_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("Message is required")
});

const ContactForm = () => {
    const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAIL_USER_ID;
    const [mailSuccess, setMailSuccess] = useState(false);

    const contactUsForm = useFormik({
        initialValues: {
            from_name: '',
            to_name: 'Team',
            email: '',
            phone: '',
            message: '',
            reply_to: '',
        },
        validationSchema: ContactUsValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    values,
                    USER_ID
                );
                if (response.status === 200) {
                    setMailSuccess(true);
                    setTimeout(() => {
                        setMailSuccess(false);
                    }, 5000);
                }
                contactUsForm.resetForm();
            } catch (error) {
                console.log("test", error);
                contactUsForm.resetForm();
            }
        }
    });
    return (
        <form onSubmit={contactUsForm.handleSubmit}>
            <Typography className={styles.input}>Name</Typography>
            <TextField
                fullWidth
                required
                label=""
                placeholder='Name'
                name='from_name'
                variant="outlined"
                value={contactUsForm.values.from_name}
                onChange={contactUsForm.handleChange}
                error={contactUsForm.touched.from_name && Boolean(contactUsForm.errors.from_name)}
                className={styles.field}
            />
            <Typography className={styles.input}>Email</Typography>
            <TextField
                fullWidth
                type={"email"}
                required
                label=""
                placeholder='Email'
                name='email'
                variant="outlined"
                value={contactUsForm.values.email}
                onChange={contactUsForm.handleChange}
                error={contactUsForm.touched.email && Boolean(contactUsForm.errors.email)}
                className={styles.field}
            />
            <Typography className={styles.input}>Message</Typography>
            <TextField multiline rows={4}
                fullWidth
                required
                label=""
                placeholder='Message'
                name='message'
                variant="outlined"
                value={contactUsForm.values.message}
                onChange={contactUsForm.handleChange}
                error={contactUsForm.touched.message && Boolean(contactUsForm.errors.message)}
                className={styles.field}
            />
            <Button
                variant='outlined'
                type='submit'
                className={styles.btn}>SUBMIT</Button>
        </form>
    )
};

export default ContactForm;