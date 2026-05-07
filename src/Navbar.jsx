import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h2>Urban Mobility Hub</h2>
      <div>
          <Link to="/">Home</Link>
          <Link to="/travel-modes">Travel Modes</Link>
          <Link to="/fare-estimator">Fare Estimator</Link>
      </div>
    </nav>
  );
}

export default Navbar;