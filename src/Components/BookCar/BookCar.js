import "./BookCar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function BookCar() {
    return (

        <div className='banner'>
            <div className='banner-overlay'>
            </div>
            <div className="container">
                <div className="text-content">
                    <h2>Book a car by getting in touch with us</h2>
                    <span>
                        <FontAwesomeIcon icon={faPhone} className="fa-icons" />
                        <h3>
                            (123) 456-7869
                        </h3>
                    </span>
                </div>
            </div>

        </div>

    );
}