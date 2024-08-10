import React from 'react'

const WhatIdo = () => {
    return (
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
                    alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page"
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
                    alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page"
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
                    alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page"
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
                    alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free bootstrap 4.1.1 templates, meyawo Landing page"
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
      </section> 
      
    )
}

export default WhatIdo