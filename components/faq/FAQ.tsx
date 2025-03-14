import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuPlus, LuMinus } from 'react-icons/lu'
import Container from '@/components/shared/Container'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'How accurate is the Vaelora device?',
    answer: 'The Vaelora device provides clinical-grade accuracy with a margin of error less than 2%. Our technology has been validated through extensive testing and is pending FDA approval.'
  },
  {
    question: 'Can I use my insurance to purchase Vaelora?',
    answer: 'Yes, Vaelora is eligible for FSA/HSA reimbursement. We also work with select insurance providers. Contact our support team to verify coverage with your specific provider.'
  },
  {
    question: 'What is the battery life of the device?',
    answer: 'The Vaelora device features a long-lasting battery that provides up to 7 days of continuous monitoring on a single charge. Charging time is approximately 2 hours.'
  },
  {
    question: 'Is my health data secure?',
    answer: 'Yes, we take data security seriously. All health data is encrypted using military-grade encryption and stored in HIPAA-compliant servers. You have complete control over your data sharing preferences.'
  },
  {
    question: 'What mobile devices are compatible?',
    answer: 'The Vaelora app is compatible with iOS devices running iOS 13 or later, and Android devices running Android 8.0 or later. The app syncs seamlessly with the device via Bluetooth.'
  },
  {
    question: 'What is included in the warranty?',
    answer: 'Our warranty covers manufacturing defects and hardware malfunctions. Essential plan includes 1 year, Premium includes 2 years, and Professional includes 3 years of coverage with priority replacement service.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.questions}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <LuMinus /> : <LuPlus />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 