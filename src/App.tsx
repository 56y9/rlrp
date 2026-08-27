import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RulesList } from './components/RulesList';
import { ZonesGuide } from './components/ZonesGuide';
import { FactionsGuide } from './components/FactionsGuide';
import { SanctionCalculator } from './components/SanctionCalculator';
import { RoleplayQuiz } from './components/RoleplayQuiz';
import { CommandsGlossary } from './components/CommandsGlossary';
import { TicketGuide } from './components/TicketGuide';
import { Footer } from './components/Footer';
import { RULES_DATA } from './data/rulesData';
import { RuleCategory } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('rules');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory>('all');

  // If user starts typing in search from any tab, switch automatically to 'rules' tab to view live results
  useEffect(() => {
    if (searchQuery.trim().length > 0 && activeTab !== 'rules') {
      setActiveTab('rules');
    }
  }, [searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0813] text-[#e2d9f3] flex flex-col font-['Cairo',sans-serif]">
      
      {/* Sticky Navigation Bar with live server status */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section with Quick Search */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalRulesCount={RULES_DATA.length}
      />

      {/* Main Dynamic Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeTab === 'rules' && (
          <RulesList
            rules={RULES_DATA}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activeTab === 'zones' && <ZonesGuide />}

        {activeTab === 'factions' && <FactionsGuide />}

        {activeTab === 'calculator' && <SanctionCalculator />}

        {activeTab === 'quiz' && <RoleplayQuiz />}

        {activeTab === 'commands' && <CommandsGlossary />}

        {activeTab === 'tickets' && <TicketGuide />}

      </main>

      {/* Professional Footer */}
      <Footer onScrollToTop={scrollToTop} />

    </div>
  );
}
