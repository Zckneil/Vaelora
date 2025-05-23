import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Breathe{' '}
              <span className={styles.highlight}>
                <span className={styles.text}>Better</span>
                <span className={styles.blur}>Better</span>
                <span className={styles.clear}>Better</span>
              </span>
              {' '}with Vaelora
            </h1>
            <p className={styles.description}>
              Advanced wearable technology that tracks your breathing patterns
              in real-time, providing clinical-grade insights for optimal
              respiratory health.
            </p>
            <div className={styles.cta}>
              <Button href="/pricing">View Pricing</Button>
              <Button href="#how-it-works" variant="secondary">
                Learn More
              </Button>
            </div>
          </motion.div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/hero/herobackground.png"
              alt="Vaelora Smart Respiratory Monitor"
              width={700}
              height={700}
              priority
              className={styles.deviceImage}
            />
          </div>
        </div>
      </Container>
    </section>
  )
} 