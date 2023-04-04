import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

    return (
        <div className="contact">
            <div className="contact-info">
                <h1>Need additional information?</h1>
                <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <div>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <a href="tel:123456789">(123)456-789</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    <a href="/">Targu-Mures, Romania</a>
                </div>
            </div>

            <div className="form-container">
                <form>
                    <label>Full Name <span>*</span></label>
                    <input type="text" placeholder='E.g: "Joe Shmoe"' />
                    <label>Email <span>*</span></label>
                    <input type="email" placeholder="youremail@example.com" />
                    <label>Tell us about it <span>*</span></label>
                    <textarea placeholder="Write Here.." />
                    <button type="submit">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}