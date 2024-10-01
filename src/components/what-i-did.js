import React from 'react'

const What_I_Did = () => {
    return (
        <section className="section " id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Glimps Of Portfolio</h6>
                <div className="row">
                    <div className="col-md-4"   style={{ maxWidth: '400px', maxHeight: '400px'  }} >
                        <a href="https://catpay.io/" className="portfolio-card">
                            <img src="assets/imgs/cat-1.png" style={{ maxWidth: '400px', maxHeight: '400px'   }} className="portfolio-card-img  border img-responsive rounded"
                                alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web3 Development</h4>
                                    <p className="font-weight-normal">Category: Crypto Exchange</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4 mt-5 "   style={{ maxWidth: '400px', maxHeight: '400px'  }} >
                        <a href="https://chapter-umber.vercel.app/dashboard" className="portfolio-card border img-responsive rounded">
                            <img className="portfolio-card-img img-responsive rounded"   style={{ maxWidth: '400px', maxHeight: '400px'  }}  src="assets/imgs/accounting-1.png"
                                alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Full-Stack Web Development</h4>
                                    <p className="font-weight-normal">Category: Finance</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4"  style={{ maxWidth: '400px', maxHeight: '400px'  }} >
                        <a href="https://www.facepdf.com/convert-to-pdf"  style={{ maxWidth: '400px' , maxHeight: '400px'  }}  className="portfolio-card border img-responsive rounded">
                            <img className="portfolio-card-img  rounded" src="assets/imgs/onlonepdf.png"
                                alt="Download free bootstrap 4 landing page, free bootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Full-Stack Web Development</h4>
                                    <p className="font-weight-normal">Category: Converter</p>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default What_I_Did