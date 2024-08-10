import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { hireMeSchema, } from '../utils/validation';
import { countryCodes, } from '../utils/rowData'


const WorkWithMe = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fileInputRef = useRef(null);
    const hireMeModalRef = useRef();

    return (
        <>
            <section className="section-sm bg-primary">
                <div className="container text-center text-sm-left">
                    <div className="row align-items-center">
                        <div className="col-sm offset-md-1 mb-4 mb-md-0">
                            <h6 className="title text-light">Want to work with me?</h6>
                            <p className="m-0 text-light" >Always feel Free to Contact & Hire me</p>

                        </div>
                        <div className="col-sm offset-sm-2 offset-md-3">
                            <button className="btn btn-lg my-font btn-light rounded" data-toggle="modal" data-target="#hireMeModal">Hire Me</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="hireMeModal" tabIndex="-1" role="dialog" aria-labelledby="hireMeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                countryCode: '',
                                mobile: "",
                                budget: '',
                                time: '',
                                message: '',
                                attachment: "",
                            }}
                            validationSchema={hireMeSchema}
                            onSubmit={async (values, { resetForm }) => {

                                if (values.mobile.length > 0 && values.countryCode === "") {
                                    toast.error("Please select country code")
                                    return
                                }
                                if (values.countryCode.length > 0 && values.mobile === "") {
                                    toast.error("Please enter mobile number")
                                    return
                                }
                                try {

                                    const formData = new FormData();
                                    formData.append("name", values.name);
                                    formData.append("email", values.email);
                                    formData.append("countryCode", values.countryCode);
                                    formData.append("mobile", values.mobile);
                                    formData.append("budget", values.budget);
                                    formData.append("time", values.time);
                                    formData.append("message", values.message);
                                    formData.append("attachment", values.attachment);

                                    const res = await axios.post(`${apiUrl}/hireMe`, formData)

                                    if (res?.data?.st) {
                                        toast.success(res?.data?.msg)
                                        resetForm();
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = '';
                                            hireMeModalRef.current.click();
                                        }
                                    } else {
                                        if (res?.data?.errors?.length > 0) {
                                            toast.error(res?.data?.errors[0].msg)
                                            return
                                        }
                                        toast.error(res?.data?.msg)
                                    }
                                } catch (error) {
                                    toast.error("Something went wrong")
                                }
                            }}
                        >
                            {({ resetForm, initialValues, isSubmitting, handleBlur, setFieldValue, }) => (
                                <Form id="hireMeForm">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="hireMeModalLabel">Hire Me </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={hireMeModalRef} onClick={() => {
                                            resetForm({ values: initialValues })
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = '';
                                            }
                                        }}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="name">NAME <span className="text-danger">*</span></label>
                                            <Field type="text" placeholder='Michel' className="form-control" id="name" name="name" />
                                            <ErrorMessage name="name" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">EMAIL<span className="text-danger">*</span> </label>
                                            <Field type="email" placeholder='Michel@example.com' className="form-control" id="email" name="email" />
                                            <ErrorMessage name="email" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="mobile">COUNTRY & MOBILE (optional)</label>
                                            <div className="d-flex">
                                                <Field
                                                    as="select"
                                                    className="form-control mr-2"
                                                    id="countryCode"
                                                    name="countryCode"
                                                    style={{ maxWidth: '30%' }}
                                                >
                                                    <option value="">Select</option>
                                                    {countryCodes.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.name} ({country.code})
                                                        </option>
                                                    ))}
                                                </Field>
                                                <Field
                                                    type="tel"
                                                    placeholder="8000555268"
                                                    className="form-control no-scroll"
                                                    id="mobile"
                                                    name="mobile"
                                                    style={{ flex: '1' }}
                                                />
                                            </div>
                                            <ErrorMessage name="countryCode" component="div" className="text-danger error-message" />
                                            <ErrorMessage name="mobile" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="budget">LIKELY BUDGET (optional)</label>
                                            <Field type="text" placeholder='$100000' className="form-control" id="budget" name="budget" />
                                            <ErrorMessage name="budget" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="time">IDEAL TIME (months)</label>
                                            <Field type="text" placeholder='3 months' className="form-control" id="time" name="time" />
                                            <ErrorMessage name="time" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">WHAT DO YOU NEED?<span className="text-danger"> *</span> </label>
                                            <Field className="form-control" id="message" name="message" rows="3" component="textarea" />
                                            <ErrorMessage name="message" component="span" className="text-danger error-message" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="attachment">Attachment (optional):</label>
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                id="attachment"
                                                ref={fileInputRef}
                                                name="attachment"
                                                onBlur={handleBlur}
                                                onChange={(event) => setFieldValue('attachment', event.currentTarget.files[0])}
                                            />
                                            <ErrorMessage name="attachment" component="span" className="text-danger error-message" />
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                            resetForm()
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = '';
                                            }
                                        }} >Close</button>
                                        <button disabled={isSubmitting} type="submit" className="btn btn-primary">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkWithMe