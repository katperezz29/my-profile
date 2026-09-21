import { Code, Server, Cloud, Shield, Users, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Platforms & Frameworks':
        return <Code className="w-5 h-5 text-neutral-800" />;
      case 'Backend & Databases':
        return <Server className="w-5 h-5 text-neutral-800" />;
      case 'Workflow & Cloud Infrastructure':
        return <Cloud className="w-5 h-5 text-neutral-800" />;
      case 'Authentication & Third-Party Integrations':
        return <Shield className="w-5 h-5 text-neutral-800" />;
      case 'Methodology & Leadership':
        return <Users className="w-5 h-5 text-neutral-800" />;
      default:
        return <Code className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-50/70 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-1">
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-sm text-neutral-600">
            Technical skills and tooling honed over 10+ years of production delivery.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((catGroup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                  <div className="p-2 rounded-lg bg-neutral-100">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 leading-tight">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {skill.years && (
                          <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                            {skill.years}
                          </span>
                        )}
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            skill.level === 'Expert'
                              ? 'bg-neutral-900 text-white'
                              : skill.level === 'Advanced'
                              ? 'bg-neutral-200 text-neutral-800'
                              : 'bg-neutral-100 text-neutral-600'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-400 font-medium">
                Production-verified engineering competencies
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
