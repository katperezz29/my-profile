import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProjectModal from './components/ProjectModal';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Profile Hero Overview */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Featured Portfolio (ActiveLink, Pollen LMS, Pollen Marketplace, Mamas&Papas) */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Career Experience & Resume Section */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Skills & Technical Competencies */}
        <SkillsSection />

        {/* Contact Information & Email Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Formal PDF Style Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
