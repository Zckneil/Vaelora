import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMenu, LuX, LuLogOut } from 'react-icons/lu'
import Container from './Container'
import Button from './Button'
import { navigation } from '@/config/navigation'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router])

  const handleSignOut = () => {
    localStorage.removeItem('vaelora-auth')
    router.push('/auth')
  }

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Vaelora
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
              href="/pricing" 
              variant="secondary"
              className={styles.contactBtn}
            >
              Contact Sales
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