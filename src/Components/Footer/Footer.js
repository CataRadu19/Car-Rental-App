import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <h2>CAR Rental</h2>
                    <p>We offers a big range of vehicles for all your driving needs.
                        <br></br>We have the perfect car to meet your needs.</p>
                    <div className="phone-icon">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <p>(123)456-789</p>
                    </div>
                    <div className="email-icon">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <p>carrental@gmail.com</p>
                    </div>
                    <p>Design by XpeedStudio</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>New York</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                    <p>Blog</p>
                    <p>How we work</p>
                </div>
                <div>
                    <h2>Working hours</h2>
                    <p>Mon - Fri: 9:00AM - 9:00PM</p>
                    <p>Sat: 9:00AM - 19:00PM</p>
                    <p>Sun: Closed</p>
                </div>
                <div>
                    <h2>SUBSCRIPTION</h2>
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
