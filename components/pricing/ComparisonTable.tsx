import React from 'react'
import { motion } from 'framer-motion'
import { LuCheck, LuX } from 'react-icons/lu'
import Container from '@/components/shared/Container'
import styles from './ComparisonTable.module.css'

const features = [
  {
    category: 'Hardware',
    items: [
      {
        name: 'Vaelora Device',
        essential: true,
        premium: true,
        professional: true,
        description: 'Clinical-grade respiratory monitoring device'
      },
      {
        name: 'Premium Carrying Case',
        essential: false,
        premium: true,
        professional: true,
        description: 'Protective case with charging capability'
      },
      {
        name: 'Additional Sensors',
        essential: false,
        premium: false,
        professional: true,
        description: 'Extra sensors for comprehensive monitoring'
      }
    ]
  },
  {
    category: 'Software',
    items: [
      {
        name: 'Mobile App',
        essential: true,
        premium: true,
        professional: true,
        description: 'iOS and Android compatibility'
      },
      {
        name: 'Advanced Analytics',
        essential: false,
        premium: true,
        professional: true,
        description: 'Detailed health insights and trends'
      },
      {
        name: 'Clinical Dashboard',
        essential: false,
        premium: false,
        professional: true,
        description: 'Multi-patient monitoring interface'
      }
    ]
  },
  {
    category: 'Support',
    items: [
      {
        name: 'Email Support',
        essential: true,
        premium: true,
        professional: true,
        description: '24/7 email assistance'
      },
      {
        name: 'Priority Phone Support',
        essential: false,
        premium: true,
        professional: true,
        description: 'Direct line to technical experts'
      },
      {
        name: 'Dedicated Account Manager',
        essential: false,
        premium: false,
        professional: true,
        description: 'Personal support representative'
      }
    ]
  }
]

export default function ComparisonTable() {
  return (
    <section className={styles.comparison}>
      <Container>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Compare Plans</h2>
          <p>Detailed feature comparison across all Vaelora plans</p>
        </motion.div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Features</th>
                <th>Essential</th>
                <th>Premium</th>
                <th>Professional</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr className={styles.category}>
                    <td colSpan={4}>{category.category}</td>
                  </tr>
                  {category.items.map((item) => (
                    <motion.tr
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <td>
                        <div className={styles.feature}>
                          <span>{item.name}</span>
                          <span className={styles.description}>
                            {item.description}
                          </span>
                        </div>
                      </td>
                      <td>{item.essential ? <LuCheck data-icon="check" /> : <LuX data-icon="x" />}</td>
                      <td>{item.premium ? <LuCheck data-icon="check" /> : <LuX data-icon="x" />}</td>
                      <td>{item.professional ? <LuCheck data-icon="check" /> : <LuX data-icon="x" />}</td>
                    </motion.tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
} 