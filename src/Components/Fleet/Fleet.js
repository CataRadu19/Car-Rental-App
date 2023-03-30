import { useState } from 'react';
import "./Fleet.css";
import carData from '../../carData';


export default function Fleet() {

    const [button, setButton] = useState("https://imgbox.io/ib/oZmRQPDacr.jpg");
    const [info, setInfo] = useState({
        id: 1,
        brand: "Audi A1 S-Line",
        cost: 45,
        model: "Audi",
        mark: "A1",
        year: 2012,
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
        link: "https://imgbox.io/ib/oZmRQPDacr.jpg"
    });
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (e) => {
        const carId = e.target.dataset.carId;
        const car = carData.find((car) => car.link === carId);
        const carIndex = carData.findIndex((car) => car.link === carId);
        setButton(car.link);
        setInfo(car);
        setActiveButton(carIndex);
    }

    const cars = carData.map((car, index) => {
        const className = index === activeButton ? "active" : "";
        return (
            <button className={className} key={car.id} data-car-id={car.link} onClick={handleClick}>{car.brand}</button>
        )
    });


    return (
        <div className="fleet">
            <div className="fleet-titles">
                <h4>Vehicle Models</h4>
                <h1>Our rental fleet</h1>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="fleet-container">
                <div className="fleet-buttons"> {cars}</div>
                <img src={button} alt="" />

                <div class="table-responsive fleet-table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th colspan="2"><span>${info.cost}</span> / rent per day</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Model</td>
                                <td>{info.model}</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>{info.mark}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{info.year}</td>
                            </tr>
                            <tr>
                                <td>Doors</td>
                                <td>{info.doors}</td>
                            </tr>
                            <tr>
                                <td>AC</td>
                                <td>{info.ac}</td>
                            </tr>
                            <tr>
                                <td>Transmission</td>
                                <td>{info.transmission}</td>
                            </tr>
                            <tr>
                                <td>Fuel</td>
                                <td>{info.fuel}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn">RESERVE NOW </button>

                </div>
            </div>
        </div>
    )
}