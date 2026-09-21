import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
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

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry] ${roleType} - from ${senderName || 'Recruiter / Partner'}`);
    const bodyText = encodeURIComponent(
      `Hello Katrine,\n\n${message || 'I came across your portfolio and resume and would like to discuss an opportunity.'}\n\nBest regards,\n${senderName || 'Partner'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`
    );
    window.location.href = `mailto:${PROFILE_INFO.emails[0].address}?subject=${subject}&body=${bodyText}`;
  };

  const handleCopyDraft = () => {
    const draft = `Subject: [Inquiry] ${roleType} - from ${senderName || 'Recruiter / Partner'}\n\nHello Katrine,\n\n${message || 'I came across your portfolio and resume and would like to discuss an opportunity.'}\n\nBest regards,\n${senderName || 'Partner'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`;
    navigator.clipboard.writeText(draft);
    setDraftCopied(true);
    setTimeout(() => setDraftCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-1">
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Contact
          </h2>
          <p className="text-sm text-neutral-600">
            Let's discuss engineering opportunities, Scrum roles, or project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Methods Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  <Mail className="w-4 h-4 text-neutral-700" />
                  <span>Primary Direct Email</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Fastest Response
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${PROFILE_INFO.emails[0].address}`}
                  className="text-base sm:text-lg font-bold text-neutral-900 hover:text-neutral-700 break-all transition-colors"
                >
                  {PROFILE_INFO.emails[0].address}
                </a>
                <p className="text-xs text-neutral-500 mt-1">
                  Personal inbox for recruitment, career opportunities, and direct collaboration.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(PROFILE_INFO.emails[0].address, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                >
                  {copiedEmail === PROFILE_INFO.emails[0].address ? (
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
                  href={`mailto:${PROFILE_INFO.emails[0].address}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Open Mail Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Corporate / Secondary Email Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  <Mail className="w-4 h-4 text-neutral-700" />
                  <span>Work / Pollen Email</span>
                </div>
                <span className="text-[11px] font-semibold text-neutral-700 bg-neutral-200 px-2 py-0.5 rounded">
                  Corporate
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${PROFILE_INFO.emails[1].address}`}
                  className="text-base sm:text-lg font-bold text-neutral-900 hover:text-neutral-700 break-all transition-colors"
                >
                  {PROFILE_INFO.emails[1].address}
                </a>
                <p className="text-xs text-neutral-500 mt-1">
                  Pollen Tech platform ecosystem communication.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(PROFILE_INFO.emails[1].address, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 rounded-lg text-xs font-semibold transition-colors shadow-2xs"
                >
                  {copiedEmail === PROFILE_INFO.emails[1].address ? (
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
                  href={`mailto:${PROFILE_INFO.emails[1].address}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Send Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neutral-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Telephone / Mobile
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE_INFO.phone, 'phone')}
                    className="text-xs text-neutral-600 hover:text-neutral-900 font-semibold"
                  >
                    {copiedPhone ? 'Copied' : 'Copy'}
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
                Compose a note to Katrine. It automatically prepares a pre-filled email draft or copies the text formatted for your messaging app.
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
                    Your Email
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
                  Subject / Inquiring About
                </label>
                <select
                  id="contact-role-type"
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden bg-white transition-colors"
                >
                  <option value="Senior Software Engineer Role">Senior Software Engineer Role</option>
                  <option value="Scrum Master & Agile Delivery Role">Scrum Master & Agile Delivery Role</option>
                  <option value="Full-Stack Web/Mobile Platform Development">Full-Stack Web/Mobile Platform Development</option>
                  <option value="Technical Consulting / Advisory">Technical Consulting / Advisory</option>
                  <option value="General Professional Networking">General Professional Networking</option>
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
                  placeholder="Share details about the role, project scope, tech stack requirements, or collaboration..."
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
                  <span>Send via Email Client</span>
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
                      <span className="text-emerald-700">Draft Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Copy Draft Text</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-neutral-400">
                Clicking "Send via Email Client" will launch your default email client addressed to <span className="font-semibold text-neutral-600">{PROFILE_INFO.emails[0].address}</span>.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
