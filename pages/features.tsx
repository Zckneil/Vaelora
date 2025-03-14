import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import Features from '@/components/home/Features'
import CTA from '@/components/home/CTA'
import styles from '@/styles/pages/Features.module.css'

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features | Vaelora</title>
        <meta name="description" content="Explore the advanced features of Vaelora's respiratory health monitoring system" />
      </Head>

      <section className={styles.hero}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Advanced Features for Better Breathing</h1>
            <p>
              Discover how Vaelora&apos;s cutting-edge technology helps you monitor and 
              improve your respiratory health with clinical-grade accuracy.
            </p>
          </motion.div>
        </Container>
      </section>

      <Features />
      <CTA />
    </>
  )
} 