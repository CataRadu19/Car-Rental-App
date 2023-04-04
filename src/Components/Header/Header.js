import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [mybutton, setMybutton] = useState(null);

  useEffect(() => {
    setMybutton(document.getElementById("myBtn"));
  }, []);

  useEffect(() => {
    function scrollFunction() {
      if (mybutton) {
        mybutton.style.display =
          document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
            ? "block"
            : "none";
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [mybutton]);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="header">
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <FontAwesomeIcon icon={faAngleUp} className="fa-icons" />
      </button>



      <div className="header-container">
        <img src={logo} className="logo" alt="" />
        <div className="header-list">
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/About" >About</Link>
            </li>
            <li>
              <Link to="/ModelPage" >Vehicle Models</Link>
            </li>
            <li>
              <Link to="/Testimonials" >Testimonials</Link>
            </li>
            <li>
              <Link to="/OurTeamPage" >Our Team</Link>
            </li>
            <li>
              <Link to="/ContactPage" >Contact</Link>
            </li>
          </ul>
        </div>
        <div className="header-btn-container">
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </div>
    </div >
  );
}
