import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <h4>CAR <span className="not-bold">Rental</span></h4>
                    <p className="gray-text">We offer a big range of vehicles for all your driving needs.
                        <br></br>We have the perfect car to meet your needs.</p>
                    <div className="phone-icon">
                        <div>
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <a href="tel:123456789">(123)456-789</a>
                        </div>
                    </div>
                    <div className="email-icon">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
                        </div>
                    </div>
                    <p>Design by XpeedStudio</p>
                </div>
                <div className="list">
                    <h4>COMPANY</h4>
                    <a href="google.com">New York</a>
                    <a href="google.com">Careers</a>
                    <a href="google.com">Mobile</a>
                    <a href="google.com">Blog</a>
                    <a href="google.com">How we work</a>
                </div>
                <div>
                    <h4>WORKING HOURS</h4>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>
                <div>
                    <h4>SUBSCRIPTION</h4>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    <div className="button-subscription">
                        <input type="text" placeholder="Enter your email" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
