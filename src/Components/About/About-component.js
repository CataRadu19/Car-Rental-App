import "./About-component.css";
import dealer from "../../Assets/Images/dealer.jpg";
import prop7 from "../../Assets/Images/prop7.png";
import prop8 from "../../Assets/Images/prop8.png";
import prop9 from "../../Assets/Images/prop9.png";

export default function AboutComponent() {
    return (
        <div className="about">
            <div className="about-container">
                <img src={dealer} alt="Dealer" className="about-img" />
                <div className="about-text">
                    <h4>About Company</h4>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                    <div className="about-icons-container">
                        <div className="about-icon">
                            <img src={prop7} alt="Dealer" className="about-icon-img" />
                            <div>
                                <h2>20</h2>
                                <p>Car Types</p>
                            </div>
                        </div>
                        <div className="about-icon">
                            <img src={prop8} alt="Dealer" className="about-icon-img" />
                            <div>
                                <h2>85</h2>
                                <p>Rental Outlets</p>
                            </div>
                        </div>
                        <div className="about-icon">
                            <img src={prop9} alt="Dealer" className="about-icon-img" />
                            <div>
                                <h2>75</h2>
                                <p>Repair Shop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}