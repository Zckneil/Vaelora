import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import FAQ from '@/components/faq/FAQ'
import styles from '@/styles/pages/FAQ.module.css'

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Vaelora</title>
        <meta name="description" content="Frequently asked questions about Vaelora's respiratory health monitoring device" />
      </Head>

      <section className={styles.hero}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about Vaelora</p>
          </motion.div>
        </Container>
      </section>

      <FAQ />
    </>
  )
} 