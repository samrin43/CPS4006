import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import TravelModes from "./TravelModes.jsx";
import FareEstimator from "./FareEstimator.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return <h1>It works</h1>
  (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-modes" element={<TravelModes />} />
        <Route path="/fare-estimator" element={<FareEstimator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App
