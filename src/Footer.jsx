import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import {FaFacebook,FaSnapchat,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"
const Footer = () => {
    return ( <div>
        <footer style={{backgroundColor:"cadetblue"}}>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>Progressive Engineerings</strong></p>
                    <p><a href="#"><strong>About us</strong></a></p>
                    <p><a href="#"><strong>Vision</strong></a></p>
                    <p><a href="#"><strong>Careers</strong></a></p>
                    
                    </div>
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>CUSTOMER SERVICES</strong></p>
                    <p><a href="#"><strong>Terms and Conditions </strong></a></p>
                    <p><a href="#"><strong>Privacy Policy</strong></a></p>
                    </div>
                    <div className="col-md-4">
                    <hr className="ruler"></hr>
                    <p><strong>SOCIAL PAGES</strong></p>
                    <a href="#"><FaTwitter size="2em"/></a>
                    <a href="#"><FaInstagram size="2em"/></a>
                    <a href="#"><FaWhatsapp size="2em"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div> );
}
 
export default Footer;