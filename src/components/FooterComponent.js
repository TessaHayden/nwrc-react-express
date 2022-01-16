import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-4 offset-1">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-7 text-center">
                        <a role="button" className="btn btn-link" href="tel:+15033497151"><i className="fa fa-phone" /> 1 (503) 349-7151</a><br />
                        <a role="button" className="btn btn-link" href="mailto:nwrestaurantconsultants@hotmail.com"><i className="fa fa-envelope-o" />NW restaurant consultant email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;