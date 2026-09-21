import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export default function Footer({ onOpenResumeModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={PROFILE_INFO.avatar}
                alt="Katrine Perez"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover border border-neutral-700"
              />
              <span className="font-bold text-base tracking-tight">
                {PROFILE_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Senior Software Engineer & Scrum Master with over 10 years of experience delivering modern web and mobile platforms.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{PROFILE_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Featured Portfolio (4 Projects)
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white transition-colors">
                  Interactive Resume & Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills & Technologies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Email Links */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Direct Contact
            </p>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a
                  href={`mailto:${PROFILE_INFO.emails[0].address}`}
                  className="hover:text-white font-mono transition-colors"
                >
                  {PROFILE_INFO.emails[0].address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a
                  href={`mailto:${PROFILE_INFO.emails[1].address}`}
                  className="hover:text-white font-mono transition-colors"
                >
                  {PROFILE_INFO.emails[1].address}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResumeModal}
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded-md text-neutral-200 transition-colors"
              >
                Open Formatted PDF Resume
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Katrine Perez. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
