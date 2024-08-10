import React from 'react'

const ContactMe = ({ message, loading, setMessage, messageLength, name, setName, email, setEmail, handleSubmit }) => {
    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <div className="d-flex w-50 mx-auto justify-content-center">
                    <p className="mb-0"><img style={{ width: '25px', hight: '30px' }} src="assets/imgs/smartphone.png" alt="" />  +91 8000555268</p>
                    <p className="mb-0 " style={{ margin: '0 10px', color: '#695aa6' }}>|</p>
                    <p className="mb-0"><img style={{ width: '30px', hight: '30px' }} src="assets/imgs/email.png" alt="" /> pambharrahul@gmail.com</p>
                </div>
                OR
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
                </form>
            </div>
        </section>
    )
}

export default ContactMe