import React from 'react';
import { Navbar } from './components/Navbar';
import { TECH_STACK, COMPANY_DETAILS } from './constants';
import { ProjectScoper } from './components/ProjectScoper';
import { Code, Server, Cpu, Smartphone, Gamepad2, Workflow, ExternalLink, Github, Mail, Globe, Code2, ArrowRight, Terminal, MapPin, Phone } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (title: string) => {
    // Basic heuristics to match localized titles to icons, since translation strings vary
    const lower = title.toLowerCase();
    if (lower.includes('web') || lower.includes('cloud') || lower.includes('nube')) return <Server className="w-5 h-5 text-white" />;
    if (lower.includes('mobile') || lower.includes('móvil') || lower.includes('nativa')) return <Smartphone className="w-5 h-5 text-white" />;
    if (lower.includes('backend') || lower.includes('distrib')) return <Server className="w-5 h-5 text-white" />;
    if (lower.includes('analysis') || lower.includes('análisis') || lower.includes('neural')) return <Cpu className="w-5 h-5 text-white" />;
    if (lower.includes('game') || lower.includes('juego')) return <Gamepad2 className="w-5 h-5 text-white" />;
    if (lower.includes('auto') || lower.includes('flujo')) return <Workflow className="w-5 h-5 text-white" />;
    if (lower.includes('factory') || lower.includes('fábrica')) return <Code className="w-5 h-5 text-white" />;
    return <Code className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-primary selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 border-b border-slate-800">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.05] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 mb-6">
                 <div className="w-1.5 h-1.5 bg-brand-primary"></div>
                 <span className="text-xs font-mono text-brand-primary uppercase tracking-wider">{t.hero.status_label_global}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-none">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#consult" className="px-6 py-3 bg-white text-black hover:bg-slate-200 font-bold text-sm uppercase tracking-wide transition-all flex items-center rounded-sm">
                  {t.hero.cta_primary} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a href="#work" className="px-6 py-3 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-bold text-sm uppercase tracking-wide transition-all rounded-sm">
                  {t.hero.cta_secondary}
                </a>
              </div>
            </div>
            
            {/* Abstract Technical Graphic */}
            <div className="hidden lg:flex justify-end relative">
               <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-6 relative shadow-2xl">
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-brand-primary"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-brand-primary"></div>
                  
                  <div className="mb-4 border-b border-slate-800 pb-2 flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-500">{t.hero.stack_title}</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-800"></div>
                      <div className="w-2 h-2 bg-slate-800"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     {TECH_STACK.slice(0, 6).map((tech, i) => (
                       <div key={tech} className="bg-slate-950 p-3 border-l-2 border-slate-800 hover:border-brand-primary transition-colors group cursor-default">
                          <div className="text-xs text-slate-500 font-mono mb-1 group-hover:text-brand-primary transition-colors">0{i+1}</div>
                          <div className="text-sm font-bold text-white">{tech}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
          
          {/* Tech Stack Strip */}
          <div className="mt-24 border-t border-slate-900 pt-8">
             <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
               <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">{t.hero.tech_strip_label}</span>
               {TECH_STACK.map((tech) => (
                 <span key={tech} className="text-sm font-medium text-slate-500 hover:text-white transition-colors cursor-default uppercase">
                   {tech}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-6">
            <div>
              <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">{t.services.label}</h2>
              <p className="text-3xl font-bold text-white">
                {t.services.title}
              </p>
            </div>
            <p className="text-slate-500 text-sm max-w-md mt-4 md:mt-0 text-right md:text-right">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
            {t.services.list.map((service) => (
              <div key={service.id} className="bg-slate-950 p-8 hover:bg-slate-900 transition-colors group">
                <div className="mb-6 inline-flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-800 text-white group-hover:border-brand-primary group-hover:bg-brand-primary transition-all rounded-sm">
                  {getIcon(service.title)}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="w-8 h-1 bg-slate-800 group-hover:bg-brand-primary transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Work Section */}
      <section id="work" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-mono text-brand-primary tracking-widest uppercase mb-2">{t.work.label}</h2>
              <p className="text-3xl font-bold text-white">
                {t.work.title}
              </p>
            </div>
            <a href={COMPANY_DETAILS.github} className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors mt-4 md:mt-0 text-sm font-mono uppercase">
              {t.work.git_link} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.work.list.map((project) => (
              <div key={project.id} className="group bg-slate-950 border border-slate-800 hover:border-slate-600 transition-all flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 border-b md:border-b-0 md:border-r border-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
                <div className="p-8 w-full md:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{project.title}</h3>
                        <div className="h-0.5 w-12 bg-brand-primary mt-3"></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 text-[10px] font-mono uppercase bg-slate-900 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <a href={COMPANY_DETAILS.github} className="inline-flex items-center text-brand-primary font-bold uppercase text-sm">
              {t.work.view_all} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AI Simulation Section */}
      <section id="consult" className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <Terminal className="w-6 h-6 text-brand-primary" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{t.ai.label}</h2>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                {t.ai.title}
              </h3>
              <p className="text-lg text-slate-400 mb-8 border-l-2 border-brand-primary pl-4">
                {t.ai.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono text-white">01</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-sm uppercase">{t.ai.step1_title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{t.ai.step1_desc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono text-white">02</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-sm uppercase">{t.ai.step2_title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{t.ai.step2_desc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono text-white">03</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-sm uppercase">{t.ai.step3_title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{t.ai.step3_desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-brand-primary/5 border border-brand-primary/10 hidden lg:block"></div>
               <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-slate-800/30 border border-slate-700 hidden lg:block"></div>
               <ProjectScoper />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
                <p className="text-slate-400 mb-8 max-w-md">
                  {t.contact.description}
                </p>
                <div className="flex flex-col space-y-4">
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="inline-flex items-center text-white hover:text-brand-primary transition-colors">
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="text-lg font-mono">{COMPANY_DETAILS.email}</span>
                  </a>
                  <a href={COMPANY_DETAILS.github} className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5 mr-3" />
                    <span className="text-base font-mono">github.com/OpenDNDApps</span>
                  </a>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
               {t.contact.locations.map((loc) => (
                 <div key={loc.country} className="bg-slate-950 p-6 border border-slate-800 hover:border-brand-primary/50 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-primary mb-4" />
                    <div className="text-xl font-bold text-white mb-1 uppercase">{loc.country}</div>
                    <div className="text-slate-500 mb-4 whitespace-pre-line leading-relaxed h-12">
                      {loc.address}
                    </div>
                    <div className="flex items-center text-slate-400 mt-6 pt-4 border-t border-slate-900">
                      <Phone className="w-3 h-3 mr-2" />
                      {loc.phone}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
             <div className="bg-slate-900 p-1 mr-2">
               <Code2 className="h-5 w-5 text-slate-400" />
             </div>
             <span className="text-slate-400 font-bold uppercase tracking-wider text-sm">OpenDND</span>
          </div>
          <div className="flex space-x-6 text-sm font-mono text-slate-600">
            <span>{t.footer.established}</span>
            <span>{t.footer.ready}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;