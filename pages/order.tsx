import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import OrderForm from '@/components/order/OrderForm'
import OrderSummary from '@/components/order/OrderSummary'
import styles from '@/styles/pages/Order.module.css'

export default function Order() {
  const router = useRouter()
  const { plan } = router.query

  return (
    <>
      <Head>
        <title>Complete Your Order | Vaelora</title>
        <meta name="description" content="Complete your Vaelora device order" />
      </Head>

      <section className={styles.order}>
        <Container>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Complete Your Order</h1>
            <p>You&apos;re just a few steps away from better breathing</p>
          </motion.div>

          <div className={styles.grid}>
            <OrderForm selectedPlan={plan as string} />
            <OrderSummary plan={plan as string} />
          </div>
        </Container>
      </section>
    </>
  )
} 