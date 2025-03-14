import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'
import styles from '@/styles/pages/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact Us | Vaelora</title>
        <meta name="description" content="Get in touch with the Vaelora team" />
      </Head>

      <section className={styles.contact}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Get in Touch</h1>
            <p>
              Have questions about Vaelora? We're here to help. Fill out the form 
              below and we'll get back to you as soon as possible.
            </p>

            <div className={styles.grid}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>

              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <h3>Email</h3>
                  <p>contact@vaelora.com</p>
                </div>
                <div className={styles.infoItem}>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className={styles.infoItem}>
                  <h3>Address</h3>
                  <p>
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
} 