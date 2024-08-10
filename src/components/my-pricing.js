import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { subscribeSchema } from '../utils/validation';
import { countryCodes } from '../utils/rowData';


const MyPricing = () => {

    const [subscribe, setSubscribe] = useState("")
    const apiUrl = process.env.REACT_APP_API_URL;
    const subscribeModalRef = useRef();

    return (
        <>
            <section className="section" id="pricing">
                <div className="container text-center">
                    <p className="section-subtitle">How Much I Charge ?</p>
                    <h6 className="section-title mb-6">My Pricing</h6>
                    {/* row */}
                    <div className="pricing-wrapper bg-primary">
                        <div className="pricing-card border border-white" style={{ backgroundColor: '#e0dff7' }}>
                            <div className="pricing-card-header">
                                <img className="pricing-card-icon" src="assets/imgs/scooter.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="pricing-card-body">
                                <h6 className="pricing-card-title">Basic</h6>
                                <div className="pricing-card-list">
                                    <p style={{ color: '#014f06' }}>5-day delivery</p>
                                    <p style={{ color: '#014f06' }}>4 pages</p>
                                    <p style={{ color: '#ab0317' }}>Content upload</p>
                                    <p style={{ color: '#014f06' }}>Design customization</p>
                                    <p style={{ color: '#014f06' }}>Responsive design</p>
                                    <p style={{ color: '#014f06' }}>Source code</p>
                                    <p style={{ color: '#ab0317' }} >Detailed code comments</p>
                                </div>
                            </div>
                            <div className="pricing-card-footer">
                                <span>$</span> {" "}
                                <span>250</span>
                            </div>
                            <button className="btn btn-primary mt-3 pricing-card-btn" data-toggle="modal" data-target="#subscribeModal" onClick={() => setSubscribe("basic")}>Subscribe</button>
                        </div>

                        <div className="pricing-card border-white" style={{ backgroundColor: '#e0dff7' }}>
                            <div className="pricing-card-header">
                                <img className="pricing-card-icon" src="assets/imgs/shipped.svg"
                                    alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="pricing-card-body">
                                <h6 className="pricing-card-title">Standard</h6>
                                <div className="pricing-card-list">
                                    <p style={{ color: '#014f06' }}>5-day delivery</p>
                                    <p style={{ color: '#014f06' }}>7 pages</p>
                                    <p style={{ color: '#014f06' }}>Content upload</p>
                                    <p style={{ color: '#014f06' }}>Design customization</p>
                                    <p style={{ color: '#014f06' }}>Responsive design</p>
                                    <p style={{ color: '#014f06' }}>Source code</p>
                                    <p style={{ color: '#014f06' }} >Detailed code comments</p>
                                </div>
                            </div>
                            <div className="pricing-card-footer">
                                <span>$</span> {" "}
                                <span>900</span>
                            </div>
                            <button className="btn btn-primary mt-3 pricing-card-btn" data-toggle="modal" data-target="#subscribeModal" onClick={() => setSubscribe("standard")}>Subscribe</button>

                        </div>

                        <div className="pricing-card border-white" style={{ backgroundColor: '#e0dff7' }}>
                            <div className="pricing-card-header">
                                <img className="pricing-card-icon" src="assets/imgs/startup.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="pricing-card-body">
                                <h6 className="pricing-card-title">Premium</h6>
                                <div className="pricing-card-list">
                                    <p style={{ color: '#014f06' }}>30-day delivery</p>
                                    <p style={{ color: '#014f06' }}>21 pages</p>
                                    <p style={{ color: '#014f06' }}>Content upload</p>
                                    <p style={{ color: '#014f06' }}>Design customization</p>
                                    <p style={{ color: '#014f06' }}>Responsive design</p>
                                    <p style={{ color: '#014f06' }}>Source code</p>
                                    <p style={{ color: '#014f06' }} >Detailed code comments</p>
                                </div>
                            </div>
                            <div className="pricing-card-footer">
                                <span>$</span> {" "}
                                <span>2100</span>
                            </div>
                            <button className="btn btn-primary mt-3 pricing-card-btn" data-toggle="modal" data-target="#subscribeModal" onClick={() => setSubscribe("infinity")}>Subscribe</button>
                        </div>

                        <div className="pricing-card border-white" style={{ backgroundColor: '#e0dff7' }}>
                            <div className="pricing-card-header">
                                <img className="pricing-card-icon" src="assets/imgs/infinity.svg"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="pricing-card-body">
                                <h6 className="pricing-card-title">Infiny</h6>
                                <div className="pricing-card-list">
                                    <p style={{ color: '#014f06' }}>customize delivery</p>
                                    <p style={{ color: '#014f06' }}>Infiny pages</p>
                                    <p style={{ color: '#014f06' }}>Content upload</p>
                                    <p style={{ color: '#014f06' }}>Design customization</p>
                                    <p style={{ color: '#014f06' }}>Responsive design</p>
                                    <p style={{ color: '#014f06' }}>Source code</p>
                                    <p style={{ color: '#014f06' }} >Detailed code comments</p>
                                </div>
                            </div>
                            <div className="pricing-card-footer">
                                <span>$</span> {" "}
                                <span>10000...</span>
                            </div>
                            <button className="btn btn-primary mt-3 pricing-card-btn" data-toggle="modal" data-target="#subscribeModal" onClick={() => setSubscribe("premium")}>Subscribe</button>
                        </div>
                    </div>{/* end of row */}
                </div> {/* end of container */}
            </section >
            {/* model */}
            <div className="modal fade" id="subscribeModal" tabIndex="-1" role="dialog" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                countryCode: "",
                                mobile: "",
                                note: '',
                            }}
                            validationSchema={subscribeSchema}
                            onSubmit={async (values, { resetForm }) => {
                                try {

                                    if (values.mobile.length > 0 && values.countryCode === "") {
                                        toast.error("Please select country code")
                                        return
                                    }
                                    if (values.countryCode.length > 0 && values.mobile === "") {
                                        toast.error("Please enter mobile number")
                                        return
                                    }
                                    values.subscribe = subscribe
                                    const res = await axios.post(`${apiUrl}/subscribe`, values)

                                    if (res?.data?.st) {
                                        toast.success(res?.data?.msg)
                                        resetForm();
                                        setSubscribe("")

                                        if (subscribeModalRef.current) {
                                            subscribeModalRef.current.click();
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
                            {({ resetForm, isSubmitting, }) => (
                                <Form id="hireMeForm">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="subscribeModalLabel">Subscribe {subscribe} </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={subscribeModalRef} onClick={() => { resetForm(); setSubscribe("") }}>
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
                                            <label htmlFor="note">Note<span className="text-danger"> *</span> </label>
                                            <Field className="form-control" id="note" name="note" rows="3" component="textarea" />
                                            <ErrorMessage name="note" component="span" className="text-danger error-message" />
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { resetForm(); setSubscribe("") }} >Close</button>
                                        <button disabled={isSubmitting} type="submit" className="btn btn-primary">{isSubmitting ? "Sending..." : "Subscribe"}</button>
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

export default MyPricing