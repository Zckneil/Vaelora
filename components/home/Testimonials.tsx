import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Asthma Patient',
    image: '/images/testimonials/sarah.jpg',
    quote: "Vaelora has transformed how I manage my asthma. The real-time monitoring gives me peace of mind I never had before."
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Pulmonologist',
    image: '/images/testimonials/michael.jpg',
    quote: "As a medical professional, I'm impressed by Vaelora's accuracy. It's a game-changer for respiratory health monitoring."
  },
  {
    name: 'James Wilson',
    role: 'Athlete',
    image: '/images/testimonials/james.jpg',
    quote: "Training with Vaelora has helped me optimize my breathing patterns and improve my performance significantly."
  }
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2>What Our Users Say</h2>
          <p className={styles.description}>
            Hear from people who have transformed their respiratory health with Vaelora.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={styles.testimonial}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.content}>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.info}>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 