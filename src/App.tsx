import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoleMatchmaker from './components/RoleMatchmaker';
import Portfolio from './components/Portfolio';
import AgileConsole from './components/AgileConsole';
import ProjectModal from './components/ProjectModal';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { Project, PersonaMode } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string | undefined>(undefined);
  const [personaMode, setPersonaMode] = useState<PersonaMode>('all');

  const handleOpenContact = (topic?: string) => {
    setContactTopic(topic);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col">
      {/* Navigation with 3-Zone Contract & Quick Actions */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={() => handleOpenContact('Senior Engineering / Scrum Role')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Profile Hero Overview with Interactive Persona Lens & Live Manila Clock */}
        <Hero
          personaMode={personaMode}
          onSelectPersona={(mode) => setPersonaMode(mode)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenContactModal={() => handleOpenContact('Senior Engineering Inquiry')}
        />

        {/* Interactive Role Matchmaker Widget for Recruiters & Hiring Managers */}
        <RoleMatchmaker
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContactModal={(topic) => handleOpenContact(topic)}
        />

        {/* Featured Production Platforms (with Interactive Architecture & Metrics View) */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Agile Delivery & Scrum Master Console */}
        <AgileConsole />

        {/* Interactive Career Timeline & Resume Section */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Skills & Technical Competencies with Live Search & Level Filter */}
        <SkillsSection />

        {/* Contact Information & Email Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Project Deep Dive Modal with Architecture Pipeline */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Formal PDF Style Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Interactive Quick-Inquiry Composer Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTopic={contactTopic}
      />
    </div>
  );
}
