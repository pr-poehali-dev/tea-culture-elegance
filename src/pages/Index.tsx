import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TeaProductsSection from '@/components/TeaProductsSection';
import TeapotsSection from '@/components/TeapotsSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <HeroSection />
      <TeaProductsSection />
      <TeapotsSection />
      <AboutSection />
      <BlogSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;