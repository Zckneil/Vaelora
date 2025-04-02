import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMenu, LuX, LuLogOut } from 'react-icons/lu'
import Container from './Container'
import Button from './Button'
import { navigation } from '@/config/navigation'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem('vaelora-auth')
    router.push('/auth')
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image 
                src="/images/logo.svg" 
                alt="Vaelora" 
                width={32} 
                height={32} 
              />
              <span>Vaelora</span>
            </div>
          </Link>

          <ul className={styles.desktop}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={router.pathname === item.href ? styles.active : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button 
              href="/order" 
              className={styles.orderBtn}
            >
              Order Now
            </Button>
            <Button
              onClick={handleSignOut}
              variant="secondary"
              className={styles.signOutBtn}
            >
              <LuLogOut className={styles.signOutIcon} /> Sign Out
            </Button>
            <button
              className={styles.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobile}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul>
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={router.pathname === item.href ? styles.active : ''}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className={styles.mobileOrderBtnContainer}>
                  <Button href="/order" className={styles.mobileOrderBtn}>
                    Order Now
                  </Button>
                </li>
                <li>
                  <button onClick={handleSignOut} className={styles.mobileSignOut}>
                    <LuLogOut /> Sign Out
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
} 