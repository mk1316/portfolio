import React, { useState } from 'react';
import SiteNavigation from './components/SiteNavigation';
import AboutSection from './components/AboutSection';
import WorkExperience from './components/WorkExperience';
import ProjectShowcase from './components/ProjectShowcase';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

type Section = 'about' | 'experience' | 'projects';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <WorkExperience />;
      case 'projects':
        return <ProjectShowcase />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <main className="max-w-4xl px-8 py-12 flex-1">
        {renderCurrentSection()}
      </main>
      
      {/* Fixed Contact Information */}
      <footer className="bg-gray-50 mt-auto">
        <div className="max-w-4xl px-8 py-6">
          <div className="flex flex-wrap gap-8 text-xs">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <a href="mailto:tsegkaleb@gmail.com" className="text-blue-600 hover:underline">
                tsegkaleb@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">469-554-0298</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Github className="w-4 h-4 text-gray-500" />
              <a 
                href="https://github.com/mk1316" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/mk1316
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <Linkedin className="w-4 h-4 text-gray-500" />
              <a 
                href="https://linkedin.com/in/kalebft" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kalebft
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
