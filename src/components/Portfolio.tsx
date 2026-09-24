import { useState } from 'react';
import { ExternalLink, ArrowRight, Smartphone, Building2, ShoppingBag, Store, Info, Layers, Eye, Cpu, CheckCircle2, Maximize2 } from 'lucide-react';
import { Project, ArchitectureNode } from '../types';
import { PROJECTS } from '../data/profileData';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

type CardTab = 'preview' | 'architecture' | 'impact';

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [filter, setFilter] = useState<string>('All');
  const [activeCardTabs, setActiveCardTabs] = useState<Record<string, CardTab>>({
    'pollen-lms': 'architecture',
    'pollen-marketplace': 'preview',
    'activelink-mobile': 'preview',
    'mamas-and-papas': 'preview'
  });

  const categories = ['All', 'B2B Enterprise SaaS', 'Marketplace', 'Mobile Application', 'E-Commerce'];

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile Application':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'B2B Enterprise SaaS':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'Marketplace':
        return <ShoppingBag className="w-3.5 h-3.5" />;
      case 'E-Commerce':
        return <Store className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  const setCardTab = (projectId: string, tab: CardTab) => {
    setActiveCardTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-neutral-100/60 border-t border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              01 · Enterprise & Mobile Platforms
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Featured Production Platforms
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl">
              Commercial web and mobile applications engineered and maintained by Katrine. Toggle between the visual preview, system architecture, and production metrics.
            </p>
          </div>

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl self-start md:self-auto shadow-2xs">
            {categories.map((cat) => {
              const count =
                cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap flex items-center gap-1.5 ${
                    filter === cat
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      filter === cat ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const currentTab = activeCardTabs[project.id] || 'preview';

            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Top Interactive Tab Bar */}
                <div className="px-5 pt-4 pb-2.5 flex items-center justify-between border-b border-neutral-100 bg-neutral-50/70">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                    <span className="p-1 rounded bg-neutral-200/60">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span>{project.title}</span>
                  </div>

                  {/* View Mode Tabs */}
                  <div className="flex items-center gap-1 bg-neutral-200/50 p-0.5 rounded-lg text-xs">
                    <button
                      onClick={() => setCardTab(project.id, 'preview')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                        currentTab === 'preview'
                          ? 'bg-white text-neutral-900 shadow-2xs'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                      title="Visual Interface Preview"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Interface</span>
                    </button>
                    <button
                      onClick={() => setCardTab(project.id, 'architecture')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                        currentTab === 'architecture'
                          ? 'bg-white text-neutral-900 shadow-2xs'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                      title="System Architecture Diagram"
                    >
                      <Cpu className="w-3 h-3" />
                      <span>Architecture</span>
                    </button>
                    <button
                      onClick={() => setCardTab(project.id, 'impact')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors flex items-center gap-1 ${
                        currentTab === 'impact'
                          ? 'bg-white text-neutral-900 shadow-2xs'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                      title="Engineering Impact"
                    >
                      <Layers className="w-3 h-3" />
                      <span>Impact</span>
                    </button>
                  </div>
                </div>

                {/* Main Card View Container */}
                <div className="relative aspect-16/9 bg-neutral-100 overflow-hidden">
                  {currentTab === 'preview' && (
                    <div
                      className="relative w-full h-full cursor-pointer overflow-hidden"
                      onClick={() => onSelectProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/30 transition-colors" />

                      {/* Click to expand overlay button */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-neutral-900/90 text-white text-[11px] font-semibold tracking-wide backdrop-blur-xs flex items-center gap-1.5 shadow-2xs">
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect Full Specs</span>
                      </div>

                      {/* Framework badge top left */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-neutral-900 text-xs font-bold tracking-tight backdrop-blur-xs shadow-2xs">
                        {project.framework}
                      </div>
                    </div>
                  )}

                  {currentTab === 'architecture' && (
                    <div className="w-full h-full p-4 sm:p-5 bg-neutral-900 text-white overflow-y-auto space-y-2.5 flex flex-col justify-center">
                      <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800">
                        <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                          System Architecture & Tech Stack
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono">
                          {project.framework}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {project.architectureFlow && project.architectureFlow.length > 0 ? (
                          project.architectureFlow.map((node, idx) => (
                            <div
                              key={idx}
                              className="p-2 sm:p-2.5 rounded-lg bg-neutral-800/90 border border-neutral-700/80 flex items-start gap-2.5 text-xs"
                            >
                              <div className="w-5 h-5 rounded-md bg-neutral-700 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                0{idx + 1}
                              </div>
                              <div className="space-y-0.5">
                                <div className="font-semibold text-white flex items-center gap-2">
                                  <span>{node.layer}</span>
                                  <span className="text-[10px] font-mono text-emerald-300">
                                    [{node.technology}]
                                  </span>
                                </div>
                                <div className="text-[11px] text-neutral-400 leading-snug">
                                  {node.description}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-xs text-neutral-400">
                            Sencha ExtJS ➔ Cordova Native Bridge ➔ Android & iOS Builds ➔ MySQL.
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentTab === 'impact' && (
                    <div className="w-full h-full p-5 bg-neutral-950 text-white flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2 pb-1 border-b border-neutral-800">
                          Production Metrics & Outcomes
                        </div>
                        <div className="grid grid-cols-3 gap-2 py-2">
                          {project.impactMetrics && project.impactMetrics.length > 0 ? (
                            project.impactMetrics.map((m, idx) => (
                              <div
                                key={idx}
                                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center"
                              >
                                <div className="text-xs sm:text-sm font-extrabold text-emerald-400">
                                  {m.value}
                                </div>
                                <div className="text-[10px] text-neutral-400 mt-0.5 font-medium">
                                  {m.label}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-3 text-xs text-neutral-400">
                              High stability, zero-defect release goals, rapid turnaround.
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-neutral-800 text-xs text-neutral-300">
                        <div className="font-semibold text-white">Engineering Highlights:</div>
                        <div className="line-clamp-2 text-neutral-400 text-[11px] leading-relaxed">
                          {project.overview}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-neutral-700 cursor-pointer transition-colors"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs font-semibold text-neutral-500">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips & Action Footer */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions bar */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
                      >
                        <span>Deep Dive & Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          <span>Live Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-neutral-500 shrink-0" />
            <span>
              All platforms represent live production applications engineered with hands-on frontend/backend code, defect triage, and Scrum ceremony facilitation.
            </span>
          </div>
          <button
            onClick={() => {
              const elem = document.getElementById('agile-console');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-semibold text-neutral-900 hover:underline whitespace-nowrap"
          >
            Explore Scrum Master Console &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
