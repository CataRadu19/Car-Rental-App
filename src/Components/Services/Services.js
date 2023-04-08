import "./Services.css";
import prop1 from "../../Assets/Images/prop1.png";
import prop2 from "../../Assets/Images/prop2.png";
import prop3 from "../../Assets/Images/prop3.png";


export default function Services() {
    return (
        <div className="services">
            <div className="services-titles">
                <h4 className="rubik">Plan your trip now</h4>
                <h1>Quick & easy car rental</h1>
            </div>
            <div className="services-container">
                <div className="service">
                    <img src={prop1} alt="prop1" />
                    <h4>Select Car</h4>
                    <p className="rubik">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="service">
                    <img src={prop2} alt="prop2" />
                    <h4>Contact Operator</h4>
                    <p className="rubik">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="service">
                    <img src={prop3} alt="prop3" />
                    <h4>Let's Drive</h4>
                    <p className="rubik">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}