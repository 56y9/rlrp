import React from 'react';
import { Search, Shield, Zap, Sparkles, Scale, AlertTriangle, BookCheck } from 'lucide-react';
import { RuleCategory } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: RuleCategory;
  setSelectedCategory: (cat: RuleCategory) => void;
  totalRulesCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  totalRulesCount
}) => {
  const quickTags = [
    { label: 'القتل العشوائي RDM', query: 'RDM' },
    { label: 'الصدم بالمركبة VDM', query: 'VDM' },
    { label: 'الخوف على الحياة Fear RP', query: 'Fear' },
    { label: 'الميتا جيمنج MG', query: 'MG' },
    { label: 'الباور جيمنج PG', query: 'PG' },
    { label: 'الهروب بالخروج CL', query: 'CL' },
    { label: 'المناطق الخضراء GZ', query: 'خضراء' },
    { label: 'سرقة البنوك والرهائن', query: 'بنوك' },
    { label: 'إنهاء الشخصية CK', query: 'CK' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#140b28] via-[#0d081b] to-[#0b0813] pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-purple-900/30 overflow-hidden bg-grid-pattern">
      {/* Ambient glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        {/* Server Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-600/40 text-purple-300 text-xs font-semibold glow-purple">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>الدستور واللوائح المعتمدة - سيرفر Respect Law CFW 2026</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
          دستور وقوانين سيرفر <span className="purple-gradient-text">Respect Law</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-purple-200/70 max-w-3xl mx-auto leading-relaxed font-normal">
          المرجع الشامل والنهائي لكافة قوانين الرول بلاي في مجتمع فايف ام. جميع القوانين مدعومة 
          بأمثلة واقعية للمواقف الخاطئة، الرول بلاي السليم، التدرج في العقوبات، وتوجيهات التحقيق الإداري.
        </p>

        {/* Search Input Bar */}
        <div className="max-w-2xl mx-auto relative pt-2">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن أي قانون (مثال: VDM, NLR, خطف, بنوك, سرقة, شرطة, /me)..."
              className="w-full bg-[#160e2e]/90 text-white placeholder-purple-400/50 text-sm sm:text-base rounded-2xl pr-12 pl-10 py-4 border border-purple-600/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 shadow-2xl glow-purple transition duration-200"
            />
            <div className="absolute right-4 text-purple-400">
              <Search className="w-5 h-5" />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 text-xs bg-purple-900/60 hover:bg-purple-800 text-purple-300 px-2 py-1 rounded-md transition"
              >
                مسح
              </button>
            )}
          </div>

          {/* Quick Search Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs">
            <span className="text-purple-400/80 font-semibold ml-1">بحث سريع:</span>
            {quickTags.map((tag) => (
              <button
                key={tag.query}
                onClick={() => setSearchQuery(tag.query)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  searchQuery.toLowerCase() === tag.query.toLowerCase()
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 border border-purple-800/40'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* High Level Key Stats Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 text-right">
          
          <div className="bg-[#120a24]/80 p-3.5 rounded-xl border border-purple-800/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white">{totalRulesCount}+</div>
              <div className="text-[11px] text-purple-300/70 font-medium">قانون ولوائح مفصلة</div>
            </div>
          </div>

          <div className="bg-[#120a24]/80 p-3.5 rounded-xl border border-purple-800/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white">3 مستويات</div>
              <div className="text-[11px] text-purple-300/70 font-medium">تدرج عقوبات صارم</div>
            </div>
          </div>

          <div className="bg-[#120a24]/80 p-3.5 rounded-xl border border-purple-800/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white">100% واقعي</div>
              <div className="text-[11px] text-purple-300/70 font-medium">أمثلة حية لكل مخالفة</div>
            </div>
          </div>

          <div className="bg-[#120a24]/80 p-3.5 rounded-xl border border-purple-800/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white">CFW Engine</div>
              <div className="text-[11px] text-purple-300/70 font-medium">حماية وعدالة كاملة</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
