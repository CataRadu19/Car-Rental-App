import "./Hero.css";
import mainCar from "../../Assets/Images/main-car.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="container">
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="hero-btns">
                        <a href="google.com" className="button-one"><button>Book Ride <FontAwesomeIcon icon={faCircleCheck} /></button></a>
                        <a href="google.com" className="button-two"><button>Learn More <FontAwesomeIcon icon={faAngleRight} /></button></a>
                    </div>
                </div>
                <img src={mainCar} className="main-car" alt="main-car" />
            </div>
        </div>
    )
}