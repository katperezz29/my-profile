import { useState } from 'react';
import { ExternalLink, ArrowRight, Smartphone, Building2, ShoppingBag, Store, Info } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/profileData';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Mobile Application', 'B2B Enterprise SaaS', 'Marketplace', 'E-Commerce'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

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

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-neutral-100/60 border-t border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-600">
              Key production web and mobile platforms built and maintained.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-neutral-200 rounded-xl self-start md:self-auto shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Preview with Interactive Overlay */}
              <div
                className="relative aspect-16/9 bg-neutral-100 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/20 transition-colors" />
                
                {/* Badge top-left */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-neutral-800 text-xs font-bold shadow-2xs">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>

                {/* Tech Callout top-right */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide shadow-2xs">
                  {project.framework}
                </div>
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

                  <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
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
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-neutral-500 shrink-0" />
            <span>
              All projects represent live production systems delivered or maintained with hands-on full-stack development, defect triage, and Agile sprint execution.
            </span>
          </div>
          <a
            href="#contact"
            className="font-semibold text-neutral-900 hover:underline whitespace-nowrap"
          >
            Inquire about architecture &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
