import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'CORVIT SYSTEMS FAISALABAD',
      location: 'FAISALABAD, PAKISTAN',
      period: '2023 -24 ',
      description: [
        'Led development of scalable web applications serving 10K+ users',
        'Architected microservices infrastructure reducing response time by 40%',
        'Mentored junior developers and established coding best practices',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      type: 'work'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'TECH HUB FaISALABAD',
      location: 'Faisalabad, Pakistan',
      period: '2024 - 25',
      description: [
        'Developed customer-facing web applications using MERN stack',
        'Collaborated with UX/UI team to implement responsive designs',
        'Optimized database queries resulting in 50% performance improvement',
        'Integrated third-party APIs including payment gateways and social auth'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      type: 'work'
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'LINKEDIN',
      location: 'Remote',
      period: '2025 - Present',
      description: [
        'Built responsive websites for clients using modern JavaScript frameworks',
        'Worked closely with design team to pixel-perfect implementations',
        'Maintained and updated existing client websites',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Git'],
      type: 'work'
    },
    {
      id: 4,
      title: 'Bachelor of Science in information Technology',
      company: '  Government  College  University   Faisalabad',
      location: 'Faisalabad, Pakistan',
      period: '2023 - PRESENT',
      description: [
        'Recencly in 5Th semester with a CGPA of 3.3/4.0',
        'Specialized in Software Engineering and Web Development',
        'Led university programming club and organized coding bootcamps',
        'Completed capstone project: AI-powered learning management system'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Machine Learning', 'Algorithms'],
      type: 'education'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Building className="h-5 w-5" />;
      case 'education':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Building className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-blue-600';
      case 'education':
        return 'from-green-500 to-green-600';
      case 'project':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional journey, education, and key milestones in my development career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center text-white shadow-lg`}>
                    {getIcon(exp.type)}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className={`${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                          <CardTitle className="text-xl text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </CardTitle>
                          <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            {exp.company}
                          </div>
                        </div>
                        <div className={`flex flex-col items-end space-y-1 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                          <Badge className={`bg-gradient-to-r ${getTypeColor(exp.type)} text-white`}>
                            {exp.period}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Digi Skills Certified',
                issuer: 'Digi Skills Pakistan',
                date: '2024',
                icon: '🏆'
              },
              {
                title: 'React Specialist Certification',
                issuer: 'Meta',
                date: '2024',
                icon: '⚛️'
              },
              {
                title: 'MongoDB Certified Developer',
                issuer: 'MongoDB University',
                date: '2024',
                icon: '🍃'
              },
              {
                title: 'Google Analytics Certified',
                issuer: 'Google',
                date: '2025',
                icon: '📊'
              },
              {
                title: 'Hackathon Winner',
                issuer: 'TechCrunch Disrupt',
                date: '2025',
                icon: '🥇'
              },
              {
                title: 'JavaScript Algorithms Expert',
                issuer: 'FreeCodeCamp',
                date: '2025',
                icon: '💻'
              }
            ].map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-0">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {achievement.issuer}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}