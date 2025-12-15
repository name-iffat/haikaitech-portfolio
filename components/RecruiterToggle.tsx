import React from 'react';
import { ViewMode } from '../types';

interface RecruiterToggleProps {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

const RecruiterToggle: React.FC<RecruiterToggleProps> = ({ mode, setMode }) => {
  const isRecruiter = mode === ViewMode.RECRUITER;

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white/90 backdrop-blur border border-slate-200 p-1.5 rounded-full shadow-lg">
        <span className={`text-xs font-mono font-bold uppercase transition-colors px-2 ${!isRecruiter ? 'text-slate-800' : 'text-slate-400'}`}>
            Standard
        </span>
        <button 
            onClick={() => setMode(isRecruiter ? ViewMode.STANDARD : ViewMode.RECRUITER)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 ${isRecruiter ? 'bg-slate-800' : 'bg-slate-200'}`}
            aria-label="Toggle Recruiter Mode"
        >
            <span 
                className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecruiter ? 'translate-x-6' : 'translate-x-0'}`}
            />
        </button>
        <span className={`text-xs font-mono font-bold uppercase transition-colors px-2 ${isRecruiter ? 'text-slate-800' : 'text-slate-400'}`}>
            Recruiter Mode
        </span>
    </div>
  );
};

export default RecruiterToggle;