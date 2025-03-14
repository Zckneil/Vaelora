import React from 'react'
import Image from 'next/image'
import Container from '@/components/shared/Container'
import styles from './Benefits.module.css'

interface Benefit {
  title: string
  description: string
  image: string
}

const benefits: Benefit[] = [
  {
    title: 'Real-Time Monitoring',
    description: 'Track your respiratory health metrics in real-time with clinical-grade accuracy.',
    image: '/images/monitoring.png'
  },
  {
    title: 'Early Detection',
    description: 'Identify potential respiratory issues before they become serious problems.',
    image: '/images/detection.png'
  },
  {
    title: 'Personalized Insights',
    description: 'Get AI-powered recommendations tailored to your unique respiratory patterns.',
    image: '/images/insights.png'
  }
]

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <Container>
        <div className={styles.header}>
          <span className={styles.subtitle}>WHY VAELORA</span>
          <h2>Transform Your Respiratory Health</h2>
          <p>Experience the future of respiratory monitoring with our advanced wearable technology.</p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefit}>
              <div className={styles.imageWrapper}>
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 