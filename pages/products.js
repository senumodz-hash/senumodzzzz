const products = [
  { id: 1, name: "Product 1", price: "LKR 1000", image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: "LKR 1500", image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: "LKR 2000", image: "/images/product3.jpg" },
];

export default function Products() {
  const whatsappNumber = "94743903048";
  const whatsappMessage = encodeURIComponent("Hello! I want to order a product from Senu Modz.");

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              className="contact-btn"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
