// import React, { Component, Fragment } from 'react';
import React, { useState, Component, Fragment } from 'react';
import Social from '../components/Social';

// import ContactForm from '../components/ContactForm';

import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Styles from '../contents/Contact.css';

const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});

export default () => {
    /* Server State Handling */
    const [serverState, setServerState] = useState();
    const handleServerResponse = (ok, msg) => {
        setServerState({ ok, msg });
    };
    const handleOnSubmit = (values, actions) => {
        axios({
            method: 'POST',
            url: 'https://formspree.io/xnqgdzzn',
            data: values,
        })
            .then((response) => {
                actions.setSubmitting(false);
                actions.resetForm();
                handleServerResponse(true, 'Thanks!');
            })
            .catch((error) => {
                actions.setSubmitting(false);
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <div className="condiv home">
            <div className="contact-form">
                <Formik
                    initialValues={{ email: '', message: '' }}
                    onSubmit={handleOnSubmit}
                    validationSchema={formSchema}
                >
                    {({ isSubmitting }) => (
                        <Form id="fs-frm" noValidate>
                            <div className="contact-email">
                                <label htmlFor="email">Email:</label>
                                <Field id="email" type="email" name="email" />
                                <ErrorMessage
                                    className="error-message"
                                    name="email"
                                    className="errorMsg"
                                    component="p"
                                />
                            </div>
                            <div className="contact-message">
                                <label htmlFor="message">Message:</label>
                                <Field
                                    id="message"
                                    name="message"
                                    component="textarea"
                                />
                                <ErrorMessage
                                    name="message"
                                    className="errorMsg"
                                    component="p"
                                />
                            </div>
                            <div className="contact-button">
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                            {serverState && (
                                <p
                                    className={
                                        !serverState.ok ? 'errorMsg' : ''
                                    }
                                >
                                    {serverState.msg}
                                </p>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
            <Social />
        </div>
    );
};
