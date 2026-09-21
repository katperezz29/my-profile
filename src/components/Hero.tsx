import { useState } from 'react';
import { Mail, Phone, MapPin, Check, FileText, ArrowDown, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Senior Engineering & Scrum Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
                Katrine Perez
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-700">
                Senior Software Engineer & Scrum Master
              </p>
              <p className="text-sm font-medium text-neutral-500">
                React &bull; Vue &bull; Nuxt 3 &bull; NestJS &bull; Agile Delivery
              </p>
            </div>

            {/* Bio Summary */}
            <p className="text-base text-neutral-600 leading-relaxed max-w-xl">
              {PROFILE_INFO.summary}
            </p>

            {/* Quick Contact & Details Tags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-neutral-600">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>Taguig City, Philippines</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>+63 926 208 0172</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-lg text-neutral-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                id="hero-view-portfolio-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-sm font-semibold rounded-lg transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-neutral-600" />
                <span>Resume</span>
              </button>

              <a
                href={`mailto:${PROFILE_INFO.emails[0].address}`}
                id="hero-send-email-btn"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-600" />
                <span>Contact</span>
              </a>
            </div>

            {/* Email Copy Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-neutral-500 font-medium">Email:</span>
              {PROFILE_INFO.emails.map((e) => (
                <button
                  key={e.address}
                  onClick={() => handleCopy(e.address)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-neutral-700 hover:border-neutral-400 transition-colors shadow-2xs"
                  title="Click to copy"
                >
                  <span className="font-mono text-[11px]">{e.address}</span>
                  {copiedEmail === e.address ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Mail className="w-3 h-3 text-neutral-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Card & Key Metrics Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs space-y-5">
              
              {/* Profile Headshot & Header */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={PROFILE_INFO.avatar}
                    alt="Katrine Perez"
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-2xl object-cover border border-neutral-200 shadow-sm"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900 text-lg leading-tight">
                    Katrine Perez
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium">
                    Deltek &bull; Pollen Tech
                  </p>
                  <span className="inline-block text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                    Senior SWE &bull; Scrum Master
                  </span>
                </div>
              </div>

              {/* Skills summary tags */}
              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  Primary Tech
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-neutral-700">
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">React / Next</span>
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Nuxt 3 / Vue</span>
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">NestJS / Node</span>
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">ExtJS / Mobile</span>
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Temporal Workflows</span>
                  <span className="bg-white border border-neutral-200 px-2 py-0.5 rounded">Shopify</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {PROFILE_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 flex flex-col justify-center"
                  >
                    <span className="text-xl font-bold text-neutral-900 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education Note */}
              <div className="pt-2 text-center text-xs text-neutral-500 border-t border-neutral-100">
                Education: <span className="font-medium text-neutral-700">MSIT (PUP), BSIT (PLP)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
