import React, { useState } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/shared/Container'
import styles from './Features.module.css'

// Define the feature type if not already defined elsewhere
interface FeatureItem {
  image: string;
  title: string;
  description: string;
  note: string;
}

const featuresData: FeatureItem[] = [
  {
    image: '/images/features/Monitoring.png',
    title: 'Real-Time Monitoring',
    description: 'Track your respiratory health with clinical-grade accuracy in real-time.',
    note: 'FDA-pending approval'
  },
  {
    image: '/images/features/Detection.png',
    title: 'Early Detection',
    description: 'Advanced AI algorithms detect patterns and predict potential issues.',
    note: 'Powered by machine learning'
  },
  {
    image: '/images/features/Insights.png',
    title: 'Personalized Insights',
    description: 'Get personalized recommendations based on your breathing patterns.',
    note: 'Continuous learning'
  }
]

// Define animation variants for each border separately
const commonTransition = { duration: 0.3, ease: 'easeInOut' };
const exitTransition = { duration: 0.2, ease: 'easeOut' };

const borderTopVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: commonTransition },
  exit: { opacity: 0, transition: exitTransition }
};

const borderRightVariants: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: commonTransition },
  exit: { opacity: 0, transition: exitTransition }
};

const borderBottomVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: commonTransition },
  exit: { opacity: 0, transition: exitTransition }
};

const borderLeftVariants: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: commonTransition },
  exit: { opacity: 0, transition: exitTransition }
};

// New component for individual feature card logic
const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => {
  // Use separate controls for each border to manage the sequence
  const topControls = useAnimation();
  const rightControls = useAnimation();
  const bottomControls = useAnimation();
  const leftControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleViewportEnter = async () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // Define the sequence using individual controls
    await topControls.start("visible");
    await rightControls.start("visible");
    await bottomControls.start("visible");
    await leftControls.start("visible");
    
    // Fade out after a brief moment
    await new Promise(resolve => setTimeout(resolve, 200)); // Hold duration
    topControls.start("exit");
    rightControls.start("exit");
    bottomControls.start("exit");
    leftControls.start("exit");
  };

  return (
    // Container for the card and its borders
    <motion.div
      className={styles.feature}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={handleViewportEnter} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 }}}
    >
      {/* Laser Border Elements with individual controls */}
      <motion.div 
        className={`${styles.laserBorder} ${styles.laserBorderTop}`}
        variants={borderTopVariants}
        initial="hidden"
        animate={topControls} // Use topControls
      />
      <motion.div 
        className={`${styles.laserBorder} ${styles.laserBorderRight}`}
        variants={borderRightVariants}
        initial="hidden"
        animate={rightControls} // Use rightControls
      />
      <motion.div 
        className={`${styles.laserBorder} ${styles.laserBorderBottom}`}
        variants={borderBottomVariants}
        initial="hidden"
        animate={bottomControls} // Use bottomControls
        style={{ transformOrigin: 'right' }} // Override CSS for right-to-left
      />
      <motion.div 
        className={`${styles.laserBorder} ${styles.laserBorderLeft}`}
        variants={borderLeftVariants}
        initial="hidden"
        animate={leftControls} // Use leftControls
        style={{ transformOrigin: 'bottom' }} // Override CSS for bottom-to-top
      />

      {/* Original Card Content */}
      <div className={styles.imageContainer}>
        <Image
          src={feature.image}
          alt={feature.title}
          width={120}
          height={120}
          className={styles.featureImage}
        />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <span className={styles.note}>{feature.note}</span>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className={styles.features}>
      <Container>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Features</span>
          <h2 className={styles.title}>Advanced Technology for Better Breathing</h2>
          <p className={styles.description}>
            Discover how Vaelora&apos;s innovative features help you maintain optimal respiratory health.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
} 