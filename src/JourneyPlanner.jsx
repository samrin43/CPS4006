import { useEffect, useState } from "react";

function JourneyPlanner() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState("");
  const journeys = [
    {
        start: "Campus",
        destination: "City Center",
        route: "Take Bus 12 - 20 mins",
    },
    {
        start: "Campus",
        destination: "Train station",
        route: "Walk then Rail - 15 mins",
    },
    {
        start: "Library",
        destination: "Shopping Mall",
        route: "Cycle Route A - 10 mins",
    },

  ];
  useEffect(() => {
    const savedStart = localStorage.getItem("start");
    const savedDestination = localStorage.getItem("destination");
    if (savedStart) setStart(savedStart);
    if (savedDestination) setDestination(savedDestination);
  }, []);

  const findJourney = (e) => {
    localStorage.setItem("start", start);
    localStorage.setItem("destination", destination);
    const match = journeys.find(
        (journey) =>
        journey.start.toLowerCase() === start.toLowerCase() &&
        journey.destination.toLowerCase() === destination.toLowerCase()
    );
    if (match) {
        setResults(match.route);
    } else {
        setResults("No route found.");
    }
  };
  return (
    <div className="page">
      <h1>Journey Planner</h1>
      <input
        type="text"
        placeholder="Starting Location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={findJourney}>Find Journey</button>
        <h2>{results}</h2>
    </div>
  );
}
export default JourneyPlanner;