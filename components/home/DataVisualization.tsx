import React from 'react';
import styles from './DataVisualization.module.css';
import { motion } from 'framer-motion';
import { LuActivity, LuBrainCircuit, LuTrendingUp } from 'react-icons/lu'; // Changed to LuBrainCircuit

const DataVisualization: React.FC = () => {
  return (
    <section className={styles.dataVisSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className={styles.title}>See Your Progress, Predict Your Future</h2>
          <p className={styles.subtitle}>
            &ldquo;Vaelora doesn&apos;t just track—it predicts, adapts, and improves your respiratory health.&rdquo;
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Main FEV1 Improvement Graph Area */}
          <motion.div 
            className={`${styles.card} ${styles.fev1Card}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className={styles.cardTitle}><LuTrendingUp /> FEV1 Improvement Over Time</h3>
            <div className={styles.graphPlaceholder}>
              {/* Replace Placeholder with SVG Graph */}
              <motion.svg 
                className={styles.fev1Graph}
                viewBox="0 0 100 50" 
                preserveAspectRatio="none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Subtle background grid lines (optional) */}
                <path d="M0 10 H100 M0 20 H100 M0 30 H100 M0 40 H100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                
                {/* The FEV1 improvement path */}
                <motion.path 
                  d="M 0 45 Q 25 30 50 25 T 100 10" /* Example upward curve */
                  fill="none"
                  stroke="var(--color-accent-green)"
                  strokeWidth="2"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" }
                    }
                  }}
                />
                 {/* Optional: Add a subtle glow point at the end */}
                 <motion.circle 
                    cx="100" cy="10" r="3" fill="var(--color-accent-green)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 1],
                    }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                 />
              </motion.svg>
              <span className={styles.metricHighlight}>Avg. 18% Improvement in 30 Days*</span>
            </div>
          </motion.div>

          {/* Anomaly Detection & Metrics Area */}
          <motion.div 
            className={`${styles.card} ${styles.anomalyCard}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className={styles.cardTitle}><LuActivity /> Early Anomaly Detection</h3>
             <div className={styles.anomalyContent}>
               <div className={styles.anomalyVisualPlaceholder}>
                 {/* Replace Placeholder with Anomaly Dots */}
                 <div className={styles.anomalyDotsContainer}>
                   {[...Array(5)].map((_, i) => (
                     <motion.div
                       key={i}
                       className={styles.anomalyDot}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       custom={i} // Pass index for staggered delay
                       variants={{
                         hidden: { opacity: 0, scale: 0 },
                         visible: (i) => ({
                           opacity: [0, 1, 1, 0], // Fade in, stay, fade out
                           scale: [0, 1.2, 1, 0],
                           transition: {
                             delay: i * 0.4 + 0.5, // Staggered start + initial delay
                             duration: 1.5,
                             repeat: Infinity, 
                             repeatDelay: 3, // Time between loops
                             ease: "easeInOut"
                           }
                         })
                       }}
                     />
                   ))}
                 </div>
               </div>
               <ul className={styles.metricsList}>
                 <li><span className={styles.metricValue}>92%</span> Users detected anomalies before symptoms*</li>
                 <li><span className={styles.metricValue}>5x Faster</span> Detection than manual logging*</li>
                 <li><span className={styles.metricValue}>Up to 35%</span> Reduction in ER visits*</li>
               </ul>
             </div>
          </motion.div>

          {/* Real-time Rate & AI Insights */}
          <motion.div 
            className={`${styles.card} ${styles.realtimeCard}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
             <h3 className={styles.cardTitle}><LuBrainCircuit /> Real-Time Insights & AI</h3>
             <div className={styles.realtimeContent}>
               <div className={styles.ratePlaceholder}>
                  {/* Replace Placeholder with Live Rate Gauge */}
                  <motion.div 
                    className={styles.rateGauge}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className={styles.gaugePulse}></div>
                    <span className={styles.gaugeValue}>16</span> {/* Example value */}
                    <span className={styles.gaugeUnit}>breaths/min</span>
                  </motion.div>
               </div>
               <p className={styles.aiMetric}>Personalized AI models trained daily on <span className={styles.metricValue}>120k+</span> data points*</p>
             </div>
          </motion.div>
        </div>
        <p className={styles.disclaimer}>*Hypothetical data for illustrative purposes.</p>
      </div>
    </section>
  );
};

export default DataVisualization;
