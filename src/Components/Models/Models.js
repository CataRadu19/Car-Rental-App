import "./Models.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import carData from '../../carData';

export default function Models() {

    const cars = carData.map((car) => {
        return (
            <div className="model-card">
                <img src={car.link} alt="car" className="car-image" />
                <div className="model-card-child">
                    <div className="car-left">
                        <h3>{car.brand}</h3>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} className="fa-icons" />
                            <FontAwesomeIcon icon={faStar} className="fa-icons" />
                            <FontAwesomeIcon icon={faStar} className="fa-icons" />
                            <FontAwesomeIcon icon={faStar} className="fa-icons" />
                            <FontAwesomeIcon icon={faStar} className="fa-icons" />
                        </div>
                        <div className="car-left-icons">
                            <FontAwesomeIcon icon={faCar} className="fa-icons" />
                            <p>{car.mark}</p>
                        </div>
                        <div className="car-left-icons">
                            <FontAwesomeIcon icon={faCar} className="fa-icons" />
                            <p>{car.transmission}</p>
                        </div>
                    </div>
                    <div className="car-right">
                        <h3>${car.cost}</h3>
                        <div>
                            <p>
                                Per day
                            </p>
                        </div>
                        <div>
                            <p>{car.doors}</p>
                        </div>
                        <div>
                            <p>{car.fuel}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="models">
            {cars}
        </div>
    )
}
