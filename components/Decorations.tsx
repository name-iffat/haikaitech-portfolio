import React from 'react';

export const ScribbleUnderline: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C30 5 130 5 198 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" className="opacity-60"/>
    <path d="M5 15C33 8 133 8 195 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-40"/>
  </svg>
);

export const ArrowSketch: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 40C25 40 35 30 45 10M45 10V25M45 10H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="0" />
  </svg>
);

export const BracketCorner: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute w-4 h-4 border-slate-400 ${className}`} />
);

export const StylizedCorner: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M35 5L35 15L25 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <path d="M5 35L15 35L15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <rect x="18" y="18" width="4" height="4" fill="currentColor" className="animate-pulse" />
  </svg>
);

export const Tape: React.FC<{ className?: string; rotation?: string }> = ({ className, rotation = "-rotate-3" }) => (
  <div className={`absolute h-8 w-24 bg-yellow-100/90 shadow-sm z-20 pointer-events-none backdrop-blur-sm border-l border-r border-white/50 ${rotation} ${className}`} 
       style={{
         clipPath: 'polygon(2% 0%, 98% 0%, 100% 10%, 98% 20%, 100% 30%, 98% 40%, 100% 50%, 98% 60%, 100% 70%, 98% 80%, 100% 90%, 98% 100%, 2% 100%, 0% 90%, 2% 80%, 0% 70%, 2% 60%, 0% 50%, 2% 40%, 0% 30%, 2% 20%, 0% 10%)'
       }}>
  </div>
);

export const Sticker: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`absolute flex items-center justify-center rounded-full bg-white border-2 border-slate-800 shadow-[4px_4px_0px_0px_rgba(30,41,59,0.2)] font-hand font-bold text-slate-800 z-30 transform hover:scale-110 transition-transform cursor-default select-none ${className}`}>
    {children}
  </div>
);

export const HandCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50C10 20 50 10 150 10C250 10 290 20 290 50C290 80 250 90 150 90C50 90 10 80 10 50Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6"/>
  </svg>
);

export const DoodleStar: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute pointer-events-none ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);