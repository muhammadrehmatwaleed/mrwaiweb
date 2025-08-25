import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code, value: '20+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Heart, value: '2+', label: 'Years Experience' },
    { icon: Zap, value: '99%', label: 'Client Satisfaction' },
  ];

  const highlights = [
    'Full-stack development with MERN stack',
    'Modern UI/UX design principles',
    'JSON API development',
    'Database design and optimization',
    'Responsive web applications',
    'Version control with Git',
    'Agile methodologies',
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 2 years of experience in MERN STACK Development, I've had the privilege of working on diverse 
                projects ranging from small business websites to large-scale enterprise applications. My journey began 
                with a curiosity for how things work, which led me to pursue computer science and fall in love with coding.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in the MERN stack but I'm always eager to learn new technologies and adapt to different 
                project requirements. I believe in writing clean, maintainable code and creating user experiences that 
                are both functional and delightful.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-0">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}