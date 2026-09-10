import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="navbar-logo">
        SELENO<span>MATCH</span>
      </a>

      <ul className="navbar-links">

        <li>
          <a href="/#home">Home</a>
        </li>

        

        <li>
          <a href="/#pipeline">Pipeline</a>
        </li>

        <li>
          <a href="/#sensors">Sensors</a>
        </li>

        <li>
          <a href="/#metrics">Results</a>
        </li>

        <li>
          <a href="/#contact">Contact</a>
        </li>

      </ul>

      <Link
        to="/analysis"
        className="navbar-analysis-btn"
      >
        Launch Analysis
      </Link>

    </nav>
  );
}

export default Navbar;
