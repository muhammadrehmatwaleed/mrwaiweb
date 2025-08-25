import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 93, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'HTML/CSS', level: 96, category: 'Frontend' },
    
    { name: 'Node.js', level: 89, category: 'Backend' },
    { name: 'Express.js', level: 91, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Backend' },
    { name: 'MYSQL', level: 82, category: 'Backend' },
    { name: 'JSON APIs', level: 94, category: 'Backend' },
    { name: 'PHP', level: 78, category: 'Backend' },
    
    { name: 'Git', level: 93, category: 'Tools' },
    { name: 'Docker', level: 80, category: 'Tools' },
    { name: 'GitHub', level: 75, category: 'Tools' },
    { name: 'Firebase', level: 87, category: 'Tools' },
    { name: 'Vercel', level: 92, category: 'Tools' },
    { name: 'Netlify', level: 85, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];
  const categoryColors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Tools: 'from-purple-500 to-pink-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, skillName]));
              }, Math.random() * 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div ref={skillsRef} className="space-y-12">
          {categories.map((category) => (
            <Card key={category} className="overflow-hidden border-0 shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} text-white`}>
                <CardTitle className="text-2xl font-bold text-center">
                  {category} Development
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} data-skill={skill.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <Badge variant="outline" className="ml-2">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress
                          value={visibleSkills.has(skill.name) ? skill.level : 0}
                          className="h-3 bg-gray-200 dark:bg-gray-700"
                        />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'JavaScript',
              'Next.js', 'Tailwind CSS', 'MYSQL', 'Firebase', 'GitHub', 'Docker',
              'Git', 'PHP', 'JSON APIs', 'Vercel', 'Netlify', 'Figma',
              'VS Code', 'Linux',  'JWT', 'OAuth', 'Stripe', 'Socket.io'
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}