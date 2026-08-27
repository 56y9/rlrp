import React, { useState } from 'react';
import { 
  Calculator, 
  ShieldAlert, 
  Copy, 
  Check, 
  Clock, 
  Ban, 
  DollarSign, 
  Car, 
  FileText, 
  User, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { RULES_DATA } from '../data/rulesData';

export const SanctionCalculator: React.FC = () => {
  const [selectedRuleId, setSelectedRuleId] = useState<string>(RULES_DATA[0].id);
  const [repeatCount, setRepeatCount] = useState<'1' | '2' | '3'>('1');
  const [playerId, setPlayerId] = useState<string>('');
  const [staffName, setStaffName] = useState<string>('');
  const [isNewPlayer, setIsNewPlayer] = useState<boolean>(false);
  const [hasFullCooperation, setHasFullCooperation] = useState<boolean>(false);
  const [hasMassGriefing, setHasMassGriefing] = useState<boolean>(false);
  const [hasLyingInTicket, setHasLyingInTicket] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentRule = RULES_DATA.find(r => r.id === selectedRuleId) || RULES_DATA[0];

  // Calculate sanction metrics
  const calculateSanction = () => {
    let baseJail = 45;
    let banDays = 0;
    let fine = 25000;
    let confiscateGuns = false;
    let confiscateCar = false;

    if (currentRule.code === 'RDM' || currentRule.code === 'VDM') {
      confiscateGuns = true;
      if (currentRule.code === 'VDM') confiscateCar = true;
      if (repeatCount === '1') { baseJail = 60; fine = 50000; }
      if (repeatCount === '2') { banDays = 3; baseJail = 0; fine = 100000; }
      if (repeatCount === '3') { banDays = 14; baseJail = 0; fine = 150000; }
    } else if (currentRule.code === 'CL' || currentRule.code === 'MG') {
      confiscateGuns = true;
      if (repeatCount === '1') { banDays = 3; }
      if (repeatCount === '2') { banDays = 7; }
      if (repeatCount === '3') { banDays = 30; }
    } else if (currentRule.code === 'GZ / Safe Zones') {
      confiscateGuns = true;
      if (repeatCount === '1') { baseJail = 60; fine = 35000; }
      if (repeatCount === '2') { banDays = 3; }
      if (repeatCount === '3') { banDays = 14; }
    } else if (currentRule.severity === 'critical') {
      if (repeatCount === '1') { banDays = 3; }
      if (repeatCount === '2') { banDays = 7; }
      if (repeatCount === '3') { banDays = 30; }
    } else {
      if (repeatCount === '1') { baseJail = 30; fine = 15000; }
      if (repeatCount === '2') { baseJail = 60; fine = 30000; }
      if (repeatCount === '3') { banDays = 2; fine = 60000; }
    }

    // Modifiers
    if (isNewPlayer && repeatCount === '1') {
      baseJail = Math.max(15, Math.floor(baseJail / 2));
      banDays = 0;
      fine = Math.floor(fine / 2);
    }

    if (hasFullCooperation && baseJail > 20) {
      baseJail = Math.floor(baseJail * 0.75);
    }

    if (hasMassGriefing) {
      baseJail += 30;
      fine += 50000;
      if (banDays > 0) banDays += 2;
    }

    if (hasLyingInTicket) {
      baseJail += 30;
      if (banDays === 0) banDays = 1;
      else banDays += 2;
    }

    // Ensure ban never exceeds 30 days
    if (banDays > 30) banDays = 30;

    return {
      baseJail,
      banDays,
      fine,
      confiscateGuns,
      confiscateCar
    };
  };

  const sanctionResult = calculateSanction();

  const generateDiscordReport = () => {
    const reportText = `\`\`\`diff
+ ========== [ تقرير عقوبة رسمية - RESPECT LAW CFW ] ==========
- رقم آيدي اللاعب (ID): ${playerId || 'غير محدد'}
- اسم المشرف / القاضي: ${staffName || 'لجنة التحقيق الإداري'}
- نوع المخالفة: [${currentRule.code}] - ${currentRule.titleAr}
- تكرار المخالفة: المرة (${repeatCount})
--------------------------------------------------------------
⚖️ الحكم والعقوبات الصادرة:
${sanctionResult.banDays > 0 ? `+ مدة الحظر المؤقت: [ ${sanctionResult.banDays} أيام (حد أقصى شهر) ]` : ''}
${sanctionResult.baseJail > 0 ? `+ سجن إداري (Admin Jail): [ ${sanctionResult.baseJail} دقيقة ]` : ''}
+ الغرامة المالية المسجلة: [ $${sanctionResult.fine.toLocaleString()} ]
${sanctionResult.confiscateGuns ? '+ الإجراء الإضافي: مصادرة كامل الأسلحة والعتاد المستخدم' : ''}
${sanctionResult.confiscateCar ? '+ الإجراء الإضافي: حجز المركبة في حجز البلدية (48 ساعة)' : ''}
--------------------------------------------------------------
📌 ملاحظات التحقيق والظروف:
- مبتدئ (أقل من 5 ساعات): ${isNewPlayer ? 'نعم (تم تخفيف الحكم)' : 'لا'}
- التعاون والاعتراف: ${hasFullCooperation ? 'نعم' : 'لا'}
- الكذب وتضليل الإدارة: ${hasLyingInTicket ? 'نعم (تمت مضاعفة العقوبة)' : 'لا'}
\`\`\``;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Title Header */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-400 glow-purple">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              حاسبة العقوبات ومصفوفة الجزاءات الإدارية
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70 font-medium">
              أداة مخصصة للاعبين والإداريين لحساب مدة السجن الإداري، الحظر، والغرامات المالية وفق لائحة Respect Law الرسمية.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5 bg-[#100820] p-5 sm:p-6 rounded-2xl border border-purple-900/40">
          
          {/* Pick Rule */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-purple-300">
              اختر نوع المخالفة المرتكبة:
            </label>
            <select
              value={selectedRuleId}
              onChange={(e) => setSelectedRuleId(e.target.value)}
              className="w-full bg-[#180e30] text-white text-sm rounded-xl p-3 border border-purple-800/60 focus:outline-none focus:border-purple-400 font-medium"
            >
              {RULES_DATA.map((rule) => (
                <option key={rule.id} value={rule.id}>
                  [{rule.code}] - {rule.titleAr}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-purple-400/80 font-mono">
              التصنيف: {currentRule.titleEn}
            </p>
          </div>

          {/* Repeat Count */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-purple-300">
              تكرار المخالفة في سجل اللاعب:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRepeatCount('1')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition ${
                  repeatCount === '1'
                    ? 'bg-purple-600 text-white glow-purple'
                    : 'bg-[#180e30] text-purple-300/80 hover:bg-purple-900/40'
                }`}
              >
                المرة الأولى (First)
              </button>
              <button
                type="button"
                onClick={() => setRepeatCount('2')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition ${
                  repeatCount === '2'
                    ? 'bg-amber-600 text-white'
                    : 'bg-[#180e30] text-purple-300/80 hover:bg-purple-900/40'
                }`}
              >
                المرة الثانية (Second)
              </button>
              <button
                type="button"
                onClick={() => setRepeatCount('3')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition ${
                  repeatCount === '3'
                    ? 'bg-red-600 text-white'
                    : 'bg-[#180e30] text-purple-300/80 hover:bg-purple-900/40'
                }`}
              >
                المرة الثالثة (Third+)
              </button>
            </div>
          </div>

          {/* Player & Staff IDs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-purple-300">آيدي اللاعب (ID):</label>
              <input
                type="text"
                placeholder="مثال: 45"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                className="w-full bg-[#180e30] text-white text-xs rounded-xl p-2.5 border border-purple-800/60 focus:outline-none focus:border-purple-400 font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-purple-300">اسم الإداري / المشتكي:</label>
              <input
                type="text"
                placeholder="مثال: Admin_Sultan"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                className="w-full bg-[#180e30] text-white text-xs rounded-xl p-2.5 border border-purple-800/60 focus:outline-none focus:border-purple-400 font-mono"
              />
            </div>
          </div>

          {/* Modifiers & Circumstances Checkboxes */}
          <div className="space-y-2.5 pt-2 border-t border-purple-900/40">
            <span className="text-xs font-bold text-purple-300 block">ظروف وملابسات التحقيق:</span>
            
            <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isNewPlayer}
                onChange={(e) => setIsNewPlayer(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-[#180e30] border-purple-800"
              />
              <span>لاعب جديد في السيرفر (ساعات اللعب أقل من 5 ساعات - تخفيف الحكم)</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasFullCooperation}
                onChange={(e) => setHasFullCooperation(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-[#180e30] border-purple-800"
              />
              <span>الاعتراف الفوري والاعتذار والتعاون التام في التكت (-25% مدة السجن)</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasMassGriefing}
                onChange={(e) => setHasMassGriefing(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-[#180e30] border-purple-800"
              />
              <span>تخريب جماعي لسيناريو رسمي معتمد (إضافة سجن وغرامة)</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-purple-200 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasLyingInTicket}
                onChange={(e) => setHasLyingInTicket(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-[#180e30] border-purple-800"
              />
              <span>الكذب على الإدارة وإنكار الأدلة المصورة الصريحة (تغليظ العقوبة)</span>
            </label>
          </div>

        </div>

        {/* Calculated Result Card Column */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-gradient-to-b from-[#180c33] to-[#120824] p-5 sm:p-6 rounded-2xl border border-purple-600/40 shadow-2xl space-y-5 glow-purple">
            
            <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
              <span className="text-xs font-bold uppercase text-purple-400 tracking-wider">
                القرار والجزاء المقترح
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/80 text-purple-200 font-mono">
                {currentRule.code}
              </span>
            </div>

            {/* Main Calculated Metrics */}
            <div className="space-y-3">
              {/* Jail Time */}
              <div className="flex items-center justify-between bg-[#1f103d] p-3 rounded-xl border border-purple-700/40">
                <div className="flex items-center gap-2.5 text-xs text-purple-300">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>السجن الإداري (Admin Jail):</span>
                </div>
                <span className="text-base font-black text-white">
                  {sanctionResult.baseJail > 0 ? `${sanctionResult.baseJail} دقيقة` : 'لا يوجد'}
                </span>
              </div>

              {/* Ban Duration */}
              <div className="flex items-center justify-between bg-[#1f103d] p-3 rounded-xl border border-purple-700/40">
                <div className="flex items-center gap-2.5 text-xs text-amber-300">
                  <Ban className="w-4 h-4 text-amber-400" />
                  <span>الحظر المؤقت (Temp Ban):</span>
                </div>
                <span className="text-base font-black text-amber-200">
                  {sanctionResult.banDays > 0 ? `${sanctionResult.banDays} أيام (أقصى حد شهر)` : 'لا يوجد حظر'}
                </span>
              </div>

              {/* Financial Fine */}
              <div className="flex items-center justify-between bg-[#1f103d] p-3 rounded-xl border border-purple-700/40">
                <div className="flex items-center gap-2.5 text-xs text-emerald-300">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>الغرامة المالية (IC Fine):</span>
                </div>
                <span className="text-base font-black text-emerald-300 font-mono">
                  ${sanctionResult.fine.toLocaleString()}
                </span>
              </div>

              {/* Extra Confiscations */}
              <div className="pt-2 text-xs space-y-1.5 text-purple-300">
                {sanctionResult.confiscateGuns && (
                  <div className="flex items-center gap-2 text-red-300 bg-red-950/40 p-2 rounded-lg border border-red-800/30">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                    <span>مصادرة جميع الأسلحة والعتاد المستخدم</span>
                  </div>
                )}
                {sanctionResult.confiscateCar && (
                  <div className="flex items-center gap-2 text-amber-300 bg-amber-950/40 p-2 rounded-lg border border-amber-800/30">
                    <Car className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>حجز المركبة في حجز البلدية 48 ساعة</span>
                  </div>
                )}
              </div>

            </div>

            {/* Action Buttons */}
            <button
              onClick={generateDiscordReport}
              className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'تم نسخ التقرير لتكت الديسكورد!' : 'نسخ التقرير الرسمي لديسكورد'}</span>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};
