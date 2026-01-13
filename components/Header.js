import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>Senu Modz</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
