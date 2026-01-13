import { motion } from 'framer-motion'

const features = [
  "Fast Delivery <24h",
  "Secure Payments",
  "High-Quality Panels",
  "Customer Support 24/7"
]

export default function Features() {
  return (
    <section className="features container">
      <h2>Why Choose Senu Modz</h2>
      <div className="terminal-features">
        {features.map((f, idx) => (
          <motion.p key={idx} data-aos="fade-up" whileHover={{ scale: 1.02 }}>
            &gt; {f}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
