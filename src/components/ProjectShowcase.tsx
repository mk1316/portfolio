const projects = [
  {
    id: 1,
    title: 'Mesgana',
    description: 'Built a bilingual Ethiopian hymnal mobile app using React Native and Expo, featuring offline functionality and serving the Ethiopian SDA community with accessible Amharic hymns.',
    details: 'Architected a sophisticated search system that queries hymn titles and lyrics in both Amharic and English simultaneously, improving content discovery and user engagement.',
    tech: 'React Native, Expo, TypeScript, Zustand',
    type: 'Mobile App',
    links: {
      github: 'https://github.com/mk1316',
      demo: '#'
    },
    achievements: [
      'Implemented persistent state management with Zustand and AsyncStorage, enabling users to save favorites, language preferences, and theme settings across sessions for enhanced user retention and satisfaction.'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Loopd',
    description: 'Engineered a cross-platform desktop app using Tauri and Rust, providing real-time application usage tracking with 1-second precision across Windows and macOS, enabling users to gain insights into their digital habits.',
    details: 'Developed a comprehensive app blocking system with time-based rules and process termination capabilities, featuring a full-screen blocking overlay that helps users enforce digital wellness boundaries.',
    tech: 'Tauri, Rust, Next.js, TypeScript, Supabase, SQLite',
    type: 'Desktop App',
    links: {
      github: 'https://github.com/mk1316',
      demo: '#'
    },
    achievements: [
      'Created a modern web dashboard using Next.js and TypeScript with Supabase integration, offering real-time analytics, goal tracking, and multi-device synchronization for comprehensive productivity insights.'
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-4 sm:py-8">
      <div className="mb-8">
        <h2 className="text-lg font-mono text-gray-900 mb-4 sm:mb-8">Projects</h2>
        
        <div className="space-y-4 sm:space-y-8 mb-4 sm:mb-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-white py-3 sm:py-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-medium text-gray-900 leading-tight flex-1 pr-8">
                  {project.title}
                </h3>
                <div className="text-xs text-gray-500 flex-shrink-0">
                  {project.type}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-2 text-xs">
                {project.description}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-2 text-xs">
                {project.details}
              </p>
              
              <ul className="text-gray-600 text-xs mb-3 space-y-1">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between text-xs">
                <div className="text-gray-500">
                  {project.tech}
                </div>
                
                <div className="flex space-x-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="text-gray-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
