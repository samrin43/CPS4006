import { useEffect, useState } from "react";
import { getBikePoints } from "./api";

function BikeHire() {
    const [bikePoints, setBikePoints] = useState([]);
    useEffect(() => {
        const fetchBikeData = async () => {
            try {
                const data = await getBikePoints();
                setBikePoints(data.slice(0, 10));
            } catch (error) {
                console.log(error);
            }
        };        
        fetchBikeData();

    }, []);
    return (
        <div className="page">
            <h1>Bike Hire Availability</h1>
            {bikePoints.map((point) => (
                <div className="card" key={point.id}>
                    <h2>{point.commonName}</h2>
                    <p>Bike Available:{" "}{point.additionalProperties.find(
                        (p) => p.key === "NbBikes"
                    )?.value}</p>
                </div>
            ))}
        </div>
    );
}
export default BikeHire;