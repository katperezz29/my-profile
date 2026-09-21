import { X, CheckCircle2, Layers, Cpu, Code2, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/70">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-neutral-900 text-white">
              {project.badge || project.category}
            </span>
            <span className="text-xs font-semibold text-neutral-500">
              {project.framework}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Image Banner */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-16/9">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-neutral-600">
              {project.subtitle}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-neutral-700" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Key Engineering & Leadership Responsibilities
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-700" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Core System Features
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0"></span>
                  <span className="text-xs sm:text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-700" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Architectural Design
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700">
              {project.architecture.map((arch, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neutral-400 font-bold">&rarr;</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="text-xs text-neutral-500 font-medium">
            Project Engineered by Katrine Perez
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <span>Visit Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
