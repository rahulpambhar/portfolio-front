import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageLength, setMessageLength] = useState(200)
  const [blogs, setBlogs] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      } else {
        if (res?.data?.errors?.length > 0) {
          toast.error(res?.data?.errors[0].msg)
          return
        }
        toast.error(res?.data?.msg)
        setEmail('')
        setName('')
        setMessage('')
      }

    } catch (error) {
      toast.error(error.response.data.msg)
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

  const renderTestimonials = (testimonialGroup) => (
    <div className="flex testimonial-group">
      {testimonialGroup.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={'http://localhost:3002/' + testimonial?.image} alt={testimonial.name} />
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
              <a className="link" href="#home">Home</a>
            </li>
            <li className="item">
              <a className="link" href="#about">About</a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">Portfolio</a>
            </li>
            <li className="item">
              <a className="link" href="#testmonial">Testmonial</a>
            </li>
            <li className="item">
              <a className="link" href="#blog">Blog</a>
            </li>
            <li className="item">
              <a className="link" href="#contact">Contact</a>
            </li>
            <li className="item ml-md-3">
              <a href="components.html" className="btn btn-primary">Components</a>
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

          <button className="btn btn-primary">Visit My Works</button>
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
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut
                fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
                impedit iure nemo a iste
                <br />culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo
                esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis
                culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum
                expedita aliquid! Debitis, nam!
              </p>
              <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
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
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/pencil-case.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Adipisicing</h6>
                  <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                    molestias dolorem iste quod.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/responsive.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Sapiente</h6>
                  <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                    molestias dolorem iste quod.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/toolbox.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Placeat</h6>
                  <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                    molestias dolorem iste quod.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="body">
                  <img src="assets/imgs/analytics.svg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                    className="icon" />
                  <h6 className="title">Iusto</h6>
                  <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam
                    molestias dolorem iste quod.</p>
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
          <h6 className="section-title mb-6">Portfolio</h6>
          {/* row */}
          <div className="row">
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img src="assets/imgs/folio-1.jpg" className="portfolio-card-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Web Designing</h4>
                    <p className="font-weight-normal">Category: Web Templates</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/folio-2.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Web Designing</h4>
                    <p className="font-weight-normal">Category: Web Templates</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="portfolio-card">
                <img className="portfolio-card-img img-responsive rounded" src="assets/imgs/folio-3.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Web Designing</h4>
                    <p className="font-weight-normal">Category: Web Templates</p>
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
          <div className="pricing-wrapper">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img className="pricing-card-icon" src="assets/imgs/scooter.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">Free</h6>
                <div className="pricing-card-list">
                  <p>accusamus reprehenderit</p>
                  <p>provident dolorem </p>
                  <p>quos neque</p>
                  <p>fugiat quibusdam</p>
                  <p><i className="ti-close"></i></p>
                  <p><i className="ti-close"></i></p>
                </div>
              </div>
              <div className="pricing-card-footer">
                <span>$</span>
                <span>0.00/Month</span>
              </div>
              <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img className="pricing-card-icon" src="assets/imgs/shipped.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">Basic</h6>
                <div className="pricing-card-list">
                  <p>accusamus reprehenderit</p>
                  <p>provident dolorem </p>
                  <p>quos neque</p>
                  <p>fugiat quibusdam</p>
                  <p>accusamus laboriosam</p>
                  <p><i className="ti-close"></i></p>
                </div>
              </div>
              <div className="pricing-card-footer">
                <span>$</span>
                <span>9.99/Month</span>
              </div>
              <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img className="pricing-card-icon" src="assets/imgs/startup.svg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">Premium</h6>
                <div className="pricing-card-list">
                  <p>accusamus reprehenderit</p>
                  <p>provident dolorem </p>
                  <p>quos neque</p>
                  <p>fugiat quibusdam</p>
                  <p>accusamus laboriosam</p>
                  <p>inventore omnis</p>
                </div>
              </div>
              <div className="pricing-card-footer">
                <span>$</span>
                <span>99.9/Month</span>
              </div>
              <a href="#" className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
            </div>

          </div>{/* end of row */}
        </div> {/* end of container */}
      </section>{/* end of pricing section */}

      {/* section */}
      <section className="section-sm bg-primary">
        <div className="container text-center text-sm-left">
          <div className="row align-items-center">
            <div className="col-sm offset-md-1 mb-4 mb-md-0">
              <h6 className="title text-light">Want to work with me?</h6>
              <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
            </div>
            <div className="col-sm offset-sm-2 offset-md-3">
              <button className="btn btn-lg my-font btn-light rounded">Hire Me</button>
            </div>
          </div> {/* end of row */}
        </div> {/* end of container */}
      </section> {/* end of section */}

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
              {/* <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img src="assets/imgs/avatar2.jpg" className="testimonial-card-img"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                    adipisci nihil.</p>
                  <h6 className="testimonial-card-title">Emily Reb</h6>
                </div>
              </div> */}
            </div>
            {/* <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img src="assets/imgs/avatar3.jpg" className="testimonial-card-img"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis
                    adipisci nihil.</p>
                  <h6 className="testimonial-card-title">Emily Reb</h6>
                </div>
              </div>
            </div> */}
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
                    <img src={'http://localhost:3002/' + blog?.image} className="blog-card-img"
                      alt="file not found" />
                  </div>
                  <div className="blog-card-body">
                    <h5 className="blog-card-title">{blog?.title}</h5>
                    <p className="blog-card-caption">
                      <a href="#">By: {blog?.blogger}</a>
                    </p>
                    <p>{blog?.description}</p>
                    <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
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
          MO : + 91 8000555268 <br />
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
                <span>  {messageLength - message.length}  characters left </span>
              </div>
              <div className="form-group col-sm-12 mt-3">
                <button type="button" onClick={handleSubmit} className="btn btn-outline-primary rounded" >
                  Send Message
                </button>
              </div>
            </div>
          </form>{/* end of contact form */}
        </div>{/* end of container */}
      </section>{/* end of contact section */}

      {/* footer */}
      <div className="container">
        <footer className="footer">
          <p className="mb-0">Copyright &copy; <a>DevCRUD</a> Distribution <a
          >ThemeWagon</a>
          </p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="#" className="link"> <FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" className="link"> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" className="link"><i className="ti-facebook"></i></a>
            <a href="#" className="link"><i className="ti-instagram"></i></a>
          </div>
        </footer>
      </div> {/* end of page footer */}

    </div >
  );
}

export default App;
