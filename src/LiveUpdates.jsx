import { useEffect, useState } from "react"
import { getTubeStatus } from "./api"

function LiveUpdates() {
    const [updates, setUpdates] = useState([]);
    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const data = await getTubeStatus();
                setUpdates(data);
            } catch (error) {
                console.log( error);
            }
        };
        fetchUpdates();
    }, []);
    return (
        <div className="page">
            <h1>Live Service Updates</h1>
            {updates.map((line) => (
                <div className="card" key={line.id}>
                    <h2>{line.name}</h2>
                    <p>Status:{line.lineStatuses[0].statusSeverityDescription}</p>
                </div>
            ))}
        </div>
    );
}
export default LiveUpdates;