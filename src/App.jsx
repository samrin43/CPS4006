import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import TravelModes from "./TravelModes";
import FareEstimator from "./FareEstimator";
import JourneyComparison from "./JourneyComparison";
import JourneyPlanner from "./JourneyPlanner";
import NotFound from "./NotFound";
import LiveUpdates from "./LiveUpdates";
import NearbyStops from "./NearbyStops";


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
