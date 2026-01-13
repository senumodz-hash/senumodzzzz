import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: "Panel A", price: "LKR 1000", image: "/images/product1.jpg" },
  { id: 2, name: "Panel B", price: "LKR 1500", image: "/images/product2.jpg" },
  { id: 3, name: "Bot Script", price: "LKR 2000", image: "/images/product3.jpg" },
]

export default function Products() {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="products">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
