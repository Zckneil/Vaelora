import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import Container from '@/components/shared/Container'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Container>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Transform Your Respiratory Health?</h2>
          <p>
            Join thousands of users who have already discovered the power of 
            real-time respiratory monitoring with Vaelora.
          </p>
          <div className={styles.buttons}>
            <Button href="/waitlist" variant="primary">
              Join the Waitlist
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Sales
            </Button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>10k+</span>
              <span className={styles.label}>Active Users</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>98%</span>
              <span className={styles.label}>Satisfaction Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>24/7</span>
              <span className={styles.label}>Support</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 