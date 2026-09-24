import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check, Send, ExternalLink, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Form states for message composer
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [roleType, setRoleType] = useState('Senior Software Engineer Role');
  const [message, setMessage] = useState('');
  const [draftCopied, setDraftCopied] = useState(false);

  // Time in Manila/Taguig (UTC+8)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const directEmail = PROFILE_INFO.emails[0].address; // katrineperez29@gmail.com

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry] ${roleType} - from ${senderName || 'Recruiter / Partner'}`);
    const bodyText = encodeURIComponent(
      `Hello Katrine,\n\n${message || 'I came across your portfolio and would like to connect regarding an engineering opportunity.'}\n\nBest regards,\n${senderName || 'Partner'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${bodyText}`;
  };

  const handleCopyDraft = () => {
    const draft = `To: ${directEmail}\nSubject: [Inquiry] ${roleType} - from ${senderName || 'Recruiter / Partner'}\n\nHello Katrine,\n\n${message || 'I came across your portfolio and would like to connect regarding an engineering opportunity.'}\n\nBest regards,\n${senderName || 'Partner'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`;
    navigator.clipboard.writeText(draft);
    setDraftCopied(true);
    setTimeout(() => setDraftCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            04 · Direct Contact & Inquiries
          </div>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Connect with Katrine
          </h2>
          <p className="text-sm text-neutral-600">
            Reach out directly for Senior Software Engineer roles, Scrum Master engagements, or project consultations. All inquiries arrive directly in Katrine&apos;s personal inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Methods Column */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Direct Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  <Mail className="w-4 h-4 text-neutral-700" />
                  <span>Direct Personal Email</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Fastest Response
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${directEmail}`}
                  className="text-base sm:text-lg font-bold text-neutral-900 hover:text-neutral-700 break-all transition-colors"
                >
                  {directEmail}
                </a>
                <p className="text-xs text-neutral-500 mt-1">
                  Guaranteed direct delivery to Katrine for recruitment, contracts, and technical interviews.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(directEmail, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                >
                  {copiedEmail === directEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${directEmail}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Open Mail Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Telephone & Mobile Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neutral-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Telephone / WhatsApp
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE_INFO.phone, 'phone')}
                    className="text-xs text-neutral-600 hover:text-neutral-900 font-semibold"
                  >
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="text-base font-bold text-neutral-900 font-mono">
                  {PROFILE_INFO.phone}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200/60 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Location & Timezone
                  </span>
                </div>
                <div className="text-sm font-semibold text-neutral-800">
                  {PROFILE_INFO.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium pt-0.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Local Time (UTC+8):</span>
                  <span className="font-mono font-bold text-neutral-900 bg-neutral-200 px-1.5 py-0.5 rounded">
                    {currentTime || 'Loading...'}
                  </span>
                </div>
              </div>
            </div>

            {/* Availability & Commitment Guarantee Card */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-white space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Response Commitment</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Katrine typically replies to verified hiring inquiries within <strong>24 hours</strong>. Flexible for video interviews via Google Meet, Zoom, or Teams.
              </p>
            </div>

          </div>

          {/* Interactive Message Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neutral-800" />
                <h3 className="text-xl font-bold text-neutral-900">
                  Send a Direct Inquiry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600">
                Compose a message below. When you click &ldquo;Send via Email Client&rdquo;, your inquiry will be prepared and addressed directly to <strong className="text-neutral-900">{directEmail}</strong>.
              </p>
            </div>

            <form onSubmit={handleSendMailto} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-sender-name" className="text-xs font-bold text-neutral-700">
                    Your Name
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-sender-email" className="text-xs font-bold text-neutral-700">
                    Your Email Address
                  </label>
                  <input
                    id="contact-sender-email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-role-type" className="text-xs font-bold text-neutral-700">
                  Inquiry Topic / Opportunity
                </label>
                <select
                  id="contact-role-type"
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden bg-white transition-colors"
                >
                  <option value="Senior Software Engineer Role">Senior Software Engineer Role (Full-Time)</option>
                  <option value="Scrum Master & Agile Delivery Role">Scrum Master & Agile Delivery Role</option>
                  <option value="Full-Stack Web/Mobile Platform Development">Full-Stack Web/Mobile Development (React/Nuxt/NestJS)</option>
                  <option value="Technical Architecture Consulting">Technical Architecture Consulting</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message-body" className="text-xs font-bold text-neutral-700">
                  Your Message
                </label>
                <textarea
                  id="contact-message-body"
                  rows={4}
                  required
                  placeholder="Share details regarding the role, project scope, tech stack, or interview schedule..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  id="contact-submit-email-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to katrineperez29@gmail.com</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  id="contact-copy-draft-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-lg transition-colors"
                >
                  {draftCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Copy Draft Text</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500">
                Inquiries are sent straight to <strong className="text-neutral-800 font-semibold">{directEmail}</strong>.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
