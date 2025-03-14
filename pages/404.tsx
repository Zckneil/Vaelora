import React from 'react'
import Link from 'next/link'
import Container from '@/components/shared/Container'
import Button from '@/components/shared/Button'
import styles from '@/styles/404.module.css'

export default function NotFound() {
  return (
    <Container>
      <div className={styles.notFound}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Button href="/" variant="primary">
          Return Home
        </Button>
      </div>
    </Container>
  )
} 