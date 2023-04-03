import "./ChooseUs.css";
import cars from "../../Assets/Images/cars.png";
import prop4 from "../../Assets/Images/prop4.png";
import prop5 from "../../Assets/Images/prop5.png";
import prop6 from "../../Assets/Images/prop6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ChooseUs() {
    return (
        <div className="choose-us">
            <img src={cars} alt="car-banner" />
            <div className="text-container">
                <div className="main-text">
                    <h4>Why Choose Us</h4>
                    <h1>Best valued deals you will ever find</h1>
                    <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    <button className="btn">Find details <FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                <div className="services-text">
                    <div className="service">
                        <img src={prop4} alt="car-banner" />
                        <div>
                            <h3>Cross Country Drive</h3>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="service">
                        <img src={prop5} alt="car-banner" />
                        <div>
                            <h3>All Inclusive Pricing</h3>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className="service">
                        <img src={prop6} alt="car-banner" />
                        <div>
                            <h3>No Hidden Charges</h3>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
