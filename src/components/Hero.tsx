import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src="mrw.jpeg"
                alt="Muhammad Rehmat Waleed"
                className="object-cover w-full h-full rounded-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Animated Greeting */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Muhammad Rehmat Waleed</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 h-12">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold transition-all duration-500">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web applications and solving complex problems with clean, efficient code. 
            I specialize in the MERN stack and love bringing ideas to life through technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}