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
                    <h4 className="rubik">Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p className="rubik">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="hero-btns">
                        <a href="https://car-rental-radu-catalin.netlify.app" className="button-one"><button>Book Ride <FontAwesomeIcon icon={faCircleCheck} /></button></a>
                        <a href="https://car-rental-radu-catalin.netlify.app" className="button-two"><button>Learn More <FontAwesomeIcon icon={faAngleRight} /></button></a>
                    </div>
                </div>
                <img src={mainCar} className="main-car" alt="main-car" />
            </div>
        </div>
    )
}