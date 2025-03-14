import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'
import styles from '@/styles/pages/Waitlist.module.css'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add waitlist submission logic here
    console.log('Waitlist submission:', email)
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Join the Waitlist | Vaelora</title>
        <meta name="description" content="Be among the first to experience Vaelora's revolutionary respiratory health monitoring" />
      </Head>

      <section className={styles.waitlist}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Join the Waitlist</h1>
            <p>
              Be among the first to experience the future of respiratory health 
              monitoring. Sign up now to secure your spot and receive exclusive 
              early access benefits.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="primary">
                    Join Now
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div 
                className={styles.success}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3>Thank you for joining!</h3>
                <p>
                  We&apos;ll keep you updated on our launch and send you exclusive 
                  early access information.
                </p>
              </motion.div>
            )}

            <div className={styles.benefits}>
              <h2>Early Access Benefits</h2>
              <ul>
                <li>Priority access to Vaelora device</li>
                <li>20% discount on your first purchase</li>
                <li>Exclusive features and content</li>
                <li>Direct access to our product team</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
} 