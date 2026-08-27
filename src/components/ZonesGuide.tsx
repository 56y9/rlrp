import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Skull, 
  Navigation, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  HeartPulse, 
  Warehouse, 
  ShieldAlert, 
  Flame 
} from 'lucide-react';
import { ZONES_DATA } from '../data/zonesData';
import { ZoneItem } from '../types';

export const ZonesGuide: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'green' | 'red' | 'neutral'>('all');

  const filteredZones = ZONES_DATA.filter(
    zone => selectedType === 'all' || zone.type === selectedType
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-emerald-400" />;
      case 'Warehouse': return <Warehouse className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Skull': return <Skull className="w-5 h-5 text-red-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-400" />;
      default: return <Navigation className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-400 glow-purple">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              دليل وتصنيف المناطق (خضراء • حمراء • محايدة)
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70">
              تعرّف على حدود الأمان، الأنشطة المسموحة والمحظورة، وقواعد الساحات الحمراء في سيرفر Respect Law.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            selectedType === 'all'
              ? 'bg-purple-600 text-white glow-purple'
              : 'bg-[#120a24] text-purple-300/80 hover:bg-purple-900/40 border border-purple-900/40'
          }`}
        >
          كافة المناطق ({ZONES_DATA.length})
        </button>

        <button
          onClick={() => setSelectedType('green')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            selectedType === 'green'
              ? 'bg-emerald-600 text-white'
              : 'bg-[#120a24] text-emerald-300/80 hover:bg-emerald-950/40 border border-emerald-900/40'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>المناطق الخضراء الآمنة (Green Zones)</span>
        </button>

        <button
          onClick={() => setSelectedType('red')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            selectedType === 'red'
              ? 'bg-red-600 text-white'
              : 'bg-[#120a24] text-red-300/80 hover:bg-red-950/40 border border-red-900/40'
          }`}
        >
          <Skull className="w-4 h-4 text-red-400" />
          <span>المناطق الحمراء والنزاع (Red Zones)</span>
        </button>

        <button
          onClick={() => setSelectedType('neutral')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            selectedType === 'neutral'
              ? 'bg-amber-600 text-white'
              : 'bg-[#120a24] text-amber-300/80 hover:bg-amber-950/40 border border-amber-900/40'
          }`}
        >
          <Navigation className="w-4 h-4 text-amber-400" />
          <span>الشوارع والمناطق العامة (Neutral)</span>
        </button>
      </div>

      {/* Zones Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredZones.map((zone) => {
          const isGreen = zone.type === 'green';
          const isRed = zone.type === 'red';

          return (
            <div 
              key={zone.id}
              className={`bg-[#120a24]/90 rounded-2xl border p-5 sm:p-6 space-y-4 shadow-xl transition duration-300 ${
                isGreen 
                  ? 'border-emerald-800/40 hover:border-emerald-500/50' 
                  : isRed 
                    ? 'border-red-800/40 hover:border-red-500/50' 
                    : 'border-amber-800/40 hover:border-amber-500/50'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 border-b border-purple-900/40 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isGreen ? 'bg-emerald-950/60' : isRed ? 'bg-red-950/60' : 'bg-amber-950/60'
                  }`}>
                    {getIcon(zone.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{zone.nameAr}</h3>
                    <p className="text-xs text-purple-400 font-mono">{zone.nameEn}</p>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                  isGreen 
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700/60' 
                    : isRed 
                      ? 'bg-red-950 text-red-300 border-red-700/60' 
                      : 'bg-amber-950 text-amber-300 border-amber-700/60'
                }`}>
                  {isGreen ? 'منطقة آمنة' : isRed ? 'منطقة حمراء' : 'منطقة عامة'}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {zone.description}
              </p>

              {/* Locations List */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold text-purple-300 block">أبرز المواقع المشمولة:</span>
                <div className="flex flex-wrap gap-1.5">
                  {zone.locationExamples.map((loc, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#180e30] text-purple-200 text-[11px] border border-purple-800/40"
                    >
                      📍 {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allowed vs Forbidden */}
              <div className="space-y-3 pt-2">
                
                {/* Allowed */}
                <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-3 space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    المسموح به نظامياً:
                  </span>
                  <ul className="text-xs text-emerald-200/90 space-y-1 pr-4 list-disc">
                    {zone.allowedActions.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>

                {/* Forbidden */}
                <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-3 space-y-1.5">
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" />
                    المحظور قطعياً:
                  </span>
                  <ul className="text-xs text-red-200/90 space-y-1 pr-4 list-disc">
                    {zone.forbiddenActions.map((act, idx) => (
                      <li key={idx}>{act}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Penalty Notice */}
              <div className="pt-2 border-t border-purple-900/40 text-xs flex items-center gap-2 text-purple-300">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>عقوبة المخالفة:</strong> {zone.penalty}</span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
