const features = [
  { id: 1, title: "Fast Delivery", icon: "/images/icons/delivery.png" },
  { id: 2, title: "Secure Payments", icon: "/images/icons/secure.png" },
  { id: 3, title: "Quality Products", icon: "/images/icons/quality.png" },
];

export default function Features() {
  return (
    <section className="features container">
      <h2>Why Choose Us</h2>
      <div className="feature-cards">
        {features.map(f => (
          <div key={f.id} className="feature-card">
            <img src={f.icon} alt={f.title} />
            <h3>{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
