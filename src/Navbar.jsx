import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h2>Urban Mobility Hub</h2>
      <div>
          <Link to="/">Home</Link>
          <Link to="/travel-modes">Travel Modes</Link>
          <Link to="/fare-estimator">Fare Estimator</Link>
          <Link to="/comparison">Journey Comparison</Link>
          <Link to="/planner">Journey Planner</Link>
          <Link to="/updates">Live Updates</Link>
          <Link to="/nearby-stops">Nearby Stops</Link>
          <Link to="/bike-hire">Bike Hire</Link>
      </div>
    </nav>
  );
}

export default Navbar;