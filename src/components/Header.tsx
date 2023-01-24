import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link className="logo" to={"/"}>
          Player Go
        </Link>
      </h1>
      <h2>Choose Your First Player</h2>
    </header>
  );
};

export default Header;
