import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import styles from '@/styles/pages/About.module.css'

const team = [
  {
    name: 'Dr. Emily Chen',
    role: 'CEO & Co-founder',
    image: '/images/team/emily.jpg',
    bio: 'Former pulmonologist with 15 years of clinical experience.'
  },
  {
    name: 'James Wilson',
    role: 'CTO & Co-founder',
    image: '/images/team/james.jpg',
    bio: 'AI and medical device expert with multiple patents.'
  },
  {
    name: 'Sarah Martinez',
    role: 'Head of Product',
    image: '/images/team/sarah.jpg',
    bio: 'Experienced in healthcare product development.'
  }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Vaelora</title>
        <meta name="description" content="Learn about Vaelora's mission to revolutionize respiratory health monitoring" />
      </Head>

      <section className={styles.hero}>
        <Container>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Mission</h1>
            <p>
              At Vaelora, we're dedicated to revolutionizing respiratory health monitoring
              through innovative technology and data-driven insights.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className={styles.story}>
        <Container>
          <div className={styles.grid}>
            <motion.div 
              className={styles.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2022, Vaelora emerged from a simple yet powerful idea: 
                respiratory health monitoring should be accessible, accurate, and 
                actionable for everyone.
              </p>
              <p>
                Our team of medical professionals, engineers, and designers work 
                tirelessly to develop solutions that make a real difference in 
                people's lives.
              </p>
            </motion.div>
            <motion.div 
              className={styles.image}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/about/story.jpg"
                alt="Vaelora team working"
                width={600}
                height={400}
                objectFit="cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className={styles.team}>
        <Container>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className={styles.member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.memberImage}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </div>
                <h3>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
} 