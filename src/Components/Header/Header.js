import "./Header.css";
import Hamburger from "../Hamburger/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [mybutton, setMybutton] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }


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
    <>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <FontAwesomeIcon icon={faAngleUp} className="fa-icons" />
      </button>
      <div className="header">




        <div className="header-container">
          <img src={logo} className="logo" alt="" />
          <div className="header-list">
            <ul className={`${hamburgerOpen ? "open-list" : ""}`}>
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
              <div className="optional-burger" onClick={toggleHamburger} >
                <Hamburger faCode={hamburgerOpen} />
              </div>
            </ul>
            <div className={`${hamburgerOpen ? "hamburger invisible" : "hamburger"}`} onClick={toggleHamburger}>
              <Hamburger faCode={hamburgerOpen} />
            </div>
          </div>
          <div className="header-btn-container">
            <button>Sign In</button>
            <button>Register</button>
          </div>
        </div>
        <style jsx>{`

      .header-container ul {
margin-top:${hamburgerOpen ? "0" : ""};
      }

.header-container .header-list ul {
  display: ${hamburgerOpen ? "flex" : ""};
  flex-direction: ${hamburgerOpen ? "column" : ""};
  align-items: ${hamburgerOpen ? "center" : ""};
justify-content: ${hamburgerOpen ? "center" : ""};
position: ${hamburgerOpen ? "fixed" : ""};
top: ${hamburgerOpen ? "0" : "0"};
left: ${hamburgerOpen ? "0" : ""};
transition: ${hamburgerOpen ? "left 1s" : ""};
}
.header-list ul li {
  margin-bottom: ${hamburgerOpen ? "2rem" : "0"};
}
.logo{
  position: relative;
}
.header{
  z-index: 9999999;
}
.hamburger{
  position: fixed;
top: 2.3rem;
right: 1.4rem;

}

.optional-burger{
  display: ${hamburgerOpen ? "flex" : "none"};
  position: absolute;
  top:2.3rem;
  right: 1.4rem;
}
       `}</style>
      </div >
    </>
  );
}
