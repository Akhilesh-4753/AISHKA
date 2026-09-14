import React from 'react';
import Hero from '../components/home/Hero';
import BrandQuote from '../components/home/BrandQuote';
import FeaturedGrid from '../components/home/FeaturedGrid';
import CraftPillars from '../components/home/CraftPillars';

export default function Home({ setActivePage, setSelectedCategory, onOpenAppointment }) {
  const handleExplore = () => {
    setActivePage('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscoverStory = () => {
    setActivePage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFeaturedCategory = (category) => {
    setSelectedCategory(category);
    setActivePage('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in">
      <Hero
        onExplore={handleExplore}
        onDiscoverStory={handleDiscoverStory}
      />
      <BrandQuote
        onReadMore={handleDiscoverStory}
      />
      <FeaturedGrid
        onSelectCategory={handleSelectFeaturedCategory}
      />
      <CraftPillars
        onOpenAppointment={onOpenAppointment}
      />
    </div>
  );
}
