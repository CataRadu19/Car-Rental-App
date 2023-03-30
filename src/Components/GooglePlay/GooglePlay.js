import "./GooglePlay.css";
import appstore from "../../Assets/Images/appstore.svg";
import appstore2 from "../../Assets/Images/appstore2.svg";

export default function GooglePlay() {

    return (
        <div className="google-play">
            <div className="google-play-small">
                <div className="google-play-container">
                    <h1>Download our app to get most out of it</h1>
                    <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                    <div className="google-play-buttons">
                        <img src={appstore} alt="google-play" />
                        <img src={appstore2} alt="google-play" />
                    </div>
                </div>
            </div>
        </div>
    )

}
