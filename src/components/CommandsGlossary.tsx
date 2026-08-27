import React, { useState } from 'react';
import { 
  Terminal, 
  BookA, 
  Copy, 
  Check, 
  Search, 
  Play, 
  Sparkles, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { COMMANDS_DATA } from '../data/commandsData';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { CommandItem, TermItem } from '../types';

export const CommandsGlossary: React.FC = () => {
  const [subTab, setSubTab] = useState<'glossary' | 'commands' | 'sandbox'>('glossary');
  const [searchWord, setSearchWord] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // /me & /do sandbox simulation state
  const [sandboxMe, setSandboxMe] = useState('يخرج بطاقة الهوية من محفظته الجلدية ويسلمها للضابط');
  const [sandboxDo, setSandboxDo] = useState('هل تظهر البطاقة أنها سارية المفعول؟');
  const [sandboxResponse, setSandboxResponse] = useState('نعم، البطاقة صادرة حديثاً ولا يوجد عليها أي تعميم أمني.');

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredGlossary = GLOSSARY_DATA.filter(item => {
    const q = searchWord.toLowerCase();
    return (
      item.term.toLowerCase().includes(q) ||
      (item.abbr && item.abbr.toLowerCase().includes(q)) ||
      item.meaningAr.toLowerCase().includes(q) ||
      item.detailedExplanation.toLowerCase().includes(q)
    );
  });

  const filteredCommands = COMMANDS_DATA.filter(cmd => {
    const q = searchWord.toLowerCase();
    return (
      cmd.command.toLowerCase().includes(q) ||
      cmd.descriptionAr.toLowerCase().includes(q) ||
      cmd.usage.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-[#120a24] p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-900/60 flex items-center justify-center text-purple-400 glow-purple">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              قاموس مصطلحات فايف ام ودليل الأوامر النصية
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70">
              الدليل الشامل لفهم كافة مصطلحات الرول بلاي والتدريب على استخدام أوامر /me و /do باحترافية تامة.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setSubTab('glossary')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              subTab === 'glossary'
                ? 'bg-purple-600 text-white glow-purple'
                : 'bg-[#120a24] text-purple-300/80 hover:bg-purple-900/40 border border-purple-900/40'
            }`}
          >
            <BookA className="w-4 h-4" />
            <span>قاموس المصطلحات ({GLOSSARY_DATA.length})</span>
          </button>

          <button
            onClick={() => setSubTab('commands')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              subTab === 'commands'
                ? 'bg-purple-600 text-white glow-purple'
                : 'bg-[#120a24] text-purple-300/80 hover:bg-purple-900/40 border border-purple-900/40'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>أوامر السيرفر ({COMMANDS_DATA.length})</span>
          </button>

          <button
            onClick={() => setSubTab('sandbox')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              subTab === 'sandbox'
                ? 'bg-purple-600 text-white glow-purple'
                : 'bg-[#120a24] text-purple-300/80 hover:bg-purple-900/40 border border-purple-900/40'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>محاكي تدريب /me و /do</span>
          </button>
        </div>

        {subTab !== 'sandbox' && (
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="بحث في القاموس والأوامر..."
              className="w-full bg-[#180e30] text-white text-xs rounded-xl pr-9 pl-3 py-2.5 border border-purple-800/60 focus:outline-none focus:border-purple-400"
            />
            <Search className="w-4 h-4 text-purple-400 absolute right-3 top-3" />
          </div>
        )}
      </div>

      {/* Tab 1: Glossary */}
      {subTab === 'glossary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item) => (
            <div 
              key={item.id}
              className="bg-[#120a24] p-5 rounded-2xl border border-purple-900/40 space-y-3 hover:border-purple-600/50 transition shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-purple-900/40 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black text-white font-mono">{item.term}</span>
                    {item.abbr && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 font-mono">
                        {item.abbr}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-purple-400 font-medium">{item.pronunciationAr}</span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-purple-200">
                  {item.meaningAr}
                </p>

                <p className="text-xs text-purple-300/75 leading-relaxed">
                  {item.detailedExplanation}
                </p>
              </div>

              <div className="bg-[#180e30] p-3 rounded-xl border border-purple-800/40 text-xs text-purple-200/90">
                <span className="text-purple-400 font-bold block mb-1">💡 مثال واقعي:</span>
                <span>{item.exampleScenario}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Commands */}
      {subTab === 'commands' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCommands.map((cmd) => (
            <div 
              key={cmd.id}
              className="bg-[#120a24] p-5 rounded-2xl border border-purple-900/40 space-y-3 hover:border-purple-600/50 transition shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-black text-purple-300 bg-[#180e30] px-3 py-1 rounded-xl border border-purple-800/50">
                  {cmd.command}
                </span>

                <button
                  onClick={() => copyText(cmd.usage, cmd.id)}
                  className="p-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 text-purple-300 text-xs flex items-center gap-1 transition"
                  title="نسخ الأمر"
                >
                  {copiedId === cmd.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === cmd.id ? 'تم النسخ' : 'نسخ'}</span>
                </button>
              </div>

              <p className="text-xs text-purple-200 leading-relaxed font-medium">
                {cmd.descriptionAr}
              </p>

              <div className="space-y-1 text-xs">
                <span className="text-[11px] text-purple-400 font-bold block">طريقة الاستخدام والمثال:</span>
                <code className="block bg-[#0a0514] p-2.5 rounded-xl text-purple-200 font-mono border border-purple-950">
                  {cmd.usage}
                </code>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Interactive /me and /do Sandbox */}
      {subTab === 'sandbox' && (
        <div className="bg-[#120a24] p-6 sm:p-8 rounded-2xl border border-purple-900/40 space-y-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>محاكي التدريب على أوامر الرول بلاي النصية (/me و /do)</span>
            </h3>
            <p className="text-xs text-purple-300/70">
              جرب كتابة الأوامر وتخيل السيناريو لمعرفة كيف تظهر في شات اللعبة داخل سيرفر FiveM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Input Form */}
            <div className="space-y-4 bg-[#100820] p-5 rounded-2xl border border-purple-900/40">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-300">
                  فعل شخصيتك باستخدام (/me):
                </label>
                <input
                  type="text"
                  value={sandboxMe}
                  onChange={(e) => setSandboxMe(e.target.value)}
                  className="w-full bg-[#180e30] text-white text-xs rounded-xl p-3 border border-purple-800/60 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-300">
                  سؤال البيئة أو الخصم باستخدام (/do):
                </label>
                <input
                  type="text"
                  value={sandboxDo}
                  onChange={(e) => setSandboxDo(e.target.value)}
                  className="w-full bg-[#180e30] text-white text-xs rounded-xl p-3 border border-purple-800/60 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-purple-300">
                  إجابة الطرف الآخر الصادقة في (/do):
                </label>
                <input
                  type="text"
                  value={sandboxResponse}
                  onChange={(e) => setSandboxResponse(e.target.value)}
                  className="w-full bg-[#180e30] text-white text-xs rounded-xl p-3 border border-purple-800/60 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* In-Game Preview Box */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-400">معاينة الشات داخل اللعبة (In-Game HUD Preview):</span>
              
              <div className="bg-[#080410] p-5 rounded-2xl border border-purple-900/60 font-mono text-xs space-y-3 shadow-inner min-h-[220px] flex flex-col justify-center">
                
                {/* /me line (Usually Pink / Magenta in FiveM) */}
                <div className="text-[#f472b6] leading-relaxed">
                  * Sultan Al-Harbi {sandboxMe || '[فعل الشخصية هنا]'}
                </div>

                {/* /do Question (Usually Cyan / Blue in FiveM) */}
                <div className="text-[#38bdf8] leading-relaxed">
                  [DO] {sandboxDo || '[السؤال هنا]'} (( Sultan Al-Harbi ))
                </div>

                {/* /do Response (Cyan) */}
                <div className="text-[#38bdf8] leading-relaxed">
                  [DO] {sandboxResponse || '[إجابة الخصم هنا]'} (( Officer Khaled ))
                </div>

              </div>

              <div className="text-[11px] text-purple-300/70 bg-purple-950/40 p-3 rounded-xl border border-purple-900/30">
                💡 <strong>قاعدة ذهبية:</strong> أمر <code>/me</code> لا يجوز أن يقرر النتيجة المطلقة (مثال خاطئ: /me يسرق كل الفلوس ويموته)، بل يصف المحاولة ويترك الحكم لأمر <code>/do</code>.
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
