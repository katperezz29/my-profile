import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, FileText, ArrowDown, ExternalLink, ShieldCheck, Clock, Zap, Cpu, Users, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';
import { PersonaMode } from '../types';

interface HeroProps {
  personaMode: PersonaMode;
  onSelectPersona: (mode: PersonaMode) => void;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export default function Hero({
  personaMode,
  onSelectPersona,
  onOpenResumeModal,
  onOpenContactModal
}: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [manilaTime, setManilaTime] = useState<string>('');
  const [isBusinessHours, setIsBusinessHours] = useState<boolean>(true);

  // Live Manila Time Clock (UTC+8)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Asia/Manila
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
      setManilaTime(timeStr);

      // Check if 8 AM - 7 PM in Manila
      const hourFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        hour12: false
      });
      const hour = parseInt(hourFormatter.format(now), 10);
      setIsBusinessHours(hour >= 8 && hour <= 20);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  // Dynamic content depending on persona mode
  const personaDetails = {
    all: {
      headline: 'Senior Software Engineer & Scrum Master',
      subline: 'Full-Stack Web Platforms · Temporal Workflows · Agile Delivery',
      summary:
        'Senior Software Engineer & Scrum Master with over 10 years of experience building scalable web and mobile applications using React, Nuxt 3, Vue 3, and NestJS. Proven delivery in Singapore and Philippine tech ecosystems maintaining 99.9% uptime and high team velocity.',
      accentBadge: 'Open for Senior SWE & Scrum Master Roles'
    },
    engineering: {
      headline: 'Senior Full-Stack Software Engineer',
      subline: 'React.js · Nuxt 3 · NestJS · Temporal · AWS Cloud Architecture',
      summary:
        'Full-stack engineer with deep expertise across modern TypeScript microservices, high-performance web frontends, and distributed asynchronous workflows. Built 4 commercial platforms from scratch with zero-defect release discipline.',
      accentBadge: 'Specialized in Full-Stack & Cloud Architecture'
    },
    scrum: {
      headline: 'Certified Scrum Master & Agile Delivery Lead',
      subline: 'Ceremony Facilitation · Team Impediment Removal · 99.9% Uptime',
      summary:
        'Experienced Agile leader facilitating bi-weekly sprint planning, daily blocker removal, and cross-timezone stakeholder collaboration. Track record of empowering international engineering teams to increase velocity and maintain 99.9% uptime.',
      accentBadge: 'Focused on Agile Leadership & Delivery Excellence'
    }
  }[personaMode];

  return (
    <section id="hero" className="pt-28 pb-14 md:pt-34 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Audience Lens Switcher */}
        <div className="mb-8 p-1.5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs inline-flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-neutral-400 pl-3 pr-2 hidden sm:inline">
            Explore Katrine&apos;s Profile As:
          </span>
          <button
            onClick={() => onSelectPersona('all')}
            id="hero-lens-all"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
              personaMode === 'all'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Overview</span>
          </button>
          <button
            onClick={() => onSelectPersona('engineering')}
            id="hero-lens-engineering"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
              personaMode === 'engineering'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Full-Stack Engineer</span>
          </button>
          <button
            onClick={() => onSelectPersona('scrum')}
            id="hero-lens-scrum"
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
              personaMode === 'scrum'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Scrum Master</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Live Clock Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personaDetails.accentBadge}</span>
              </div>

              {/* Manila Live Time Clock */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/80 text-neutral-700 text-xs font-medium"
                title="Local time in Taguig City, Philippines (UTC+8)"
              >
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>Manila: <strong className="font-mono text-neutral-900">{manilaTime || 'UTC+8'}</strong></span>
                <span className="text-[10px] text-emerald-600 font-semibold pl-1">
                  ({isBusinessHours ? 'Active' : 'Standby'})
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
                Katrine Perez
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-neutral-800 transition-all duration-300">
                {personaDetails.headline}
              </p>
              <p className="text-sm font-semibold text-neutral-500">
                {personaDetails.subline}
              </p>
            </div>

            {/* Bio Summary */}
            <p className="text-base text-neutral-600 leading-relaxed max-w-xl transition-all duration-300">
              {personaDetails.summary}
            </p>

            {/* Quick Location & Direct Details */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-neutral-600">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>Taguig City, Philippines</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>+63 926 208 0172</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* Interactive Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                id="hero-view-portfolio-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-role-match-btn"
                onClick={() => {
                  const elem = document.getElementById('role-matchmaker');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 text-sm font-semibold rounded-xl transition-colors"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Role Matchmaker</span>
              </button>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-sm font-semibold rounded-xl transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-neutral-600" />
                <span>Full Resume</span>
              </button>

              <button
                onClick={onOpenContactModal}
                id="hero-send-email-btn"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-600" />
                <span>Inquire</span>
              </button>
            </div>

            {/* Interactive Email Copy Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-neutral-500 font-medium">Quick copy email:</span>
              {PROFILE_INFO.emails.map((e) => (
                <button
                  key={e.address}
                  onClick={() => handleCopy(e.address)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-neutral-700 hover:border-neutral-400 transition-colors shadow-2xs"
                  title="Click to copy"
                >
                  <span className="font-mono text-[11px]">{e.address}</span>
                  {copiedEmail === e.address ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Mail className="w-3 h-3 text-neutral-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Card & Key Metrics Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs space-y-5 hover:shadow-md transition-shadow">
              
              {/* Profile Headshot & Header */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={PROFILE_INFO.avatar}
                    alt="Katrine Perez"
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-2xl object-cover border border-neutral-200 shadow-sm"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 text-lg leading-tight">
                    Katrine Perez
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium">
                    Deltek &bull; Pollen Tech
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">
                    Senior SWE &bull; Scrum Master
                  </span>
                </div>
              </div>

              {/* Dynamic Tech Highlight based on selected Persona */}
              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-100 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  <span>
                    {personaMode === 'engineering'
                      ? 'Engineering Stack'
                      : personaMode === 'scrum'
                      ? 'Agile & Delivery Tools'
                      : 'Core Competencies'}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold lowercase">
                    {personaMode}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-neutral-700">
                  {personaMode === 'scrum' ? (
                    <>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Sprint Planning</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Daily Standup</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Retrospectives</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Defect Triage</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">99.9% Uptime</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Stakeholder Demos</span>
                    </>
                  ) : personaMode === 'engineering' ? (
                    <>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">React.js / Next</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Nuxt 3 / Vue 3</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">NestJS / Node</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Temporal Workflows</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">AWS Cloud</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">TypeORM / MySQL</span>
                    </>
                  ) : (
                    <>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">React / Next</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Nuxt 3 / Vue</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">NestJS / Node</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Scrum Master</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Temporal Workflows</span>
                      <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Cordova Mobile</span>
                    </>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {PROFILE_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 flex flex-col justify-center transition-all hover:bg-white hover:border-neutral-300"
                  >
                    <span className="text-xl font-bold text-neutral-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education Note */}
              <div className="pt-2 text-center text-xs text-neutral-500 border-t border-neutral-100">
                Education: <span className="font-medium text-neutral-700">MSIT (PUP), BSIT (PLP)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
