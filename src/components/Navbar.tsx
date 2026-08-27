import React, { useState } from 'react';
import { 
  BookOpen, 
  Shield, 
  MapPin, 
  Calculator, 
  HelpCircle, 
  Terminal, 
  FileText, 
  Award, 
  Copy, 
  Check, 
  Flame, 
  Radio, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery
}) => {
  const [copiedIp, setCopiedIp] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serverConnectCmd = 'connect cfx.re/join/respect-law-cfw';

  const copyServerIp = () => {
    navigator.clipboard.writeText(serverConnectCmd);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2500);
  };

  const navItems = [
    { id: 'rules', label: 'دستور القوانين', icon: BookOpen, badge: '35+' },
    { id: 'zones', label: 'المناطق والآمان', icon: MapPin },
    { id: 'factions', label: 'القطاعات والعصابات', icon: Shield },
    { id: 'calculator', label: 'حاسبة العقوبات', icon: Calculator, isNew: true },
    { id: 'quiz', label: 'اختبار الرول بلاي', icon: Award, isHighlight: true },
    { id: 'commands', label: 'الأوامر والمصطلحات', icon: Terminal },
    { id: 'tickets', label: 'التكتات والتعويضات', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0817]/95 backdrop-blur-md border-b border-purple-900/30">
      {/* Top Live Server Status Ticker */}
      <div className="bg-gradient-to-r from-purple-950/80 via-[#160b2b] to-purple-950/80 border-b border-purple-800/20 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-purple-200/80">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              سيرفر Respect Law متصل (128 / 128)
            </span>
            <span className="hidden md:inline text-purple-600">|</span>
            <span className="hidden md:inline text-purple-300/70">إصدار الفريم وورك: <strong className="text-purple-200">CFW v3.8 High-Performance</strong></span>
            <span className="hidden lg:inline text-purple-600">|</span>
            <span className="hidden lg:inline text-purple-300/70">البنق: <strong className="text-emerald-400">18ms</strong> (الرياض / الخليج)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyServerIp}
              className="flex items-center gap-1.5 text-xs bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 px-2.5 py-0.5 rounded-full border border-purple-700/40 transition"
              title="انقر لنسخ أمر الدخول المباشر للكونسول F8"
            >
              {copiedIp ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-purple-400" />}
              <span>{copiedIp ? 'تم نسخ أمر F8!' : 'F8 Connect IP'}</span>
            </button>
            <span className="text-purple-400 font-mono text-[11px] hidden sm:inline">{serverConnectCmd}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Server Identity */}
          <div 
            onClick={() => setActiveTab('rules')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 p-0.5 glow-purple group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0d091b] rounded-[10px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-white">RESPECT<span className="text-purple-400 font-extrabold mr-1">LAW</span></span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-900/80 text-purple-200 border border-purple-700/50">CFW</span>
              </div>
              <p className="text-xs text-purple-300/70 font-medium">الدستور الرسمي وقوانين الرول بلاي</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-200 border border-purple-500/40 glow-purple'
                      : 'text-purple-200/70 hover:text-purple-100 hover:bg-purple-950/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-purple-400/60'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {item.badge}
                    </span>
                  )}
                  {item.isHighlight && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                      تفعيل
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#8ea1e1] hover:text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-[#5865F2]/40 transition glow-purple"
            >
              <Radio className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>ديسكورد السيرفر</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300 hover:text-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0a1d] border-b border-purple-900/50 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? 'bg-purple-600/25 text-purple-200 border border-purple-500/50'
                    : 'text-purple-300/80 hover:bg-purple-950/60 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-purple-400/70'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900 text-purple-200">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-purple-900/40">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-2 rounded-lg text-xs font-bold transition"
            >
              <Radio className="w-4 h-4" />
              <span>الانضمام إلى ديسكورد Respect Law</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
