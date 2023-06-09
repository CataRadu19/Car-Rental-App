import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./Selector.css";
import carData from '../../carData';
import locationData from '../../locationData';

export default function Selector() {

    const cars = carData.map((car, index) => {
        return (
            <option key={index} value={car.id}>{car.brand}</option>
        )
    });

    const locations = locationData.map((location, index) => {
        return (
            <option key={index} value={location.id}>{location}</option>
        )
    });

    return (
        <form className="selector">
            <h3>Book a car</h3>
            <div className="selectors-container">
                <div className="selector-item">
                    <label className="selector-item-text">
                        <FontAwesomeIcon icon={faCar} className="fa-icons" />
                        <p>Select Your Car Type <span className="fa-icons">*</span></p>
                    </label>
                    <div className="selector-item-select">
                        <select>
                            {cars}
                        </select>
                    </div>
                </div>

                <div className="selector-item">
                    <label className="selector-item-text">
                        <FontAwesomeIcon icon={faMapMarker} className="fa-icons" />
                        <p>Pick-up <span className="fa-icons">*</span></p>
                    </label>
                    <div className="selector-item-select">
                        <select>
                            {locations}
                        </select>
                    </div>
                </div>

                <div className="selector-item">
                    <label className="selector-item-text">
                        <FontAwesomeIcon icon={faMapMarker} className="fa-icons" />
                        <p>Drop-off <span className="fa-icons">*</span></p>
                    </label>
                    <div className="selector-item-select">
                        <select>
                            {locations}
                        </select>
                    </div>
                </div>

                <div className="selector-item">
                    <label className="selector-item-text">
                        <FontAwesomeIcon icon={faCalendarDays} className="fa-icons" />
                        <p>Drop-off <span className="fa-icons">*</span></p>
                    </label>
                    <div className="selector-item-select">
                        <input type="date" id="pickup" name="pickup"></input>
                    </div>
                </div>

                <div className="selector-item">
                    <label className="selector-item-text">
                        <FontAwesomeIcon icon={faCalendarDays} className="fa-icons" />
                        <p>Drop-off <span className="fa-icons">*</span></p>
                    </label>
                    <div className="selector-item-select">
                        <input type="date" id="dropoff" name="dropoff"></input>
                    </div>
                </div>

                <div className="selector-item button-container">
                    <button className="rubik">Search</button>
                </div>


            </div>
        </form>
    )
}