import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Terminal,
  Bookmark,
  Share2
} from 'lucide-react';
import { RuleItem, SeverityLevel } from '../types';

interface RuleCardProps {
  rule: RuleItem;
  onOpenModal?: (rule: RuleItem) => void;
}

export const RuleCard: React.FC<RuleCardProps> = ({ rule, onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const getSeverityBadge = (severity: SeverityLevel) => {
    switch (severity) {
      case 'low':
        return { label: 'مستوى بسيط', bg: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50' };
      case 'medium':
        return { label: 'مستوى متوسط', bg: 'bg-amber-950/60 text-amber-300 border-amber-700/50' };
      case 'high':
        return { label: 'مستوى عالي', bg: 'bg-orange-950/60 text-orange-300 border-orange-700/50' };
      case 'critical':
        return { label: 'مخالفة جسيمة', bg: 'bg-red-950/60 text-red-300 border-red-700/50' };
      case 'permanent':
        return { label: 'مخالفة قصوى (أقصى حظر 30 يوماً)', bg: 'bg-rose-950 text-rose-200 border-rose-600' };
      default:
        return { label: 'نظامي', bg: 'bg-purple-950 text-purple-300 border-purple-700' };
    }
  };

  const severityInfo = getSeverityBadge(rule.severity);

  const copyRuleDetails = () => {
    const textToCopy = `📌 [قانون سيرفر Respect Law]: ${rule.code} - ${rule.titleAr} (${rule.titleEn})
📝 الشرح: ${rule.summaryAr}
⚖️ العقوبات:
1️⃣ المرة الأولى: ${rule.penalty1st}
2️⃣ المرة الثانية: ${rule.penalty2nd}
3️⃣ المرة الثالثة: ${rule.penalty3rd}
❌ مثال المخالفة: ${rule.violationExample}
✅ الرول بلاي الصحيح: ${rule.correctRoleplayExample}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="bg-[#120a24]/90 rounded-2xl border border-purple-900/40 hover:border-purple-600/50 transition-all duration-300 shadow-xl overflow-hidden group">
      
      {/* Header Banner */}
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* Top Badges & Code */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-purple-900/60 text-purple-200 border border-purple-500/40 text-xs font-black font-mono tracking-wider glow-purple">
              {rule.code}
            </span>
            <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${severityInfo.bg}`}>
              {severityInfo.label}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={copyRuleDetails}
              className="p-2 rounded-lg bg-purple-950/60 hover:bg-purple-800/60 text-purple-300 hover:text-white border border-purple-800/40 transition text-xs flex items-center gap-1.5"
              title="نسخ نص القانون للاستخدام في التكتات"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'تم النسخ' : 'نسخ القانون'}</span>
            </button>
          </div>
        </div>

        {/* Titles */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
            {rule.titleAr}
          </h3>
          <p className="text-xs text-purple-400 font-mono tracking-wide mt-0.5">
            {rule.titleEn}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-sm text-purple-200/80 leading-relaxed">
          {rule.summaryAr}
        </p>

        {/* Quick Penalties Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
          <div className="bg-[#180e30] p-2.5 rounded-xl border border-purple-900/50">
            <span className="text-purple-400 font-bold block mb-0.5">المرة الأولى:</span>
            <span className="text-purple-200 font-medium">{rule.penalty1st}</span>
          </div>
          <div className="bg-[#180e30] p-2.5 rounded-xl border border-purple-900/50">
            <span className="text-amber-400 font-bold block mb-0.5">المرة الثانية:</span>
            <span className="text-amber-200 font-medium">{rule.penalty2nd}</span>
          </div>
          <div className="bg-[#180e30] p-2.5 rounded-xl border border-purple-900/50">
            <span className="text-rose-400 font-bold block mb-0.5">المرة الثالثة:</span>
            <span className="text-rose-200 font-medium">{rule.penalty3rd}</span>
          </div>
        </div>

      </div>

      {/* Expandable Deep Details */}
      {isExpanded && (
        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-purple-900/40 space-y-4 bg-[#0e071c]/90 animate-in fade-in-50 duration-200">
          
          {/* Full Detailed Description */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
              <Info className="w-4 h-4 text-purple-400" />
              <span>الشرح والضوابط التفصيلية للقانون:</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed bg-[#150a29] p-3 rounded-xl border border-purple-900/40">
              {rule.fullDescriptionAr}
            </p>
          </div>

          {/* Real-life Scenarios: Violation vs Correct RP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            
            {/* Wrong Scenario (Red) */}
            <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>مثال على المخالفة الواقعية (الخطأ):</span>
              </div>
              <p className="text-xs text-red-200/90 leading-relaxed font-sans">
                {rule.violationExample}
              </p>
            </div>

            {/* Correct Roleplay Scenario (Green) */}
            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>مثال الرول بلاي الصحيح (المطلوب):</span>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed font-sans">
                {rule.correctRoleplayExample}
              </p>
            </div>

          </div>

          {/* Admin Investigation Guidance */}
          <div className="bg-purple-950/40 border border-purple-800/40 rounded-xl p-3 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              <span>توجيهات الإدارة ولجنة التحقيق في التكتات:</span>
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              {rule.adminNotes}
            </p>
          </div>

          {/* Related Commands */}
          {rule.relatedCommands && rule.relatedCommands.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-purple-400 font-semibold flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" />
                أوامر مرتبطة:
              </span>
              {rule.relatedCommands.map((cmd, idx) => (
                <span 
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-[#180f33] text-purple-300 border border-purple-700/40"
                >
                  {cmd}
                </span>
              ))}
            </div>
          )}

        </div>
      )}

      {/* Expand / Collapse Button Bar */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2.5 px-4 bg-[#150a29]/80 hover:bg-[#1d0e38] text-xs font-bold text-purple-300 hover:text-white flex items-center justify-center gap-2 border-t border-purple-900/40 transition"
      >
        {isExpanded ? (
          <>
            <span>إخفاء التفاصيل والأمثلة</span>
            <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>عرض الشرح الكامل والأمثلة الحية وتوجيهات الإدارة</span>
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

    </div>
  );
};
