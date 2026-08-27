import React, { useState, useMemo } from 'react';
import { 
  Shield, 
  Layers, 
  Flame, 
  AlertOctagon, 
  HeartHandshake, 
  MapPin, 
  UserX, 
  MessageSquare,
  Sparkles,
  Filter
} from 'lucide-react';
import { RuleItem, RuleCategory, SeverityLevel } from '../types';
import { RuleCard } from './RuleCard';

interface RulesListProps {
  rules: RuleItem[];
  searchQuery: string;
  selectedCategory: RuleCategory;
  setSelectedCategory: (cat: RuleCategory) => void;
}

export const RulesList: React.FC<RulesListProps> = ({
  rules,
  searchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const categories: { id: RuleCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'كافة القوانين', icon: Layers },
    { id: 'roleplay_core', label: 'الرول بلاي الأساسي', icon: Shield },
    { id: 'power_meta', label: 'الباور والميتا و Fear RP', icon: Sparkles },
    { id: 'crimes_gangs', label: 'السرقات والعصابات', icon: Flame },
    { id: 'police_ems', label: 'الشرطة والإسعاف', icon: HeartHandshake },
    { id: 'zones', label: 'المناطق الخضراء والآمنة', icon: MapPin },
    { id: 'character_ck', label: 'إنهاء الشخصيات (CK / PK)', icon: UserX },
    { id: 'general_conduct', label: 'الديسكورد والمايك والأخلاق', icon: MessageSquare },
  ];

  const filteredRules = useMemo(() => {
    return rules.filter((rule) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;

      // Severity filter
      const matchesSeverity = selectedSeverity === 'all' || rule.severity === selectedSeverity;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        rule.code.toLowerCase().includes(q) ||
        rule.titleAr.toLowerCase().includes(q) ||
        rule.titleEn.toLowerCase().includes(q) ||
        rule.summaryAr.toLowerCase().includes(q) ||
        rule.fullDescriptionAr.toLowerCase().includes(q) ||
        rule.violationExample.toLowerCase().includes(q) ||
        rule.correctRoleplayExample.toLowerCase().includes(q) ||
        rule.tags.some(t => t.toLowerCase().includes(q))
      );

      return matchesCategory && matchesSeverity && matchesSearch;
    });
  }, [rules, selectedCategory, selectedSeverity, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Category Pills Strip */}
      <div className="bg-[#100921] p-2 sm:p-3 rounded-2xl border border-purple-900/40 shadow-lg">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-lg glow-purple'
                    : 'text-purple-300/80 hover:text-white hover:bg-purple-950/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-purple-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Count Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-purple-300/80 px-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">
            عرض {filteredRules.length} من أصل {rules.length} قانون
          </span>
          {searchQuery && (
            <span className="bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded border border-purple-800/40">
              نتائج البحث عن: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Severity Filter Dropdown/Pills */}
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-purple-400 font-semibold">المستوى:</span>
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="bg-[#180e30] text-purple-200 text-xs rounded-lg px-2.5 py-1 border border-purple-800/50 focus:outline-none focus:border-purple-400"
          >
            <option value="all">كافة المستويات</option>
            <option value="low">مستوى بسيط</option>
            <option value="medium">مستوى متوسط</option>
            <option value="high">مستوى عالي</option>
            <option value="critical">مخالفة جسيمة</option>
            <option value="permanent">حظر دائم</option>
          </select>
        </div>
      </div>

      {/* Rules Grid */}
      {filteredRules.length > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {filteredRules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      ) : (
        <div className="bg-[#120a24] rounded-2xl border border-purple-900/40 p-12 text-center space-y-4">
          <AlertOctagon className="w-12 h-12 text-purple-400/60 mx-auto animate-bounce" />
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">لم يتم العثور على أي قانون يطابق بحثك!</h4>
            <p className="text-xs text-purple-300/70">
              جرّب البحث بمصطلحات أخرى مثل VDM، NLR، إطلاق نار، شرطة، أو اختر تصنيفاً آخر.
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSeverity('all');
            }}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      )}

    </div>
  );
};
