export default function Testimonials() {
  const testimonials = [
    { name: "JohnD", text: "Fast delivery and high-quality products!" },
    { name: "AmyR", text: "Panels and bots never fail, excellent!" },
    { name: "LeoK", text: "Best automation tech store in town." },
  ]

  return (
    <section className="testimonials container">
      <h2>Testimonials</h2>
      <div className="terminal-testimonials">
        {testimonials.map((t, idx) => (
          <p key={idx} data-aos="fade-up">&gt; {t.name}: "{t.text}"</p>
        ))}
      </div>
    </section>
  )
}
