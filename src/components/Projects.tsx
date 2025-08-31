import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A modern task management application with team collaboration features, real-time updates using Socket.io, drag-and-drop functionality, and comprehensive project tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and location search',
      longDescription: 'An elegant weather dashboard featuring current conditions, 7-day forecasts, location search, weather maps, and personalized weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/muhammadrehmatwaleed/MRW-Weather-Forecast/tree/main',
      liveUrl: 'https://mrw-weather-forecast.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media application',
      longDescription: 'A robust REST API for a social media platform with user authentication, post management, following system, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      category: 'Backend',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Crypto Portfolio Tracker',
      description: 'Track cryptocurrency investments with real-time data',
      longDescription: 'A comprehensive cryptocurrency portfolio tracker with real-time price updates, profit/loss calculations, market analysis, and portfolio diversification insights.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'CoinGecko API', 'Chart.js', 'Firebase'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration',
      longDescription: 'An intuitive chat interface integrated with AI services, featuring message history, typing indicators, file sharing, and customizable chat themes.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  // Function to handle opening URLs
  const handleOpenUrl = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work and personal projects that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center space-x-1"
                      onClick={() => handleOpenUrl(project.githubUrl)}
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center space-x-1"
                      onClick={() => handleOpenUrl(project.liveUrl)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <Filter className="h-4 w-4 text-gray-500 ml-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "text-gray-600 dark:text-gray-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/80 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech}
                    variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center space-x-1 flex-1"
                    onClick={() => handleOpenUrl(project.githubUrl)}
                  >
                    <Github className="h-3 w-3" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center space-x-1 flex-1"
                    onClick={() => handleOpenUrl(project.liveUrl)}
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Live</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
