import { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Check, Copy, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

const INQUIRY_TOPICS = [
  'Senior Software Engineer Role (Full-Time)',
  'Scrum Master / Agile Delivery Contract',
  'Full-Stack Architecture & Development (React/Nuxt/NestJS)',
  'Mobile App Development (Cordova / ExtJS)',
  'General Technical Inquiry / Networking'
];

export default function ContactModal({ isOpen, onClose, initialTopic }: ContactModalProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialTopic || INQUIRY_TOPICS[0]
  );
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (initialTopic) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const mailtoSubject = encodeURIComponent(
    `[Portfolio Inquiry] ${selectedTopic} - ${senderName || 'Prospective Employer'}${senderCompany ? ` (${senderCompany})` : ''}`
  );

  const mailtoBody = encodeURIComponent(
    `Hi Katrine,\n\nI visited your profile and would like to connect regarding ${selectedTopic}.\n\n` +
      (message ? `${message}\n\n` : '') +
      `Best regards,\n${senderName || 'Your Name'}\n${senderCompany ? `${senderCompany}\n` : ''}`
  );

  const primaryEmail = PROFILE_INFO.emails[0].address;
  const mailtoLink = `mailto:${primaryEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="contact-modal-dialog"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-neutral-800" />
            <span className="font-bold text-sm text-neutral-900">
              Contact & Collaboration Inquiry
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

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Quick profile badge */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <img
              src={PROFILE_INFO.avatar}
              alt="Katrine Perez"
              className="w-11 h-11 rounded-full object-cover border border-neutral-300"
            />
            <div>
              <div className="font-bold text-sm text-neutral-900">Katrine Perez</div>
              <div className="text-xs text-neutral-500">
                Senior Software Engineer &bull; Taguig City, Philippines
              </div>
            </div>
          </div>

          {/* Topic Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 block">
              Inquiry Topic / Opportunity:
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              {INQUIRY_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Company inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-700 block">Your Name:</label>
              <input
                type="text"
                placeholder="e.g. Sarah Connor"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-700 block">Company / Organization:</label>
              <input
                type="text"
                placeholder="e.g. Acme Tech"
                value={senderCompany}
                onChange={(e) => setSenderCompany(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
          </div>

          {/* Custom Message */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-neutral-700 block">
              Message or Job Details (Optional):
            </label>
            <textarea
              rows={3}
              placeholder="Provide a quick note regarding the role, timeline, or meeting request..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 leading-relaxed"
            />
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <a
              href={mailtoLink}
              id="contact-modal-send-email-btn"
              className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send to katrineperez29@gmail.com</span>
            </a>

            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-neutral-100">
              <span>Or copy direct email:</span>
              <button
                onClick={() => handleCopy(primaryEmail)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 rounded-md transition-colors font-mono"
              >
                {copiedEmail === primaryEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied katrineperez29@gmail.com!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{primaryEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Phone */}
          <div className="pt-2 text-center text-xs text-neutral-500 font-medium">
            Phone / WhatsApp: <span className="font-semibold text-neutral-800">{PROFILE_INFO.phone}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
