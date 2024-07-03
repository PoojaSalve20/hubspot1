import React from 'react';
import LOGO from '../img/logo.png';


function Footer() {
    return (
        <footer className="videobg text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-wrap">
                        {/* Company Logo Section */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-block justify-content-start align-items-center">
                            <img src={LOGO} alt="Logo" style={{ width: '150px' }} />
                            <p>© R Singhania</p>
                        </div>
                    
                        {/* Company Information Section */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h6 className="text mb-4">Company</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white no-underline">About</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white no-underline">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Terms Section */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h6 className="mb-4">Terms</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white no-underline">Data Privacy</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white no-underline">Terms</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white no-underline">Accessibility</a>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Section */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h6 className="mb-4">Related</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-white no-underline">Find Buyer</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white no-underline">Feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Social Media Icons Section */}
                    <div className="col-lg-4 d-flex justify-content-end align-items-center">
                        <a href="#!" className="text-white me-4 social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4 social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4 social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#!" className="text-white social-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
