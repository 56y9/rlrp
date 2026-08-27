import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  Clock, 
  DollarSign, 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';

export const TicketGuide: React.FC = () => {
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [copiedCompTemplate, setCopiedCompTemplate] = useState(false);

  const reportTemplate = `**[ بلاغ مخالفة رول بلاي - Respect Law CFW ]**
- الآيدي الخاص بي (My ID): 
- آيدي اللاعب المخالف (Target ID): 
- نوع المخالفة المرتكبة: (مثال: VDM / RDM / Combat Logging)
- وقت وتاريخ الواقعة: 
- رابط مقطع الفيديو (YouTube / Streamable 1080p): 
- شرح ما حدث باختصار وهدوء: `;

  const compTemplate = `**[ طلب تعويض رسمي - Respect Law CFW ]**
- الآيدي واسم الشخصية: 
- سبب طلب التعويض: (مثال: كراش سيرفر / مخالفة لاعب مثبتة / دروب أغراض)
- الأغراض أو المبالغ المفقودة: 
- رقم تكت البلاغ المرتبط (إن وجد): 
- رابط فيديو الإثبات واضح من البداية للنهاية: `;

  const copyReport = () => {
    navigator.clipboard.writeText(reportTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2200);
  };

  const copyComp = () => {
    navigator.clipboard.writeText(compTemplate);
    setCopiedCompTemplate(true);
    setTimeout(() => setCopiedCompTemplate(false), 2200);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-400 glow-purple">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              لوائح التكتات والبلاغات وطلبات التعويض
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70">
              الشروط والمعايير الرسمية لرفع التكتات وضمان سرعة النظر في شكواك دون رفضها لأسباب شكلية.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pillars of a Valid Ticket */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-[#100820] p-5 rounded-2xl border border-purple-900/40 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 flex items-center justify-center text-purple-400">
            <Video className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">تصوير فيديو 1080p</h4>
          <p className="text-xs text-purple-300/70 leading-relaxed">
            يجب أن يكون المقطع واضحاً بجودة 1080p لا تقل عن دقيقتين قبل الواقعة لإثبات بداية السيناريو.
          </p>
        </div>

        <div className="bg-[#100820] p-5 rounded-2xl border border-purple-900/40 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 flex items-center justify-center text-purple-400">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">مهلة 24 ساعة فقط</h4>
          <p className="text-xs text-purple-300/70 leading-relaxed">
            يجب رفع التكت خلال 24 ساعة كحد أقصى من وقت حدوث الواقعة، وأي بلاغ بعد ذلك يُرفض تلقائياً.
          </p>
        </div>

        <div className="bg-[#100820] p-5 rounded-2xl border border-purple-900/40 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 flex items-center justify-center text-purple-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">صوت واضح بدون قص</h4>
          <p className="text-xs text-purple-300/70 leading-relaxed">
            يُمنع تقطيع أو كتم صوت المايكروفون أو مكالمة الديسكورد للتأكد من عدم وجود مخالفات متبادلة.
          </p>
        </div>

        <div className="bg-[#100820] p-5 rounded-2xl border border-purple-900/40 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 flex items-center justify-center text-purple-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">شروط التعويض</h4>
          <p className="text-xs text-purple-300/70 leading-relaxed">
            التعويض يتم فقط في حال إدانة الطرف الآخر رسمياً أو حدوث خلل برمجي موثق بالفيديو.
          </p>
        </div>

      </div>

      {/* Ticket Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Violation Report Form */}
        <div className="bg-[#120a24] rounded-2xl border border-purple-900/40 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>فورم رفع بلاغ مخالفة (Report Template)</span>
            </h3>
            <button
              onClick={copyReport}
              className="p-2 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs flex items-center gap-1.5 transition"
            >
              {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTemplate ? 'تم النسخ' : 'نسخ الفورم'}</span>
            </button>
          </div>

          <pre className="bg-[#0b0617] p-4 rounded-xl text-xs text-purple-200 font-mono whitespace-pre-wrap border border-purple-950 leading-relaxed">
            {reportTemplate}
          </pre>
        </div>

        {/* Compensation Form */}
        <div className="bg-[#120a24] rounded-2xl border border-purple-900/40 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>فورم طلب تعويض مالي / عتاد (Compensation)</span>
            </h3>
            <button
              onClick={copyComp}
              className="p-2 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs flex items-center gap-1.5 transition"
            >
              {copiedCompTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCompTemplate ? 'تم النسخ' : 'نسخ الفورم'}</span>
            </button>
          </div>

          <pre className="bg-[#0b0617] p-4 rounded-xl text-xs text-purple-200 font-mono whitespace-pre-wrap border border-purple-950 leading-relaxed">
            {compTemplate}
          </pre>
        </div>

      </div>

      {/* Critical Rules for Tickets */}
      <div className="bg-purple-950/40 rounded-2xl border border-purple-800/40 p-5 space-y-2 text-xs text-purple-200">
        <span className="font-bold text-purple-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          تنبيهات هامة بخصوص التكتات:
        </span>
        <ul className="space-y-1.5 pr-5 list-disc text-purple-200/80">
          <li>يُمنع منشنة (Mention) المشرفين في التكت بشكل متكرر؛ سيتولى المشرف المتاح الرد خلال دقائق.</li>
          <li>أي تزوير في مقاطع الفيديو أو حذف أجزاء منها يُعرض صاحب التكت للباند الدائم بتهمة تضليل الإدارة.</li>
          <li>يُمنع فتح أكثر من تكت لنفس القضية أو تكرار البلاغ المغلق مسبقاً.</li>
        </ul>
      </div>

    </div>
  );
};
