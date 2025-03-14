import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  href, 
  onClick, 
  variant = 'primary', 
  children,
  className = '',
  type = 'button'
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClass} type={type}>
      {children}
    </button>
  )
} 