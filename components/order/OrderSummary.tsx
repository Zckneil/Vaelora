import React from 'react'
import Image from 'next/image'
import { LuShieldCheck } from 'react-icons/lu'
import styles from './OrderSummary.module.css'

interface OrderSummaryProps {
  plan: string
}

const plans = {
  essential: {
    name: 'Essential',
    price: 299,
    features: [
      'Vaelora Device',
      'Basic Health Tracking',
      '1-Year Warranty'
    ]
  },
  premium: {
    name: 'Premium',
    price: 399,
    features: [
      'Vaelora Device',
      'Advanced Analytics',
      '2-Year Warranty',
      'Premium Accessories'
    ]
  },
  professional: {
    name: 'Professional',
    price: 599,
    features: [
      'Vaelora Device',
      'Clinical Dashboard',
      '3-Year Warranty',
      'Training & Setup'
    ]
  }
}

export default function OrderSummary({ plan }: OrderSummaryProps) {
  const selectedPlan = plans[plan as keyof typeof plans] || plans.premium

  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>
      
      <div className={styles.product}>
        <div className={styles.image}>
          <Image
            src="/images/device-small.png"
            alt="Vaelora Device"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.details}>
          <h3>Vaelora {selectedPlan.name}</h3>
          <p>Respiratory Health Monitor</p>
        </div>
      </div>

      <div className={styles.features}>
        {selectedPlan.features.map((feature) => (
          <div key={feature} className={styles.feature}>
            <LuShieldCheck />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className={styles.pricing}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span>${selectedPlan.price}</span>
        </div>
        <div className={styles.row}>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className={styles.row}>
          <span>Tax</span>
          <span>${Math.round(selectedPlan.price * 0.08)}</span>
        </div>
        <div className={`${styles.row} ${styles.total}`}>
          <span>Total</span>
          <span>${selectedPlan.price + Math.round(selectedPlan.price * 0.08)}</span>
        </div>
      </div>

      <div className={styles.guarantee}>
        <LuShieldCheck />
        <div>
          <h4>Money-Back Guarantee</h4>
          <p>30-day satisfaction guarantee. No questions asked.</p>
        </div>
      </div>
    </div>
  )
} 