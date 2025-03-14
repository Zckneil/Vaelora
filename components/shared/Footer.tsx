import React from 'react'
import Link from 'next/link'
import Container from './Container'
import styles from './Footer.module.css'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Benefits', href: '/benefits' },
      { name: 'App', href: '/app' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Research', href: '/research' },
      { name: 'News', href: '/news' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Support', href: '/support' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ]
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.company}>
            <Link href="/" className={styles.logo}>
              Vaelora
            </Link>
            <p className={styles.description}>
              Revolutionizing respiratory health monitoring with cutting-edge 
              wearable technology and actionable insights.
            </p>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className={styles.section}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>© {new Date().getFullYear()} Vaelora. All rights reserved.</span>
            <nav>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
} 