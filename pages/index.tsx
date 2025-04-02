import React from 'react'
import Head from 'next/head'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaelora | Breathe Better</title>
        <meta name="description" content="Revolutionary respiratory health wearable for real-time lung monitoring" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      {/* Temporarily hidden
      <Benefits />
      <Testimonials />
      */}
    </>
  )
} 