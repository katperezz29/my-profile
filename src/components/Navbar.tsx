import { useState, useEffect } from 'react';
import { Mail, Check, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.emails[0].address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={PROFILE_INFO.avatar}
            alt="Katrine Perez"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-neutral-200 shadow-2xs transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-neutral-900 text-base leading-tight tracking-tight">
              Katrine Perez
            </span>
            <span className="text-xs text-neutral-500 font-medium leading-tight">
              Senior SWE & Scrum Master
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#hero"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            Overview
          </a>
          <a
            href="#portfolio"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#resume"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            Resume
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-copy-email-btn"
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <button
            id="nav-view-resume-btn"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-600" />
            <span>View Resume</span>
          </button>

          <a
            id="nav-contact-cta-btn"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-xs"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            Overview
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            Portfolio
          </a>
          <a
            href="#resume"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            Resume
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                copyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Copy Primary Email</span>
            </button>
            <button
              onClick={() => {
                onOpenResumeModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-neutral-800 bg-white border border-neutral-300 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Open Formatted Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
