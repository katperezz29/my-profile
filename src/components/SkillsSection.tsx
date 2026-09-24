import { useState, useMemo } from 'react';
import { Code, Server, Cloud, Shield, Users, Check, Search, X, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profileData';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Expert' | 'Advanced' | 'Proficient'>('All');

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

  // Filter skills based on search query and level
  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((catGroup) => {
      const filteredSkills = catGroup.skills.filter((skill) => {
        const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = levelFilter === 'All' || skill.level === levelFilter;
        return matchesQuery && matchesLevel;
      });
      return {
        ...catGroup,
        skills: filteredSkills
      };
    }).filter((catGroup) => catGroup.skills.length > 0);
  }, [searchQuery, levelFilter]);

  const totalFilteredSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-50/70 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              03 · Core Competencies & Tooling
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Skills & Technical Stack
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl">
              Verified software engineering and Scrum competencies applied across 10+ years of production web, backend, and mobile delivery.
            </p>
          </div>

          {/* Search & Level Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Live Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech (e.g. React, NestJS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-xs pl-8 pr-8 py-2 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 w-full sm:w-56"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-xl">
              {(['All', 'Expert', 'Advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    levelFilter === lvl
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results summary bar */}
        {(searchQuery || levelFilter !== 'All') && (
          <div className="mb-6 flex items-center justify-between text-xs text-neutral-500 bg-white p-3 rounded-xl border border-neutral-200">
            <span>
              Showing <strong>{totalFilteredSkills}</strong> matching skill{totalFilteredSkills !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
              {levelFilter !== 'All' && ` (${levelFilter} level)`}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setLevelFilter('All');
              }}
              className="text-neutral-900 hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                  <div className="p-2 rounded-lg bg-neutral-100">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 leading-tight">
                      {catGroup.category}
                    </h3>
                    <span className="text-[11px] text-neutral-400">
                      {catGroup.skills.length} skills listed
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
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
                Production-tested in commercial releases
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
