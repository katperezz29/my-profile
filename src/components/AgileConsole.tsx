import { useState } from 'react';
import { ShieldCheck, Clock, Users, Zap, CheckCircle2, Award, ArrowUpRight, BarChart3, HelpCircle } from 'lucide-react';
import { SCRUM_CEREMONIES, PROFILE_INFO } from '../data/profileData';

export default function AgileConsole() {
  const [activeCeremonyId, setActiveCeremonyId] = useState<string>('daily-standup');

  const activeCeremony =
    SCRUM_CEREMONIES.find((c) => c.id === activeCeremonyId) || SCRUM_CEREMONIES[0];

  return (
    <section id="agile-console" className="py-16 md:py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Agile Leadership & Scrum Master Console</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Predictable Sprints, High Velocity & 99.9% Uptime
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              Serving as Scrum Master during international Singapore and Philippine engagements, Katrine unblocks engineers, aligns product stakeholders, and delivers zero-defect releases.
            </p>
          </div>

          {/* Key Metrics Counter */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.9%</div>
              <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Uptime Maintained</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">3</div>
              <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Live Sites Supported</div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">8+ Yrs</div>
              <div className="text-[11px] text-neutral-400 font-medium mt-0.5">Agile Ceremonies</div>
            </div>
          </div>
        </div>

        {/* Interactive Ceremonies Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Ceremony Selector Buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-1 pb-1">
              Agile Ceremonies Facilitated
            </div>
            {SCRUM_CEREMONIES.map((ceremony) => {
              const isActive = ceremony.id === activeCeremonyId;
              return (
                <button
                  key={ceremony.id}
                  onClick={() => setActiveCeremonyId(ceremony.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-neutral-800 border-emerald-500/80 text-white shadow-sm'
                      : 'bg-neutral-800/40 border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm tracking-tight text-white">
                      {ceremony.title}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    )}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {ceremony.cadence}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Ceremony Deep Dive */}
          <div className="lg:col-span-8 bg-neutral-800/90 rounded-2xl p-6 sm:p-8 border border-neutral-700/90 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-700">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeCeremony.title}
                </h3>
                <span className="text-xs text-emerald-400 font-semibold mt-0.5 block">
                  Cadence: {activeCeremony.cadence}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-700 text-xs text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>Strict Timebox Enforced</span>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Primary Goal & Team Benefit
              </span>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                {activeCeremony.objective}
              </p>
            </div>

            {/* Methods & Best Practices */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Practical Execution by Katrine
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCeremony.methods.map((method, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-700/60 flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Principle Quote */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border-l-4 border-emerald-400 text-xs sm:text-sm text-neutral-300 italic">
              &ldquo;{activeCeremony.quote}&rdquo;
            </div>

          </div>

        </div>

        {/* Real-time Collaboration & Timezone Overlap Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Cross-Functional Team Collaboration
            </div>
            <div className="text-lg font-bold text-white">
              Proven Experience Leading Distributed Global Engineering
            </div>
            <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
              Based in Taguig City (UTC+8), with seamless same-day overlap across Singapore (UTC+8), Australia (AEST), and direct evening/morning sync windows with Europe (CET) and US East Coast.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 text-xs font-semibold border border-neutral-700">
              Singapore SGT · 100% Match
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 text-xs font-semibold border border-neutral-700">
              Australia AEST · +2 hrs
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 text-xs font-semibold border border-neutral-700">
              US & Europe Overlap Ready
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
