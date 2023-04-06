import "./Hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";


export default function Hamburger({ faCode }) {



    return (
        <>
            <div className="hamburger">
                <FontAwesomeIcon icon={faCode ? faX : faBars} className="fa-icons fa-bars" />
            </div>

            <style jsx>{`   
.hamburger {
display: none;
}


@media (max-width: 1200px) {
    .hamburger {
        display: flex;
        z-index: 10;
    }
}
        `}</style>
        </>
    )

}