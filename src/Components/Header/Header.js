import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import heroBg from "../../Assets/Images/hero-bg.png";

export default function Header() {
  return (
    <div className="header">
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
    </div>
  );
}
