function RentCard({ property }) {
  return (
    <div className="rent-card">
      <img src={property.image} alt={property.title} />

      <div className="rent-info">
        <h3>{property.title}</h3>
        <p>📍 {property.location}</p>
        <span>₹ {property.price.toLocaleString()} / month</span>

        <button className="rent-btn">View Details</button>
      </div>
    </div>
  );
}

export default RentCard;