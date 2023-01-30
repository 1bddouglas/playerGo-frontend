import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import "./Header.css";
import classNames from "classnames";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const transitionClasses = classNames({
    "nav-list": true,
    visible: showNav,
    hidden: !showNav,
  });

  return (
    <header className="Header">
      <div className="header-text">
        <h1>
          <Link className="link" to={"/"}>
            Player Go
          </Link>
        </h1>
        <h2>Choose Your First Player</h2>
      </div>
      <img
        src={hamburger}
        alt="nav-list-icon"
        onClick={() => setShowNav(!showNav)}
      />

      <div className={transitionClasses}>
        <ul>
          <li>
            <Link
              className="link"
              to={"/home"}
              onClick={() => setShowNav(!showNav)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="link"
              to={"/user-rules"}
              onClick={() => setShowNav(!showNav)}
            >
              User Rules
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={"/about"}
              onClick={() => setShowNav(!showNav)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
