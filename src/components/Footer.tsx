import React from 'react';
import { Shield, Radio, Heart, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-[#090512] border-t border-purple-900/30 text-purple-300/70 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-purple-900/30 pb-8">
          
          {/* Logo & Description */}
          <div className="flex items-center gap-3 text-center md:text-right">
            <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-600/40 flex items-center justify-center text-purple-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-base font-black text-white">RESPECT<span className="text-purple-400">LAW</span></span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800/40">CFW RP</span>
              </div>
              <p className="text-xs text-purple-400/80">دستور وقوانين سيرفر ريسبكت فايف ام الرسمي</p>
            </div>
          </div>

          {/* Social & Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 text-[#8ea1e1] hover:text-white px-4 py-2 rounded-xl text-xs font-bold border border-[#5865F2]/40 transition"
            >
              <Radio className="w-4 h-4 text-[#5865F2]" />
              <span>مجتمع الديسكورد الرسمي</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={onScrollToTop}
              className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-purple-300 hover:text-white border border-purple-800/40 transition"
              title="العودة لأعلى الصفحة"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400/60">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} سيرفر Respect Law CFW. صُمم بأعلى معايير الرول بلاي والعدالة.
          </p>
          <div className="flex items-center gap-4">
            <span>CFW Engine v3.8</span>
            <span>•</span>
            <span>FiveM Roleplay Laws & Rules</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
