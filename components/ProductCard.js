export default function ProductCard({ product }) {
  const whatsappNumber = "94743903048"
  const whatsappMessage = encodeURIComponent("Hello! I want to order a product from Senu Modz.")

  return (
    <div className="product-card" data-aos="fade-up">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        className="contact-btn"
      >
        WhatsApp
      </a>
    </div>
  )
}
