function TravelModes() {
  return (
    <div className="page">
      <h1>Travel Modes</h1>
      <div className="card">
        <h2>Bus</h2>
        <p>Affordable and widely available.</p>
        <p><strong>Benefits:</strong> Cheap and accessible.</p>
        <p><strong>Limitations:</strong> Traffic delays.</p>
      </div>
      <div className="card">
        <h2>Rail</h2>
        <p>Fast transport for long distances.</p>
        <p><strong>Benefits:</strong> Reliable and quick.</p>
        <p><strong>Limitations:</strong> Higher ticket prices.</p>
      </div>
      <div className="card">
        <h2>Cycling</h2>
        <p>Eco-friendly and healthy.</p>
        <p><strong>Benefits:</strong> No fuel costs.</p>
        <p><strong>Limitations:</strong> Weather dependent.</p>
      </div>
      <div className="card">
        <h2>Walking</h2>
        <p>Ideal for short journeys.</p>
        <p><strong>Benefits:</strong> Free and healthy.</p>
        <p><strong>Limitations:</strong> Slower for long distances.</p>
      </div>
    </div>
  );
}
export default TravelModes;