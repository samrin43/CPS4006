import { useState } from "react";
import { getJourney } from "./api";

function JourneyPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeys, setJourneys] = useState([]);
  const planjourneys = async () => {
    try {
      const data = await getJourney(from, to);
      setJourneys(data.journeys);
    } catch (error) {
      console.error( error);
    }
  };
  return (
    <div className="page">
      <h1>Journey Planner</h1>
      <input
        type="text"
        placeholder="Starting Location"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <button onClick={planjourneys}>Plan Journey</button>
        {journeys.map((journey, index) => (
          <div className="card">
            <h2>Duration: {journey.duration} mins</h2>
            <p> Arrival Time:{""} {journey.arrivalDateTime}</p>
          </div>
        ))}
    </div>
  );
}
export default JourneyPlanner;