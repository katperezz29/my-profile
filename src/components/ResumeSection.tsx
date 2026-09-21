import { useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle, FileText, Printer, Calendar, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES, EDUCATION, PROFILE_INFO } from '../data/profileData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export default function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = Array.from(
    new Set(EXPERIENCES.flatMap((e) => e.technologies))
  );

  return (
    <section id="resume" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Work Experience & Resume
            </h2>
            <p className="text-sm text-neutral-600">
              Career history across software engineering, Agile delivery, and frontend architecture.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResumeModal}
              id="resume-section-open-modal-btn"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Full Resume</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-lg transition-colors"
            >
              <Printer className="w-4 h-4 text-neutral-600" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Tech Filter bar */}
        <div className="mb-8 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-neutral-600">
              Filter career highlights by technology:
            </span>
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="text-neutral-500 hover:text-neutral-900 font-medium underline"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedTech === tech
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Experience Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
              <Briefcase className="w-5 h-5 text-neutral-800" />
              <h3 className="text-xl font-bold text-neutral-900">
                Work Experience
              </h3>
            </div>

            <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-8 space-y-10 ml-3">
              {EXPERIENCES.map((exp) => {
                const isRelevant = !selectedTech || exp.technologies.includes(selectedTech);

                return (
                  <div
                    key={exp.id}
                    className={`relative group transition-opacity duration-300 ${
                      isRelevant ? 'opacity-100' : 'opacity-35'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-neutral-900 group-hover:scale-125 transition-transform" />

                    {/* Card Content */}
                    <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-5 sm:p-6 space-y-4 hover:border-neutral-300 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-sm font-semibold text-neutral-700">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 text-sm text-neutral-700">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="pt-2 border-t border-neutral-200/60 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 text-[11px] font-medium rounded ${
                              selectedTech === tech
                                ? 'bg-neutral-900 text-white'
                                : 'bg-white text-neutral-600 border border-neutral-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Agile Competencies Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
                <GraduationCap className="w-5 h-5 text-neutral-800" />
                <h3 className="text-xl font-bold text-neutral-900">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-500">
                        {edu.period}
                      </span>
                      <Award className="w-4 h-4 text-neutral-400" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-medium text-neutral-600">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agile & Scrum Delivery Highlights */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-white space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Leadership Specialization
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-800 text-neutral-200">
                  Scrum Master
                </span>
              </div>
              
              <h4 className="text-base font-bold">
                Agile Delivery & Servant Leadership
              </h4>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Extensive track record facilitating cross-functional ceremonies, resolving impediments, coaching developers, and guaranteeing sprint commitments on time across global enterprise products.
              </p>

              <div className="space-y-2 pt-1 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Sprint Planning & Backlog Refinement</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Daily Standups & Impediment Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Sprint Demos & Team Retrospectives</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Cross-Functional Client Communication</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-semibold text-neutral-200 transition-colors"
                >
                  Inspect Complete CV
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
