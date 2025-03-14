import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : ''
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Vaelora
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/features" className={isActive('/features')}>
            Features
          </Link>
          <Link href="/about" className={isActive('/about')}>
            About
          </Link>
          <Link href="/contact" className={isActive('/contact')}>
            Contact
          </Link>
          <Link href="/waitlist" className={`${styles.cta} ${isActive('/waitlist')}`}>
            Join Waitlist
          </Link>
        </div>
      </nav>
    </header>
  )
} 