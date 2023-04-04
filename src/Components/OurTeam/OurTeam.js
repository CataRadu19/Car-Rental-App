import "./OurTeam.css";
import pers1 from "../../Assets/Images/pers1.png";
import pers2 from "../../Assets/Images/pers2.png";
import pers3 from "../../Assets/Images/pers3.png";
import pers4 from "../../Assets/Images/pers4.png";
import pers5 from "../../Assets/Images/pers5.png";
import pers6 from "../../Assets/Images/pers6.png";

export default function OurTeam() {

    return (
        <div className="models">
            <div className="model">
                <img src={pers1} alt="pers1" />
                <div>
                    <h4>Luke Miller</h4>
                    <p>Salesman</p>
                </div>
            </div>
            <div className="model">
                <img src={pers2} alt="pers2" />
                <div>
                    <h4>Michael Diaz</h4>
                    <p>Business Owner</p>
                </div>
            </div>
            <div className="model">
                <img src={pers3} alt="pers3" />
                <div>
                    <h4>Briana Ross</h4>
                    <p>Photographer</p>
                </div>
            </div>
            <div className="model">
                <img src={pers4} alt="pers4" />
                <div>
                    <h4>Lauren Rivera</h4>
                    <p>Car Detailist</p>
                </div>
            </div>
            <div className="model">
                <img src={pers5} alt="pers5" />
                <div>
                    <h4>Martin Rizz</h4>
                    <p>Mechanic</p>
                </div>
            </div>
            <div className="model">
                <img src={pers6} alt="pers6" />
                <div>
                    <h4>Caitlyn Hunt</h4>
                    <p>Menager</p>
                </div>
            </div>


        </div>
    )
}