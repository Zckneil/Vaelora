import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import PricingTiers from '@/components/pricing/PricingTiers'
import ComparisonTable from '@/components/pricing/ComparisonTable'
import styles from '@/styles/pages/Pricing.module.css'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | Vaelora</title>
        <meta name="description" content="Choose the perfect Vaelora plan for your respiratory health needs" />
      </Head>

      <section className={styles.hero}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.subtitle}>Pricing</span>
            <h1>Choose Your Path to Better Breathing</h1>
            <p>
              Select the plan that best fits your needs, with flexible options for
              individuals and healthcare providers.
            </p>
          </motion.div>
        </Container>
      </section>

      <PricingTiers />
      <ComparisonTable />
    </>
  )
} 