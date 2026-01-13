import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Welcome to Senu Modz - Tech Panels & Bots"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <h2>{text}</h2>
      <p>Your tech store for automation panels and bots</p>
      <a
        href="https://wa.me/94743903048?text=Hello! I want to order a product from Senu Modz."
        target="_blank"
        className="contact-btn"
      >
        Contact on WhatsApp
      </a>
      <a href="mailto:senumodz@gmail.com" className="contact-btn">Email Us</a>
    </section>
  )
}
