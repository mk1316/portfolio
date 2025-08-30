import React from 'react';

const experience = [
  {
    id: 1,
    title: 'Software Development Engineer',
    company: 'Aurora Web Studio',
    period: 'Oct 2024 - Present',
    description: 'Developed a real-time issue tracking dashboard using React and Firebase, featuring automated ticket categorization and priority scoring, reducing average resolution time from 4 hours to 2.4 hours.',
    achievements: [
      'Enhanced client-side checkout conversion by 30% by redesigning the checkout flow, migrating the database to Firebase, and developing the frontend with Next.js and TypeScript.',
      'Implemented automated client communication workflows and digital collaboration tools, reducing client meetings from 15 to 10 per week and enabling the team to handle 40% more projects simultaneously.',
      'Built a custom React hook to debounce search inputs, significantly reducing unnecessary RESTful API requests by 60%, leading to improved performance and efficiency on client SaaS platforms.'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Firebase', 'JavaScript']
  },
  {
    id: 2,
    title: 'Full-Stack Engineer',
    company: 'Real AI Dynamics',
    period: 'Feb 2024 - Oct 2024',
    description: 'Deployed a full-time web tracking application using Python, React, PostgreSQL and Docker that analyzes call data leading to a 13% increase in First Call Resolutions (FCRs).',
    achievements: [
      'Engineered a RESTFUL API utilizing FastAPI and PostgreSQL, facilitating efficient storage of call center server data, enhancing data retrieval speeds by 40% and supporting real-time analytics dashboards.',
      'Orchestrated the integration of cloud-native architecture with Kubernetes and AWS, resulting in a scalable platform that reduced server deployment times by 60% and cut infrastructure costs by 25%.'
    ],
    technologies: ['Python', 'React', 'PostgreSQL', 'Docker', 'FastAPI', 'Kubernetes', 'AWS']
  },
  {
    id: 3,
    title: 'Machine Learning Researcher',
    company: 'Andrews University',
    period: 'Aug 2023 - May 2024',
    description: 'Analyzed S&P 500 volatility using Random Forest, XGBoost, and LSTM models, achieving 15% better prediction accuracy than linear baselines and identifying indicators that outperformed buy-and-hold by 8.3%.',
    achievements: [
      'Designed risk assessment framework using Monte Carlo simulations and VaR calculations across 1,000+ market scenarios, maintaining benchmark returns while reducing max drawdown by 18%.',
      'Evaluated model performance across bull, bear, and sideways markets using cross-validation and back-testing, that generated actionable insights through multipath/seaborn dashboards presented to faculty advisor.'
    ],
    technologies: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'LSTM', 'Monte Carlo', 'VaR']
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-16">
      <div className="mb-16">
        <h2 className="text-lg font-mono text-gray-900 mb-8">Experience</h2>
        
        <div className="space-y-8">
          {experience.map((job) => (
            <article key={job.id} className="bg-white py-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900 leading-tight">
                    {job.title}
                  </h3>
                  <div className="text-blue-600 text-xs mt-1">
                    {job.company}
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex-shrink-0">
                  {job.period}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-2 text-xs">
                {job.description}
              </p>
              
              {job.achievements && (
                <ul className="text-gray-600 text-xs mb-3 space-y-1">
                  {job.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
