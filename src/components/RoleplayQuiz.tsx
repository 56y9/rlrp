import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  Medal
} from 'lucide-react';
import { QUIZ_DATA } from '../data/quizData';

export const RoleplayQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [copiedCert, setCopiedCert] = useState(false);

  const currentQ = QUIZ_DATA[currentQuestionIndex];

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionId
    });
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_DATA.forEach((q) => {
      const chosen = selectedAnswers[q.id];
      const correct = q.options.find(o => o.isCorrect)?.id;
      if (chosen === correct) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / QUIZ_DATA.length) * 100);
  const isPassed = percentage >= 80;

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const copyCertificate = () => {
    const certText = `\`\`\`diff
+ ========== [ شهادة اجتياز اختبار قوانين الرول بلاي ] ==========
+ السيرفر: RESPECT LAW CFW ROLEPLAY
+ اسم اللاعب: ${playerName || 'طالب التفعيل'}
+ النتيجة: [ ${score} / ${QUIZ_DATA.length} ] بنسبة (${percentage}%)
+ الحالة: ${isPassed ? '+ مؤهل للاختبار الصوتي (PASSED & CERTIFIED)' : '- غير مجتاز - بحاجة لمراجعة القوانين'}
+ التاريخ: ${new Date().toLocaleDateString('ar-SA')}
+ كود التحقق: CFW-RP-${Math.floor(100000 + Math.random() * 900000)}
\`\`\``;

    navigator.clipboard.writeText(certText);
    setCopiedCert(true);
    setTimeout(() => setCopiedCert(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-2 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/50 text-purple-300 text-xs font-semibold border border-purple-700/40 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>اختبار قبول الرول بلاي (Whitelist Mock Test)</span>
        </div>
        <h2 className="text-2xl font-black text-white">
          قياس فهم قوانين رول بلاي Respect Law
        </h2>
        <p className="text-xs sm:text-sm text-purple-300/70 max-w-xl mx-auto">
          اختبر معلوماتك في مواقف حقيقية تحاكي سيناريوهات السيرفر للتأكد من جاهزيتك للعب الاحترافي.
        </p>
      </div>

      {!isSubmitted ? (
        <div className="bg-[#100820] rounded-2xl border border-purple-900/40 p-6 sm:p-8 space-y-6 shadow-xl">
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-purple-300 font-bold">
              <span>السؤال {currentQuestionIndex + 1} من {QUIZ_DATA.length}</span>
              <span className="text-purple-400 font-mono">القانون المختبر: {currentQ.ruleTested}</span>
            </div>
            <div className="w-full bg-[#180e30] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_DATA.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Scenario Text */}
          <div className="bg-[#180e30] p-5 rounded-2xl border border-purple-800/40 space-y-2">
            <span className="text-xs font-bold text-purple-400">السيناريو الواقعي:</span>
            <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
              {currentQ.scenario}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswers[currentQ.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-4 rounded-xl border text-right transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-purple-600/25 border-purple-500 text-white glow-purple'
                      : 'bg-[#140b29] border-purple-900/40 text-purple-200 hover:bg-[#1a0f36] hover:border-purple-700/60'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected ? 'bg-purple-600 text-white' : 'bg-purple-950 text-purple-400 border border-purple-800/40'
                  }`}>
                    {opt.id.toUpperCase()}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next / Prev Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-purple-900/40">
            <button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 rounded-xl bg-[#180e30] text-purple-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-900/40 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <ArrowRight className="w-4 h-4" />
              <span>السؤال السابق</span>
            </button>

            {currentQuestionIndex < QUIZ_DATA.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                disabled={!selectedAnswers[currentQ.id]}
                className="px-5 py-2 rounded-xl bg-purple-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition glow-purple"
              >
                <span>السؤال التالي</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitted(true)}
                disabled={Object.keys(selectedAnswers).length < QUIZ_DATA.length}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition shadow-lg"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>إنهاء الاختبار وعرض النتيجة</span>
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Results & Certificate Screen */
        <div className="bg-[#100820] rounded-2xl border border-purple-900/40 p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
          
          <div className="text-center space-y-3">
            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${
              isPassed ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500 glow-purple' : 'bg-red-950/80 text-red-400 border border-red-500'
            }`}>
              {isPassed ? <Medal className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            </div>

            <h3 className="text-2xl font-black text-white">
              {isPassed ? '🎉 مبروك! لقد اجتزت اختبار قوانين الرول بلاي بنجاح' : '❌ للأسف لم تجتز الاختبار، تحتاج لمراجعة القوانين'}
            </h3>

            <p className="text-sm text-purple-300 font-medium">
              درجتك: <strong className="text-white text-lg font-mono">{score}</strong> من <strong className="text-white text-lg font-mono">{QUIZ_DATA.length}</strong> ({percentage}%)
            </p>
          </div>

          {/* Certificate Card */}
          {isPassed && (
            <div className="bg-gradient-to-b from-[#1c1038] to-[#120824] p-6 rounded-2xl border border-purple-500/50 space-y-4 glow-purple">
              <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
                <span className="text-xs font-bold text-purple-300">شهادة اجتياز اختبار ريسبكت للرول بلاي</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-600/40">معتمد ✓</span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-purple-300">أدخل اسمك أو يوزرك في الديسكورد لتوثيق الشهادة:</label>
                  <input
                    type="text"
                    placeholder="مثال: Sultan_Gamer#1234"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full bg-[#180e30] text-white text-xs rounded-xl p-2.5 border border-purple-800/60 focus:outline-none focus:border-purple-400 font-mono"
                  />
                </div>

                <button
                  onClick={copyCertificate}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  {copiedCert ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCert ? 'تم نسخ كود الشهادة!' : 'نسخ كود التفعيل للديسكورد'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Questions Breakdown */}
          <div className="space-y-4 pt-4 border-t border-purple-900/40">
            <h4 className="text-sm font-bold text-purple-300">مراجعة إجاباتك وشرح الأخطاء:</h4>
            
            {QUIZ_DATA.map((q, idx) => {
              const chosen = selectedAnswers[q.id];
              const correctOpt = q.options.find(o => o.isCorrect);
              const isCorrect = chosen === correctOpt?.id;

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-xl border space-y-2 text-xs ${
                    isCorrect ? 'bg-emerald-950/20 border-emerald-800/40' : 'bg-red-950/20 border-red-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-white">س{idx + 1}: {q.ruleTested}</span>
                    <span className={isCorrect ? 'text-emerald-400' : 'text-red-400'}>
                      {isCorrect ? 'إجابة صحيحة ✓' : 'إجابة خاطئة ✗'}
                    </span>
                  </div>
                  <p className="text-purple-200/80">{q.scenario}</p>
                  <div className="bg-[#140b28] p-2.5 rounded-lg border border-purple-900/40 text-purple-300">
                    <strong>الإجابة النموذجية:</strong> {correctOpt?.text}
                    <div className="text-[11px] text-purple-400 mt-1">
                      💡 <strong>السبب:</strong> {correctOpt?.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset Button */}
          <div className="pt-2 text-center">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 font-bold text-xs flex items-center justify-center gap-2 mx-auto transition border border-purple-700/40"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الاختبار مرة أخرى</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
