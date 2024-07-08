import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Field, Form, Formik, ErrorMessage } from 'formik';

import { hireMeSchema, subscribeSchema } from './utils/validation';
import { countryCodes, } from './utils/rowData'


function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageLength, setMessageLength] = useState(200)
  const [blogs, setBlogs] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, isLoading] = useState(false)
  const [subscribe, setSubscribe] = useState("")
  const [selectedLink, setLink] = useState("Home")
  const apiUrl = process.env.REACT_APP_API_URL;
  const fileInputRef = useRef(null);
  const subscribeModalRef = useRef();
  const hireMeModalRef = useRef();


  // let newUrl = apiUrl?.replace('/portfolio/', '/');
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const urlObj = new URL(apiUrl);

  urlObj.pathname = urlObj?.pathname?.replace('/portfolio', '');

  urlObj?.toString();



  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading(true)

    try {

      const res = await axios.post(`${apiUrl}/contactMe`,
        {
          name: name,
          email: email,
          message: message
        }
      )

      if (res?.data?.st) {
        toast.success(res?.data?.msg)
        setEmail('')
        setName('')
        setMessage('')
        isLoading(false)
      } else {
        if (res?.data?.errors?.length > 0) {
          toast.error(res?.data?.errors[0].msg)
          isLoading(false)
          return
        }
        toast.error(res?.data?.msg)
        setEmail('')
        setName('')
        setMessage('')
        isLoading(false)
      }

    } catch (error) {
      toast.error("Something went wrong")
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getBlogs`)
        setBlogs(response?.data?.data)
      } catch (error) {
        console.log('error::: ', error);
      }
    }

    const getTestimonials = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getTestimonials`)
        setTestimonials(response?.data?.data)
      } catch (error) {
        console.log('error::: ', error);
      }
    }

    getBlogs()
    getTestimonials()
  }, [])

  const handleScroll = () => {
    const sections = document.querySelectorAll('[id]');
    const scrollPosition = window.scrollY + 50; // Adjust this value if needed

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setLink(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTestimonials = (testimonialGroup) => (
    <div className="flex testimonial-group">
      {testimonialGroup.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={`${urlObj}` + testimonial?.image} alt={testimonial.name} />
          <p>{testimonial.massage}</p>
          <h3>{testimonial.clientName}</h3>
        </div>
      ))}
    </div>
  );

  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialGroups.push(testimonials.slice(i, i + 2));
  }




  return (
    <div>

      {/* Page Navbar */}
      <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
        <div className="container">
          <a className="logo" href="#">Rahul's</a>
          <ul className={`nav ${isNavOpen ? 'show' : ''}`}>
            <li className="item">
              <a className={selectedLink === "home" ? "link text-primary" : "link"} onClick={() => { setLink("home") }} href="#home">Home</a>
            </li>
            <li className="item">
              <a className={selectedLink === "about" ? "link text-primary" : "link"} onClick={() => { setLink("about") }} href="#about">About</a>
            </li>
            <li className="item">
              <a className={selectedLink === "portfolio" ? "link text-primary" : "link"} onClick={() => { setLink("portfolio") }} href="#portfolio">Portfolio</a>
            </li>
            <li className="item">
              <a className={selectedLink === "testmonial" ? "link text-primary" : "link"} onClick={() => { setLink("testmonial") }} href="#testmonial">Testmonial</a>
            </li>
            <li className="item">
              <a className={selectedLink === "blog" ? "link text-primary" : "link"} onClick={() => { setLink("blog") }} href="#blog">Blog</a>
            </li>
            <li className="item">
              <a className={selectedLink === "contact" ? "link text-primary" : "link"} onClick={() => { setLink("contact") }} href="#contact">Contact</a>
            </li>

          </ul>
          <a id="nav-toggle" className={`hamburger hamburger--elastic ${isNavOpen ? 'is-active' : ''}`} onClick={toggleNav}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </a>
        </div>
      </nav > {/* End of Page Navbar*/}

      {/* page header */}
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I'm Rahul Pambhar</span>
          </h1>
          <p className="header-subtitle">FULL-STACK WEB DEVELOPER</p>
          <a href="#portfolio" className="btn btn-primary">Visit  Works</a>
        </div>
      </header> {/* end of page header */}

      {/* about section */}
      <section className="section " id="about">
        {/* about wrapper */}
        <div className="container text-center">
          {/* about wrapper */}
          <div className="about">
            <div className="about-img-holder">
              <img src="assets/imgs/man.png" className="about-img"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h1 className="section-title mb-3">About Me</h1>
              <p>
                Greetings! 😀 I'm a full-stack developer with 5 years of extensive experience in the complete development cycle of various applications. I'm proficient in a variety of programming languages and have a deep passion for creating dynamic and innovative solutions.
                <br />
                Specializing in the MERN stack and Web3 technologies, I excel in designing and developing scalable and secure web applications as well as decentralized applications (dApps). My focus is on ensuring seamless user experiences and efficient performance in every project I undertake.

                <br />
                <br />
                <span className='text-primary'>
                  Skiled In - </span> <br />
                C, C++, Java, Python, JavaScript, PHP
                / React.js
                / Next.js
                / Node.js
                / Express.js
                / Laravel
                / Django
                / CSS / ( Tailwind, Bootstrap )
                / HTML
                / React Native (Mobile App Development)
                / Web3
                / Solidity
                / Smart Contract
                / MVC Structure
                / NGINX
                / FTP
                / SQL - ( MySQL, PostgreSQL )
                / NoSQL - ( MongoDB, Firebase )
              </p>
              <a href='#contact' className="btn-rounded btn btn-outline-primary mt-4">Contact Me</a>
            </div>
          </div>
          {/* end of about wrapper */}
        </div>
        {/* end of container */}
      </section> {/* end of about section */}

      {/* service section */}
      <section className="section" id="service">
        <div className="container text-center">
          <p className="section-subtitle">What I Do ?</p>
          <h6 className="section-title mb-6">Service</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-lg-3 border border-white items-center " style={{ backgroundColor: '#e0dff7' }}>
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/app-development_7991055.png"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Web / web3 Development</h6>
                  <p className="subtitle text-center ml-4">
                    Modern frameworks. <br />
                    Agile development.  <br />
                    SEO optimized.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 border border-white" style={{ backgroundColor: '#e0dff7' }}>
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/automated_4632852.png"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Ios & Android  Development</h6>
                  <p className="subtitle">
                    Custom mobile app solutions. <br />
                    Native & cross-platform. <br />
                    high-performance. <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 border border-white" style={{ backgroundColor: '#e0dff7' }}>
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/quality-control_3344374.png"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Web  & Mobile <br /> Testing</h6>
                  <p className="subtitle">
                    Comprehensive test plans. <br />
                    Automated & manual. <br />
                    Ensuring bug-free solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 border border-white" style={{ backgroundColor: '#e0dff7' }}>
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/bezier-tool_12597739.png"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">UI/UX Design</h6>
                  <p className="subtitle">
                    Intuitive & engaging user interfaces.<br />
                    User-centered design approach. <br />
                  </p>
                </div>
              </div>
            </div>
          </div>{/*end of row */}
        </div>
      </section> {/* end of service section */}

      {/*portfolio section */}
      <section className="section" id="portfolio">
        <div className="container text-center">
          <p className="section-subtitle">What I Did ?</p>
          <h6 className="section-title mb-6">Glimps Of Portfolio</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-4" >
              <a href="#" className="portfolio-card">
                <img src="assets/imgs/img-1.jpg" className="portfolio-card-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Web3 Development</h4>
                    <p className="font-weight-normal">Category: Crypto Exchange</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/img-2.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Full-Stack Web Development</h4>
                    <p className="font-weight-normal">Category: Finance</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/folio-1.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Full-Stack Web Development</h4>
                    <p className="font-weight-normal">Category: Aviation</p>
                  </span>
                </span>
              </a>
            </div>
          </div>{/* end of row */}
        </div>{/* end of container */}
      </section>{/* end of portfolio section */}

      {/* pricing section */}
      <section className="section" id="pricing">
        <div className="container text-center">
          <p className="section-subtitle">How Much I Charge ?</p>
          <h6 className="section-title mb-6">My Pricing</h6>
          {/* row */}
          <div className="pricing-wrapper bg-primary">
            <div className="pricing-card border border-white" style={{ backgroundColor: '#e0dff7' }}>
              <div className="pricing-card-header">
                <img className="pricing-card-icon" src="assets/imgs/scooter.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
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
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
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
              <button className="btn btn-primary mt-3 pricing-card-btn" data-toggle="modal" data-target="#subscribeModal" onClick={() => setSubscribe("premium")}>Subscribe</button>
            </div>

            <div className="pricing-card border-white" style={{ backgroundColor: '#e0dff7' }}>
              <div className="pricing-card-header">
                <img className="pricing-card-icon" src="assets/imgs/infinity.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
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
      </section > {/* end of pricing section */}

      {/* Subscribe modal */}
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

      {/* section */}
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
          </div> {/* end of row */}
        </div> {/* end of container */}
      </section> {/* end of section */}

      {/* hire Me modal */}
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

      {/* testimonial section */}
      <section className="section" id="testmonial">
        <div className="container text-center">
          <p className="section-subtitle">What Think Client About Me ?</p>
          <h6 className="section-title mb-6">Testmonial</h6>
          <div className="row">
            <div className="col-md-6">
              <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
                {testimonialGroups.map((group, index) => (
                  <div key={index}>
                    {renderTestimonials(group)}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>{/* end of testimonial section */}

      {/* blog section */}
      <section className="section" id="blog">
        <div className="container text-center">
          <p className="section-subtitle">Recent Posts?</p>
          <h6 className="section-title mb-6">Blog</h6>
          {
            blogs.length > 0 ? blogs?.map((blog, index) => {
              return <div key={blog?.id}>
                <div className="blog-card">
                  <div className="blog-card-header">
                    <img src={`${urlObj}` + blog?.image} className="blog-card-img"
                      // <img src="assets/imgs/man.png" className="blog-card-img"
                      alt="file not found" />
                  </div>
                  <div className="blog-card-body">
                    <h5 className="blog-card-title">{blog?.title}</h5>
                    <p className="blog-card-caption">
                      <a href="#">By: {blog?.blogger}</a>
                    </p>
                    <p>{blog?.description}</p>
                    {/* <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a> */}
                  </div>
                </div>
              </div>
            })
              : <h1>No Blog Found</h1>
          }
        </div>
      </section>{/* end of contact section */}

      {/* contact section */}
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          MO : + 91 8000555268  <br />
          <>Email : pambharrahul@gmail.com </> <br />
          or
          {/* contact form */}
          <form className="contact-form col-md-10 col-lg-8 m-auto">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input type="text" size="50" className="form-control" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="form-group col-sm-6">
                <input type="email" className="form-control" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="form-group col-sm-12">
                <textarea name="comment" id="comment" rows="6" className="form-control" value={message}
                  placeholder="Write Something" onChange={(e) => {
                    message.length < 200 && setMessage(e.target.value)
                    message.length === 200 && e.target.value.length < 200 && setMessage(e.target.value)
                  }}></textarea>
                {message.length > 0 && <span>  {messageLength - message.length}  characters left </span>}
              </div>
              <div className="form-group col-sm-12 mt-3">
                <button type="button" disabled={loading} onClick={handleSubmit} className="btn btn-outline-primary rounded" >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>{/* end of contact form */}
        </div>{/* end of container */}
      </section>{/* end of contact section */}

      {/* footer */}
      <div className="container">
        <footer className="footer">
          <p className="mb-0">Copyright &copy; RahulPambhar 2024. All rights reserved.
          </p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="https://wa.me/918000555268" className="link"> <FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://www.linkedin.com/in/rahul-pambhar-09b2b521a/" className="link"> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="link"><i className="ti-facebook"></i></a>
            <a href="#" className="link"><i className="ti-instagram"></i></a>
          </div>
        </footer>
      </div> {/* end of page footer */}

    </div >
  );
}

export default App;
