import { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getPlainTextResume = () => {
    let text = `${PROFILE_INFO.name.toUpperCase()}\n`;
    text += `${PROFILE_INFO.title} | ${PROFILE_INFO.tagline}\n`;
    text += `${PROFILE_INFO.location} • ${PROFILE_INFO.phone} • ${PROFILE_INFO.emails[0].address}\n\n`;
    text += `PROFESSIONAL SUMMARY\n${PROFILE_INFO.summary}\n\n`;
    text += `PROFESSIONAL EXPERIENCE\n`;
    EXPERIENCES.forEach((exp) => {
      text += `\n${exp.role} (${exp.period})\n${exp.company} - ${exp.location}\n`;
      exp.highlights.forEach((h) => {
        text += `• ${h}\n`;
      });
    });
    text += `\nEDUCATION\n`;
    EDUCATION.forEach((edu) => {
      text += `${edu.degree} (${edu.period})\n${edu.institution}\n`;
    });
    text += `\nSKILLS\n`;
    SKILL_CATEGORIES.forEach((cat) => {
      text += `${cat.category}: ${cat.skills.map((s) => s.name).join(', ')}\n`;
    });
    return text;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-900/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-4 max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-900">
              Katrine Perez — Curriculum Vitae
            </span>
            <span className="hidden sm:inline text-xs text-neutral-500 font-medium">
              (PDF Document Format)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg transition-colors"
              title="Copy plain text formatted resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Body */}
        <div className="overflow-y-auto p-6 sm:p-12 bg-neutral-100/50 flex justify-center">
          <article className="w-full max-w-3xl bg-white shadow-xs p-8 sm:p-12 border border-neutral-200/80 rounded-xl space-y-7 text-neutral-900 font-sans">
            
            {/* Resume Header */}
            <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-neutral-300 pb-6">
              <img
                src={PROFILE_INFO.avatar}
                alt="Katrine Perez"
                referrerPolicy="no-referrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-neutral-200 shadow-2xs shrink-0"
              />
              <div className="text-center sm:text-left space-y-1.5 flex-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-neutral-950">
                  {PROFILE_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-neutral-700">
                  Senior Software Engineer &bull; Scrum Master
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-neutral-600 pt-0.5">
                  <span>{PROFILE_INFO.location}</span>
                  <span>•</span>
                  <span>{PROFILE_INFO.phone}</span>
                  <span>•</span>
                  <span className="font-semibold text-neutral-900">{PROFILE_INFO.emails[0].address}</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-neutral-900 border-b border-neutral-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                {PROFILE_INFO.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-neutral-900 border-b border-neutral-300 pb-1">
                Professional Experience
              </h2>

              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-sm text-neutral-900">
                      {exp.role}
                    </span>
                    <span className="text-xs font-semibold text-neutral-600">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-neutral-700 italic">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-neutral-900 border-b border-neutral-300 pb-1">
                Education
              </h2>

              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-xs sm:text-sm text-neutral-900">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-semibold text-neutral-600">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-700 italic">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-neutral-900 border-b border-neutral-300 pb-1">
                Skills
              </h2>
              <div className="space-y-1.5 text-xs text-neutral-800 leading-relaxed">
                <div>
                  <span className="font-bold">Web Platforms & Frameworks: </span>
                  <span>React.js, Vue.js, Nuxt 3, NestJS, Node.js, WordPress, Elementor, Shopify</span>
                </div>
                <div>
                  <span className="font-bold">Backend / ORM: </span>
                  <span>NestJS, TypeORM, Node.js, Ruby on Rails</span>
                </div>
                <div>
                  <span className="font-bold">Workflow Orchestration: </span>
                  <span>Temporal</span>
                </div>
                <div>
                  <span className="font-bold">Cloud & Deployment: </span>
                  <span>AWS (EC2, S3, CloudFront), Railway, Vercel, Netlify, GitHub CI/CD</span>
                </div>
                <div>
                  <span className="font-bold">Authentication & Integration: </span>
                  <span>Auth0, Keycloak, Twilio, HubSpot</span>
                </div>
                <div>
                  <span className="font-bold">API & Testing Tools: </span>
                  <span>Postman, Swagger, REST APIs, JWT, WordPress API Integration</span>
                </div>
                <div>
                  <span className="font-bold">Databases: </span>
                  <span>MySQL</span>
                </div>
                <div>
                  <span className="font-bold">Methodology & Leadership: </span>
                  <span>Agile/Scrum Facilitation, Sprint Planning, Impediment Removal, Cross-Functional Collaboration</span>
                </div>
              </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}
