export default function Home() {
  return (
    <div className="container">
      <h2>Welcome to Senu Modz</h2>
      <p>Your one-stop shop for tech products. Explore our range of high-quality products and get in touch via WhatsApp or email!</p>
      <a
        href="https://wa.me/94743903048?text=Hello! I want to order a product from Senu Modz."
        target="_blank"
        className="contact-btn"
      >
        Contact on WhatsApp
      </a>
      <br />
      <a href="mailto:senumodz@gmail.com" className="contact-btn">Email Us</a>
    </div>
  )
}
