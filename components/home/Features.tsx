import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'
import styles from './Features.module.css'

const features = [
  {
    image: '/images/features/Monitoring.png',
    title: 'Real-Time Monitoring',
    description: 'Track your respiratory health with clinical-grade accuracy in real-time.',
    note: 'FDA-pending approval'
  },
  {
    image: '/images/features/Detection.png',
    title: 'Early Detection',
    description: 'Advanced AI algorithms detect patterns and predict potential issues.',
    note: 'Powered by machine learning'
  },
  {
    image: '/images/features/Insights.png',
    title: 'Personalized Insights',
    description: 'Get personalized recommendations based on your breathing patterns.',
    note: 'Continuous learning'
  }
]

export default function Features() {
  return (
    <section className={styles.features}>
      <Container>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Features</span>
          <h2 className={styles.title}>Advanced Technology for Better Breathing</h2>
          <p className={styles.description}>
            Discover how Vaelora&apos;s innovative features help you maintain optimal respiratory health.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={120}
                  height={120}
                  className={styles.featureImage}
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className={styles.note}>{feature.note}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 