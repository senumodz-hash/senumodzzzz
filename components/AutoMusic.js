import { useEffect } from 'react'

export default function AutoMusic() {
  useEffect(() => {
    const audio = new Audio("/music/tech-vibes.mp3")
    audio.loop = true
    audio.volume = 0.3 // optional, reduce volume for subtlety

    // Start music after first user interaction
    const playMusic = () => {
      audio.play().catch(() => console.log("Autoplay blocked, waiting for interaction"))
      window.removeEventListener("click", playMusic)
    }

    window.addEventListener("click", playMusic)

    return () => {
      audio.pause()
      window.removeEventListener("click", playMusic)
    }
  }, [])

  return null
}
