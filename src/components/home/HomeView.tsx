'use client';

import React, { useState, useMemo } from 'react';
import { TOOLS, POPULAR_TOOLS } from '@/data/tools';
import { CATEGORIES } from '@/data/categories';
import { VALUE_PROPOSITIONS, HOW_IT_WORKS_STEPS } from '@/data/features';
import { Hero } from './Hero';
import { ToolGrid } from './ToolGrid';
import { CategoryGrid } from './CategoryGrid';
import { WhySection } from './WhySection';
import { HowItWorks } from './HowItWorks';
import { CTASection } from './CTASection';

export function HomeView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      // Category filter
      if (activeCategory !== 'all' && tool.categoryId !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchDesc = tool.shortDescription.toLowerCase().includes(q);
        const matchCategory = tool.categoryName.toLowerCase().includes(q);
        const matchTags = tool.tags.some((tag) => tag.toLowerCase().includes(q));
        return matchName || matchDesc || matchCategory || matchTags;
      }

      // When no search and no category selected, return the 8 popular MVP tools
      if (activeCategory === 'all') {
        return tool.isPopular;
      }

      return true;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Hero Section */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filteredCount={displayedTools.length}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 2. Popular Tools / Filtered Results Grid */}
      <ToolGrid
        tools={displayedTools}
        searchQuery={searchQuery}
        onClearSearch={() => {
          setSearchQuery('');
          setActiveCategory('all');
        }}
        title={activeCategory === 'all' ? 'Popular Tools' : `${CATEGORIES.find(c => c.id === activeCategory)?.name || 'Filtered Tools'}`}
        subtitle="Free, private, and instant client-side browser utilities."
      />

      {/* 3. Categories Grid */}
      <CategoryGrid categories={CATEGORIES} />

      {/* 4. Why QuickTools (Engineering Principles) */}
      <WhySection features={VALUE_PROPOSITIONS} />

      {/* 5. How It Works (3 Steps) */}
      <HowItWorks steps={HOW_IT_WORKS_STEPS} />

      {/* 6. Call To Action Banner */}
      <CTASection />
    </div>
  );
}
