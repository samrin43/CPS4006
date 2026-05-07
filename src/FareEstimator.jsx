import {useState} from "react";

function FareEstimator() {
  const [distance, setDistance] = useState("");
  const [mode, setMode] = useState("bus");
  const [cost, setCost] = useState(null);

  const calculateFare = () => {
    let estimatedCost = 0;
    if (mode === "bus") {
      estimatedCost = distance * 0.5;
      } else if (mode === "rail") {
      estimatedCost = distance * 1;
    }else if (mode === "cycling") {
      estimatedCost = distance * 0.2;
    } else if (mode === "walking") {
      estimatedCost = 0;
    }
    setCost(estimatedCost.toFixed(2));
  };
  return (
    <div className="page">
      <h1>Fare Estimator</h1>
      <input type="number" placeholder="Enter distance in km" value={distance} onChange={(e) => setDistance(e.target.value)}/>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="bus">Bus</option>
        <option value="rail">Rail</option>
        <option value="cycling">Cycling</option>
        <option value="walking">Walking</option>
      </select>
       <button onClick={calculateFare}>Calculate</button>
       <h2>Estimated Cost: £{cost}</h2>
    </div>
    );
}

export default FareEstimator;