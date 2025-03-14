import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuCreditCard, LuShield } from 'react-icons/lu'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  selectedPlan: string
}

export default function OrderForm({ selectedPlan }: OrderFormProps) {
  const [step, setStep] = useState(1)

  return (
    <div className={styles.form}>
      <div className={styles.steps}>
        <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>
          <span className={styles.number}>1</span>
          <span className={styles.label}>Contact Information</span>
        </div>
        <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>
          <span className={styles.number}>2</span>
          <span className={styles.label}>Shipping</span>
        </div>
        <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>
          <span className={styles.number}>3</span>
          <span className={styles.label}>Payment</span>
        </div>
      </div>

      <div className={styles.content}>
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Contact Information</h2>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" />
              </div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="(555) 555-5555" />
              </div>
            </div>
            <button 
              className={styles.next}
              onClick={() => setStep(2)}
            >
              Continue to Shipping
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Shipping Address</h2>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="address">Street Address</label>
                <input type="text" id="address" />
              </div>
              <div className={styles.field}>
                <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
                <input type="text" id="apartment" />
              </div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="zip">ZIP Code</label>
                  <input type="text" id="zip" />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button 
                className={styles.back}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button 
                className={styles.next}
                onClick={() => setStep(3)}
              >
                Continue to Payment
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Payment Information</h2>
            <div className={styles.secure}>
              <LuShield />
              <span>Your payment information is secure and encrypted</span>
            </div>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="card">Card Number</label>
                <div className={styles.cardField}>
                  <LuCreditCard />
                  <input type="text" id="card" placeholder="1234 5678 9012 3456" />
                </div>
              </div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="expiry">Expiry Date</label>
                  <input type="text" id="expiry" placeholder="MM/YY" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cvc">CVC</label>
                  <input type="text" id="cvc" placeholder="123" />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button 
                className={styles.back}
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button 
                className={styles.submit}
                onClick={() => console.log('Order submitted')}
              >
                Complete Order
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 