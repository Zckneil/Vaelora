import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuCheck } from 'react-icons/lu'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'
import styles from './PricingTiers.module.css'

const plans = [
  {
    name: 'Essential',
    price: {
      monthly: 20,
      yearly: 192 // $20 * 12 months - 20% = $192
    },
    description: 'Perfect for individual health monitoring',
    features: [
      'Vaelora Device',
      'Basic Health Tracking',
      'Mobile App Access',
      '24/7 Support',
      '1-Year Warranty'
    ],
    cta: 'Order Now',
    popular: false
  },
  {
    name: 'Premium',
    price: {
      monthly: 30,
      yearly: 288 // $30 * 12 months - 20% = $288
    },
    description: 'Advanced features for optimal health management',
    features: [
      'Everything in Essential',
      'Advanced Analytics',
      'Personalized Insights',
      'Priority Support',
      '2-Year Warranty',
      'Free Accessories'
    ],
    cta: 'Order Now',
    popular: true
  },
  {
    name: 'Professional',
    price: {
      monthly: 50,
      yearly: 480 // $50 * 12 months - 20% = $480
    },
    description: 'Complete solution for healthcare providers',
    features: [
      'Everything in Premium',
      'Multi-Patient Dashboard',
      'Clinical Integration',
      'Custom Reports',
      'Extended 3-Year Warranty',
      'Training & Setup'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function PricingTiers() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className={styles.pricing}>
      <Container>
        <div className={styles.toggle}>
          <button 
            className={!isYearly ? styles.active : ''}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={isYearly ? styles.active : ''}
            onClick={() => setIsYearly(true)}
          >
            Yearly
            <span className={styles.savings}>Save 20%</span>
          </button>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <span className={styles.badge}>Most Popular</span>
              )}
              <h3>{plan.name}</h3>
              <p className={styles.description}>{plan.description}</p>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>
                  {isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={styles.period}>
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <LuCheck data-icon="check" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                href={`/order?plan=${plan.name.toLowerCase()}`}
                variant={plan.popular ? 'primary' : 'secondary'}
                className={styles.cta}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 