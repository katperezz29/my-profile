import { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RefreshCw, Briefcase, Code, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, EXPERIENCES } from '../data/profileData';

interface RoleMatchmakerProps {
  onSelectProject: (project: Project) => void;
  onOpenContactModal: (presetSubject?: string) => void;
}

const AVAILABLE_REQUIREMENTS = [
  { id: 'react', label: 'React.js & Next.js', category: 'Frontend' },
  { id: 'nuxt', label: 'Nuxt 3 & Vue 3', category: 'Frontend' },
  { id: 'nest', label: 'NestJS & TypeORM', category: 'Backend' },
  { id: 'scrum', label: 'Scrum Master / Agile Lead', category: 'Leadership' },
  { id: 'temporal', label: 'Temporal Workflows', category: 'Architecture' },
  { id: 'mobile', label: 'Mobile Apps (Cordova / ExtJS)', category: 'Mobile' },
  { id: 'aws', label: 'AWS & CI/CD Pipelines', category: 'DevOps' },
  { id: 'auth', label: 'Auth0 / SSO Security', category: 'Security' },
  { id: 'triage', label: 'Defect Triage & High Uptime', category: 'Reliability' }
];

export default function RoleMatchmaker({ onSelectProject, onOpenContactModal }: RoleMatchmakerProps) {
  const [selectedReqs, setSelectedReqs] = useState<string[]>(['react', 'nuxt', 'scrum']);

  const toggleReq = (id: string) => {
    setSelectedReqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectPreset = (preset: 'frontend' | 'fullstack' | 'scrum' | 'all') => {
    switch (preset) {
      case 'frontend':
        setSelectedReqs(['react', 'nuxt', 'mobile']);
        break;
      case 'fullstack':
        setSelectedReqs(['react', 'nuxt', 'nest', 'aws', 'auth']);
        break;
      case 'scrum':
        setSelectedReqs(['scrum', 'triage', 'aws', 'nuxt']);
        break;
      case 'all':
        setSelectedReqs(AVAILABLE_REQUIREMENTS.map((r) => r.id));
        break;
    }
  };

  // Match scoring
  const matchPercentage =
    selectedReqs.length === 0
      ? 100
      : Math.min(100, Math.round(85 + (selectedReqs.length / AVAILABLE_REQUIREMENTS.length) * 15));

  // Determine matching projects
  const matchingProjects = PROJECTS.filter((p) => {
    if (selectedReqs.length === 0) return true;
    if (selectedReqs.includes('react') && p.id === 'pollen-marketplace') return true;
    if (selectedReqs.includes('nuxt') && p.id === 'pollen-lms') return true;
    if (selectedReqs.includes('scrum') && p.id === 'pollen-lms') return true;
    if (selectedReqs.includes('temporal') && p.id === 'pollen-lms') return true;
    if (selectedReqs.includes('nest') && p.id === 'pollen-lms') return true;
    if (selectedReqs.includes('mobile') && p.id === 'activelink-mobile') return true;
    if (selectedReqs.includes('aws') && (p.id === 'pollen-lms' || p.id === 'pollen-marketplace')) return true;
    return false;
  });

  return (
    <section id="role-matchmaker" className="py-14 bg-white border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Interactive Role Matchmaker
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Does Katrine Match Your Hiring Needs?
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
              Select the skills and responsibilities your team requires to see direct project proof, metrics, and experience alignment.
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-400 font-medium">Quick presets:</span>
            <button
              onClick={() => selectPreset('fullstack')}
              className="px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 transition-colors"
            >
              Full-Stack SWE
            </button>
            <button
              onClick={() => selectPreset('scrum')}
              className="px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 transition-colors"
            >
              Scrum Master
            </button>
            <button
              onClick={() => selectPreset('frontend')}
              className="px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 transition-colors"
            >
              Frontend Lead
            </button>
            <button
              onClick={() => selectPreset('all')}
              className="px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-700 transition-colors"
            >
              Select All
            </button>
          </div>
        </div>

        {/* Interactive Matchmaker Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Requirement Chips Selector */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl p-6 border border-neutral-200/90 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-700 pb-2 border-b border-neutral-200">
              <span>Select skills & capabilities you need:</span>
              <span className="text-neutral-500 font-normal">
                {selectedReqs.length} of {AVAILABLE_REQUIREMENTS.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {AVAILABLE_REQUIREMENTS.map((req) => {
                const isSelected = selectedReqs.includes(req.id);
                return (
                  <button
                    key={req.id}
                    onClick={() => toggleReq(req.id)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left text-xs font-medium transition-all duration-200 border ${
                      isSelected
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100/50'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold">{req.label}</div>
                      <div className={`text-[11px] ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                        {req.category}
                      </div>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-white bg-white text-neutral-900'
                          : 'border-neutral-300 bg-transparent'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Match Calculation & Proof Panel */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 sm:p-7 space-y-6 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  Match Assessment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                    {matchPercentage}%
                  </span>
                  <span className="text-sm font-medium text-neutral-300">
                    High Compatibility
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block font-medium">Experience</span>
                <span className="text-lg font-bold text-white">10+ Years</span>
              </div>
            </div>

            {/* Evidence summary */}
            <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Proven Production Track Record:</strong> Delivered 4 commercial web and mobile platforms with 99.9% uptime.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Dual Strength:</strong> Experienced as both technical hands-on engineer (React/Nuxt/NestJS) and certified Scrum Master.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>International Experience:</strong> Collaborated with teams in Singapore, Philippines, and global clients at Deltek Systems.
                </span>
              </div>
            </div>

            {/* Direct Project Proof Links */}
            {matchingProjects.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  Demonstrated in these platforms:
                </span>
                <div className="flex flex-wrap gap-2">
                  {matchingProjects.slice(0, 3).map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => onSelectProject(proj)}
                      className="px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-neutral-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{proj.title}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenContactModal(
                    `Opportunity Discussion: ${selectedReqs.map((r) => AVAILABLE_REQUIREMENTS.find((x) => x.id === r)?.label).join(', ')}`
                  )
                }
                id="matchmaker-inquire-btn"
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Initiate Discussion with Katrine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
