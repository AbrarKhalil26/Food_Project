import React from 'react'
import './Footer.css'

// Imported Font Awesome ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebookF ,faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className='container-fluid container-lg pb-5'>
                <div className="f-row">
                    <a className="logo" href="index.html">
                        Kocina
                    </a>
                    <div className="contact-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="facebook link">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </a>

                        <a href="https://www.instagram.com/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>

                        <a href="mailto:info@blacompany.com">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>
                </div>
                <div className="row s-row my-3 g-4">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p>
                            <a href="index.html">Presentations</a>
                        </p>
                        <p>
                            <a href="index.html">Professionals</a>
                        </p>
                        <p>
                            <a href="index.html">Stores</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p>
                            <a href="index.html">Webinars</a>
                        </p>
                        <p>
                            <a href="index.html">Workshops</a>
                        </p>
                        <p>
                            <a href="index.html">Local Meetups</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p>
                            <a href="index.html">Our Initiatives</a>
                        </p>
                        <p>
                            <a href="index.html">Giving Back</a>
                        </p>
                        <p>
                            <a href="index.html">Communities</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <p>
                            <a href="index.html">Contact Form</a>
                        </p>
                        <p>
                            <a href="index.html">Work With Us</a>
                        </p>
                        <p>
                            <a href="index.html">Visit Us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
