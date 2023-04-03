import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import heroBg from "../../Assets/Images/hero-bg.png";

export default function Header() {

  let mybutton = document.getElementById("myBtn");


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="header">
      <button onClick={topFunction} id="myBtn" title="Go to top"><FontAwesomeIcon icon={faAngleUp} className="fa-icons" /></button>

      <img src={heroBg} className="hero-bg" alt="bg-car" />

      <div className="header-container">
        <img src={logo} className="logo" alt="" />
        <div className="header-list">
          <ul>
            <li>
              <a href="google.com">Home</a>
            </li>
            <li>
              <a href="google.com">About</a>
            </li>
            <li>
              <a href="google.com">Vehicle Models</a>
            </li>
            <li>
              <a href="google.com">Testimonials</a>
            </li>
            <li>
              <a href="google.com">Our Team</a>
            </li>
            <li>
              <a href="google.com">Contact</a>
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
