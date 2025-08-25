import { Github, Linkedin, Twitter, Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/muhammadrehmatwaleed',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-rehmat-waleed-0b41432a7/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                MRW
              </div>
              <span className="text-2xl font-bold">Muhammad Rehmat Waleed</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web applications 
              and solving complex problems with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="muhammadrehmatwaleed.367@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  muhammadrehmatwaleed.367@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+92 326 0705367"
                  className="hover:text-white transition-colors duration-300"
                >
                  +92 326 0705367
                </a>
              </li>
              <li>Faisalabad,Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-blue-500" />
              <span>by Muhammad Rehmat Waleed</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {2025} Muhammad Rehmat Waleed. All rights reserved.
            </div>
            
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}