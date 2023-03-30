import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import testi1 from "../../Assets/Images/testi1.jpg";
import testi2 from "../../Assets/Images/testi2.jpg";

export default function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials-container">
                <div className="text">
                    <h3>Reviewed by People</h3>
                    <h1>Client's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <h4>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h4>
                        <div className="card-line">
                            <div className="card-left">
                                <img src={testi1} alt="testi1" />
                                <div className="card-text">
                                    <h3>Parry Hotter</h3>
                                    <p>Targu Mures </p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                        </div>

                    </div>
                    <div className="card">
                        <h4>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h4>
                        <div className="card-line">
                            <div className="card-left">
                                <img src={testi2} alt="testi2" />
                                <div className="card-text">
                                    <h3>Ron Rizzly</h3>
                                    <p>Cluj</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                        </div>

                    </div>
                </div>

            </div >
        </div>
    );
}
