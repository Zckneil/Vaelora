import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Logo from '@/components/shared/Logo';
import styles from '@/styles/pages/auth.module.css';

const Auth = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check authentication status only once on mount
  useEffect(() => {
    const auth = localStorage.getItem('vaelora-auth');
    if (auth === 'true') {
      router.replace('/');
    }
  }, []); // Empty dependency array to run only once

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading) return;

    setIsLoading(true);
    const correctPassword = process.env.NEXT_PUBLIC_AUTH_PASSWORD;
    
    if (!correctPassword) {
      console.error('Authentication password not set in environment variables');
      setError(true);
      setIsLoading(false);
      return;
    }

    try {
      if (password === correctPassword) {
        localStorage.setItem('vaelora-auth', 'true');
        // Use replace instead of push to prevent back button issues
        await router.replace('/');
      } else {
        setError(true);
        setPassword('');
        // Reset error state after animation
        setTimeout(() => setError(false), 500);
      }
    } catch (err) {
      console.error('Navigation error:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Vaelora - Enter</title>
        <meta name="description" content="Secure entry to Vaelora" />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              animate={{
                y: [0, -30, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <div className={styles.logoContainer}>
            <Logo size={96} color="#fff" className={styles.logo} />
            <motion.h1
              className={styles.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Vaelora
            </motion.h1>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              animate={error ? {
                x: [-10, 10, -10, 10, 0],
                transition: { duration: 0.4 }
              } : {}}
              className={styles.inputWrapper}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={styles.input}
                autoFocus
                disabled={isLoading}
              />
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={styles.errorMessage}
                  >
                    Incorrect password
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              type="submit"
              className={`${styles.button} ${isLoading ? styles.loading : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  className={styles.loadingSpinner}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                'Enter'
              )}
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          © {new Date().getFullYear()} Vaelora. All rights reserved.
        </motion.div>
      </div>
    </>
  );
};

export default Auth; 