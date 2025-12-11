import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Activity, ShieldCheck, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ProjectScoper: React.FC = () => {
  const { t } = useLanguage();
  const logsData = t.ai.terminal.logs;
  
  const [logs, setLogs] = useState<{text: string, type: string, id: number}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset simulation when language changes to show localized logs immediately
  useEffect(() => {
    setLogs([]);
    setCurrentIndex(0);
  }, [t]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    // Default delay if not specified in translation file (which it isn't, so we calculate or hardcode)
    const baseDelay = 1500; 

    const runSequence = () => {
      const step = logsData[currentIndex];
      
      // Variable speed based on log type to simulate processing
      const stepDelay = step.type === 'process' ? 2500 : step.type === 'code' ? 800 : 1200;

      timeout = setTimeout(() => {
        setLogs(prev => {
          const newLogs = [...prev, { ...step, id: Date.now() }];
          if (newLogs.length > 12) return newLogs.slice(1);
          return newLogs;
        });

        setCurrentIndex(prev => (prev + 1) % logsData.length);
      }, stepDelay);
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [currentIndex, logsData]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getLogColor = (type: string) => {
    switch(type) {
      case 'warning': return 'text-yellow-500';
      case 'success': return 'text-green-500';
      case 'code': return 'text-slate-400 pl-4';
      case 'process': return 'text-blue-400';
      default: return 'text-slate-300';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-slate-800 shadow-2xl flex flex-col h-[450px] relative overflow-hidden font-mono text-xs md:text-sm">
      {/* Fake CRT Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      
      {/* Header */}
      <div className="bg-slate-900/80 p-3 border-b border-slate-800 flex items-center justify-between z-10 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <Terminal className="w-4 h-4 text-brand-primary" />
          <span className="font-bold text-slate-200 tracking-widest uppercase">{t.ai.terminal.title}</span>
        </div>
        <div className="flex space-x-2">
           <Activity className="w-4 h-4 text-green-500 animate-pulse" />
           <span className="text-green-500">{t.ai.terminal.live}</span>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 p-6 overflow-hidden relative z-10 flex flex-col justify-end" ref={scrollRef}>
        <div className="space-y-2">
          {logs.map((log) => (
            <div key={log.id} className={`${getLogColor(log.type)} font-mono tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <span className="opacity-50 mr-3">[{new Date(log.id).toISOString().split('T')[1].split('.')[0]}]</span>
              {log.text}
            </div>
          ))}
          <div className="flex items-center text-brand-primary mt-2">
            <span className="mr-2">_</span>
            <span className="animate-pulse bg-brand-primary h-4 w-2 block"></span>
          </div>
        </div>
      </div>

      {/* Stat Bar */}
      <div className="bg-slate-900 border-t border-slate-800 p-3 flex justify-between text-xs text-slate-500 z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
             <Cpu className="w-3 h-3" />
             <span>{t.ai.terminal.cpu}: 12%</span>
          </div>
          <div className="flex items-center space-x-1">
             <Server className="w-3 h-3" />
             <span>{t.ai.terminal.mem}: 64TB</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-slate-400">
           <ShieldCheck className="w-3 h-3" />
           <span>{t.ai.terminal.secure}</span>
        </div>
      </div>
    </div>
  );
};