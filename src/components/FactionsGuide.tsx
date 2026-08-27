import React, { useState } from 'react';
import { 
  Shield, 
  HeartHandshake, 
  Skull, 
  Scale, 
  Award, 
  AlertOctagon, 
  CheckCircle, 
  Info,
  Radio
} from 'lucide-react';
import { FACTIONS_DATA } from '../data/factionsData';

export const FactionsGuide: React.FC = () => {
  const [activeFactionId, setActiveFactionId] = useState<string>(FACTIONS_DATA[0].id);

  const currentFaction = FACTIONS_DATA.find(f => f.id === activeFactionId) || FACTIONS_DATA[0];

  const getFactionIcon = (badge: string) => {
    switch (badge) {
      case 'Shield': return <Shield className="w-6 h-6 text-blue-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-red-400" />;
      case 'Skull': return <Skull className="w-6 h-6 text-purple-400" />;
      case 'Scale': return <Scale className="w-6 h-6 text-amber-400" />;
      default: return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-400 glow-purple">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              لوائح القطاعات الرسمية والمنظمات الإجرامية
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70">
              دليل قواعد الاشتباك لشرطة لوس سانتوس (LSPD)، كادر الهلال الأحمر (EMS)، وزارة العدل، وعصابات المدينة.
            </p>
          </div>
        </div>
      </div>

      {/* Factions Switcher Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {FACTIONS_DATA.map((fac) => {
          const isActive = fac.id === activeFactionId;
          return (
            <button
              key={fac.id}
              onClick={() => setActiveFactionId(fac.id)}
              className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#1b0d36] border-purple-500 shadow-xl glow-purple'
                  : 'bg-[#100820] border-purple-900/40 hover:border-purple-700/60 hover:bg-[#160b2d]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 flex items-center justify-center">
                  {getFactionIcon(fac.badge)}
                </div>
                {isActive && (
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{fac.factionNameAr.split('(')[0]}</h4>
                <p className="text-[11px] text-purple-400 font-mono">{fac.factionNameEn.split('&')[0]}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Faction Detail Card */}
      <div className="bg-[#120a24] rounded-2xl border border-purple-900/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-900/40 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-600/40 flex items-center justify-center">
              {getFactionIcon(currentFaction.badge)}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">{currentFaction.factionNameAr}</h3>
              <p className="text-xs text-purple-400 font-mono">{currentFaction.factionNameEn}</p>
            </div>
          </div>

          <div className="bg-purple-950/80 px-4 py-2 rounded-xl border border-purple-800/50 text-xs text-purple-200">
            {currentFaction.description}
          </div>
        </div>

        {/* Rules Grid */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-purple-300 flex items-center gap-2">
            <Info className="w-4 h-4 text-purple-400" />
            <span>البنود واللوائح الإلزامية لهذا القطاع:</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentFaction.rules.map((rule, idx) => (
              <div 
                key={idx}
                className="bg-[#180e30] rounded-xl border border-purple-900/50 p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-900/80 text-purple-300 text-xs flex items-center justify-center font-mono shrink-0">
                      {idx + 1}
                    </span>
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-xs text-purple-200/80 leading-relaxed pr-8">
                    {rule.description}
                  </p>
                  {rule.note && (
                    <div className="text-[11px] bg-purple-950/70 text-purple-300 p-2.5 rounded-lg border border-purple-800/30">
                      💡 <strong>ملاحظة تكتيكية:</strong> {rule.note}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-purple-900/40 text-[11px] flex items-center justify-between text-rose-300 bg-rose-950/20 px-3 py-1.5 rounded-lg">
                  <span className="font-bold">العقوبة عند المخالفة:</span>
                  <span>{rule.penalty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
