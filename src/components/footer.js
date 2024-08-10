import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <p className="mb-0">Copyright &copy; RahulPambhar 2024. All rights reserved.
                </p>
                <div className="social-links text-right m-auto  p-2 ml-sm-auto">
                    <a href="https://www.upwork.com/freelancers/~01a3f32cd96adc7ef9" className="link m-1"> <FontAwesomeIcon icon={faUpwork} /></a>
                    <a href="https://www.linkedin.com/in/rahul-pambhar-09b2b521a/" className="link m-1"> <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.linkedin.com/in/rahul-pambhar-09b2b521a/" className="link m-1"> <FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer