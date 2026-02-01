import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, Menu, X, Globe, Anchor, Heart } from 'lucide-react';

// --- Brand Colors ---
// Derived from the business card:
// Navy: #2d3e50 (approximate)
// Gold: #c4a059 (approximate)

const Branding = {
  colors: {
    primary: "bg-[#2d3e50]",
    primaryText: "text-[#2d3e50]",
    accent: "bg-[#c4a059]",
    accentText: "text-[#c4a059]",
    light: "bg-slate-50",
  }
};

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-3">
    {/* SVG Recreation of the JD Logo */}
    <div className="relative w-12 h-12 bg-[#2d3e50] flex items-center justify-center shadow-sm rounded-sm">
      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none stroke-[#c4a059]" strokeWidth="6">
        {/* J */}
        <path d="M 40 20 V 70 A 15 15 0 0 1 10 70" strokeLinecap="round" />
        {/* D */}
        <path d="M 50 20 H 70 A 25 25 0 0 1 70 80 H 50 V 20" strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-bold leading-tight ${Branding.colors.primaryText} tracking-tight`}>
        JamDelphia
      </span>
      <span className={`text-sm font-medium tracking-wider text-gray-500 uppercase`}>
        Group LLC
      </span>
    </div>
  </div>
);

const Navigation = ({ isOpen, setIsOpen }) => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-gray-600 hover:text-[#c4a059] font-medium transition-colors">Our Roots</a>
          <a href="#portfolio" className="text-gray-600 hover:text-[#c4a059] font-medium transition-colors">Ventures</a>
          <a href="#contact" className="text-gray-600 hover:text-[#c4a059] font-medium transition-colors">Contact</a>
          <a href="mailto:jamdelphiagroup@gmail.com" className={`px-5 py-2 rounded-full text-white font-medium transition-transform hover:scale-105 ${Branding.colors.primary}`}>
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-gray-800" /> : <Menu className="text-gray-800" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {isOpen && (
      <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Our Roots</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Ventures</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    )}
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-16 pb-24 lg:pt-32 lg:pb-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 ${Branding.colors.primaryText} text-sm font-semibold mb-6`}>
          <span className="w-2 h-2 rounded-full bg-[#c4a059]"></span>
          Building Legacy & Community
        </div>
        <h1 className={`text-4xl md:text-6xl font-bold tracking-tight ${Branding.colors.primaryText} mb-6`}>
          Rooted in Heritage.<br />
          <span className={`${Branding.colors.accentText}`}>Focused on the Future.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          JamDelphia Group is a holding company founded on the principles of integrity and service. 
          Bridging the vibrant spirit of Jamaica with the historic strength of Philadelphia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#portfolio" className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white rounded-lg transition-all shadow-lg hover:shadow-xl ${Branding.colors.primary} hover:bg-opacity-90`}>
            View Our Companies
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#about" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#2d3e50] bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
            Read Our Story
          </a>
        </div>
      </div>
    </div>
    
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c4a059] opacity-10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-[#2d3e50] opacity-5 rounded-full blur-3xl"></div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold ${Branding.colors.primaryText} mb-6`}>
            The JamDelphia Story
          </h2>
          <div className="w-20 h-1 bg-[#c4a059] mb-8"></div>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Founded by <strong className="text-gray-900">Dain and Demetria Russell</strong>, JamDelphia Group LLC represents more than just a business entity—it is a convergence of cultures, histories, and shared values.
            </p>
            <p>
              The name <strong>"JamDelphia"</strong> is a heartfelt homage to our origins:
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <div className={`p-2 rounded-lg ${Branding.colors.primary} bg-opacity-10 mr-4 mt-1`}>
                  <Globe className={`w-5 h-5 ${Branding.colors.primaryText}`} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jamaica</h4>
                  <p className="text-sm">The island roots that provide our resilience, warmth, and vibrant perspective.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className={`p-2 rounded-lg ${Branding.colors.primary} bg-opacity-10 mr-4 mt-1`}>
                  <Anchor className={`w-5 h-5 ${Branding.colors.primaryText}`} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Philadelphia</h4>
                  <p className="text-sm">The city of brotherly love, history, and the grit that drives our work ethic.</p>
                </div>
              </li>
            </ul>
            <p className="pt-4 border-t border-gray-100">
              Together, we are building a portfolio of companies that reflect the best of both worlds—authentic service and professional excellence.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-tr from-[#2d3e50] to-transparent opacity-10 rounded-2xl transform rotate-3 scale-105`}></div>
          <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-xl relative z-10 text-center">
             <Heart className={`w-12 h-12 mx-auto mb-6 ${Branding.colors.accentText}`} />
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
             <p className="text-gray-600 italic">
               "To create sustainable businesses that serve our community with the warmth of the islands and the strength of the city."
             </p>
             <div className="mt-8 pt-8 border-t border-gray-200">
               <div className="font-semibold text-gray-900">Dain & Demetria Russell</div>
               <div className="text-sm text-gray-500">Founders</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-bold ${Branding.colors.primaryText}`}>Our Companies</h2>
        <p className="mt-4 text-xl text-gray-500">The current portfolio of JamDelphia Group LLC.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Card 1: Signature Seal */}
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
          <div className={`h-2 ${Branding.colors.accent}`}></div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="mb-6">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">
                 ✒️
               </div>
               <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#c4a059] transition-colors">
                 Signature Seal Notary
               </h3>
               <p className="text-sm text-gray-400 font-medium mt-1">Professional Services</p>
            </div>
            
            <p className="text-gray-600 mb-8 flex-1">
              Provides reliable, verified mobile notary and signing services. Ensuring your documents are handled with precision and care.
            </p>
            
            <a 
              href="https://signaturesealnotaries.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center font-semibold ${Branding.colors.accentText} hover:text-[#a38344] transition-colors`}
            >
              Visit Website <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Placeholder for Future Growth */}
        <div className="bg-slate-100 rounded-xl border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center opacity-70">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl text-gray-400">+</span>
          </div>
          <h3 className="text-xl font-bold text-gray-500">Future Ventures</h3>
          <p className="text-sm text-gray-400 mt-2">Expanding our horizon soon.</p>
        </div>

      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className={`py-20 ${Branding.colors.primary} text-white`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-md">
            Whether you are looking for notary services or interested in partnership opportunities, we are here to help.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className={`w-12 h-12 rounded-full ${Branding.colors.accent} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium">Call Us</p>
                <a href="tel:3049824165" className="text-xl font-semibold hover:text-[#c4a059] transition-colors">
                  (304) 982-4165
                </a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className={`w-12 h-12 rounded-full ${Branding.colors.accent} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium">Email Us</p>
                <a href="mailto:jamdelphiagroup@gmail.com" className="text-xl font-semibold hover:text-[#c4a059] transition-colors">
                  jamdelphiagroup@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4`}>
                <MapPin className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <p className="text-sm text-slate-300 font-medium">Based In</p>
                <p className="text-xl font-semibold">West Virginia / Pennsylvania Region</p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Contact Form Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className={`text-2xl font-bold ${Branding.colors.primaryText} mb-6`}>Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a059] focus:border-transparent outline-none text-gray-900" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a059] focus:border-transparent outline-none text-gray-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a059] focus:border-transparent outline-none text-gray-900" placeholder="How can we help?"></textarea>
            </div>
            <button className={`w-full py-3 rounded-lg font-bold text-white shadow-md hover:shadow-lg transition-all ${Branding.colors.accent} hover:opacity-90`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1e2a36] text-slate-400 py-12 border-t border-slate-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
         <div className="w-8 h-8 bg-slate-700 flex items-center justify-center rounded-sm">
            <span className="font-bold text-[#c4a059] text-xs">JD</span>
         </div>
         <span className="text-white font-medium">JamDelphia Group LLC</span>
      </div>
      
      <div className="text-sm text-center md:text-right">
        <p>&copy; {new Date().getFullYear()} JamDelphia Group LLC. All rights reserved.</p>
        <p className="mt-1">Dain Russell • Founder & Managing Member</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
