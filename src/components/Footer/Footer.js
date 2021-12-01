import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer-blue'>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                {/* added link bacause each text go to the route */}
                                <li><Link to="/appoinment">Appoinment</Link></li>
                                <li><Link to="/doctor">Doctor</Link></li>
                                <li><Link to="/service">Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                {/* added link bacause each text go to the route */}
                                <li><Link to="/appoinment">Appoinment</Link></li>
                                <li><Link to="/doctor">Doctor</Link></li>
                                <li><Link to="/service">Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>ideaCare</h3>
                            <p>“The art of medicine consists of amusing the patient while nature cures the disease.”</p>
                        </div>

                    </div>
                    <p className="copyright">ideaCare © 2021</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;