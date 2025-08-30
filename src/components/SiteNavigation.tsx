type Section = 'about' | 'experience' | 'projects';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'about' as Section, label: 'About' },
    { id: 'experience' as Section, label: 'Experience' },
    { id: 'projects' as Section, label: 'Projects' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-4xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif text-gray-900">
          <div className="text-xl font-serif text-gray-900">
            Kaleb Tsegaye
          </div>
          </div>
          
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`relative transition-colors duration-200 pb-1 ${
                  currentSection === section.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {section.label}
                {/* Base underline for all sections */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                {/* Active section gets an extra underline */}
                {currentSection === section.id && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
