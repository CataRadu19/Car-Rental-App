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

    const handleClick = (e) => {
        const carId = e.target.dataset.carId;
        const car = carData.find((car) => car.link === carId);
        setButton(car.link);
        setInfo(car);
    }

    const cars = carData.map((car) => {
        return (
            <button id={car.link} data-car-id={car.link} onClick={handleClick}>{car.brand}</button>
        )
    });


    console.log(info);
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
                <div className="fleet-info">
                    <h1>{info.brand}</h1>
                    <p>Model: {info.model}</p>
                    <p>Mark: {info.mark}</p>
                    <p>Year: {info.year}</p>
                    <p>Doors: {info.doors}</p>
                    <p>AC: {info.ac}</p>
                    <p>Transmission: {info.transmission}</p>
                    <p>Fuel: {info.fuel}</p>
                    <p>Cost: {info.cost}</p>

                </div>
            </div>
        </div>
    )
}