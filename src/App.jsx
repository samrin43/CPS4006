import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import TravelModes from "./TravelModes.jsx";
import FareEstimator from "./FareEstimator.jsx";
import JourneyComparison from "./JourneyComparison.jsx";
import JourneyPlanner from "./JourneyPlanner.jsx";
import NotFound from "./NotFound.jsx";
import LiveUpdates from "./LiveUpdates.jsx";
import NearbyStops from "./NearbyStops.jsx";
import BikeHire from "./BikeHire.jsx";

function App() {
  return <h1>It works</h1>
  (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-modes" element={<TravelModes />} />
        <Route path="/fare-estimator" element={<FareEstimator />} />
        <Route path="/comparison" element={<JourneyComparison />} />
        <Route path="/planner" element={<JourneyPlanner />} />
        <Route path="/updates" element={<LiveUpdates />} />
        <Route path="/nearby-stops" element={<NearbyStops />} />
        <Route path="/bike-hire" element={<BikeHire />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App
