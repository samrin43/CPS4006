import { useState } from "react";

function JourneyComparison() {
  const [mode1, setMode1] = useState("bus");
  const [mode2, setMode2] = useState("rail");
    const travelData = {
        bus: { cost:"Low", time: "Medium", convenience: "High" },
        rail: { cost: "High", time: "Fast", convenience: "High" },
        cycling: { cost: "Very Low", time: "medium", convenience: "Medium" },
        walking: {cost: "Free", time: "Slow", convenience: "Low" },
    };
    return (
        <div className="page">
            <h1>Journey Comparison Tool</h1>
            <div className="comparison-container">
                <div className="card">
                    <h2>Travel Mode 1</h2>
                    <select value={mode1} onChange={(e) => setMode1(e.target.value)}>
                        <option value="bus">Bus</option>
                        <option value="rail">Rail</option>
                        <option value="cycling">Cycling</option>
                        <option value="walking">Walking</option>
                    </select>
                    <p><strong>Cost:</strong> {travelData[mode1].cost}</p>
                    <p><strong>Time:</strong> {travelData[mode1].time}</p>
                    <p><strong>Convenience:</strong> {travelData[mode1].convenience}</p>
                </div>
                <div className="card">
                    <h2>Travel Mode 2</h2>
                    <select value={mode2} onChange={(e) => setMode2(e.target.value)}>
                        <option value="bus">Bus</option>
                        <option value="rail">Rail</option>
                        <option value="cycling">Cycling</option>
                        <option value="walking">Walking</option>
                    </select>
                    <p><strong>Cost:</strong> {travelData[mode2].cost}</p>
                    <p><strong>Time:</strong> {travelData[mode2].time}</p>
                    <p><strong>Convenience:</strong> {travelData[mode2].convenience}</p>
                </div>
            </div>
        </div>
    );
}
export default JourneyComparison;