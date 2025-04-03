import Features from '@/components/home/Features';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import DataVisualization from '@/components/home/DataVisualization';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <DataVisualization />
      <Footer />
    </main>
  );
} 