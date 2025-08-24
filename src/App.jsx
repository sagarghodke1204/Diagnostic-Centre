import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, ChevronRight, Menu, X, Calendar, FlaskConical, Heart, Brain, Droplets, Activity, ClipboardList } from 'lucide-react';

// --- Header Component ---
// The main navigation bar, including the logo, desktop menu, and mobile menu toggle.
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tests & Services', href: '#services' },
    { name: 'View Reports', href: '#reports' },
    { name: 'Book Test', href: '#booking' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <FlaskConical className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">MediLab Diagnostics</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// --- Hero Section Component ---
const Hero = () => (
  <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-b-3xl shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Accurate Diagnostics,<br />
          <span className="text-blue-200">Reliable Results</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          State-of-the-art medical testing services with fast, accurate results you can trust.
          From routine blood work to specialized diagnostics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg">
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            View Services
          </button>
        </div>
      </div>
    </div>
  </section>
);

// --- Quick Contact Bar Component ---
const QuickContactBar = () => (
  <section className="bg-gray-50 py-4 shadow-inner">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
        <div className="flex items-center text-gray-700">
          <Phone className="h-4 w-4 mr-2 text-blue-600" />
          <span className="font-medium">Emergency:</span>
          <span className="ml-1">+91-9876543210</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock className="h-4 w-4 mr-2 text-blue-600" />
          <span className="font-medium">Hours:</span>
          <span className="ml-1">Mon-Sat 7AM-9PM, Sun 8AM-6PM</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
          <span className="font-medium">Multiple Locations</span>
        </div>
      </div>
    </div>
  </section>
);

// --- Section with a title and optional subtitle ---
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h3>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

// --- Services Card Component ---
const ServiceCard = ({ icon: Icon, title, description, link = '#' }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
    <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <a href={link} className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center transition-colors">
      Learn More <ChevronRight className="h-4 w-4 ml-1" />
    </a>
  </div>
);

// --- Services Section using ServiceCard components ---
const ServicesSection = () => {
  const services = [
    { icon: Droplets, title: 'Blood Tests', description: 'Complete blood count, lipid profile, diabetes screening, and more', color: 'text-red-500' },
    { icon: ClipboardList, title: 'Urine Analysis', description: 'Kidney function, UTI detection, protein levels, and metabolic screening', color: 'text-yellow-500' },
    { icon: Heart, title: 'Cardiac Tests', description: 'ECG, stress tests, cardiac enzymes, and heart health screening', color: 'text-red-500' },
    { icon: Brain, title: 'Specialized Tests', description: 'Hormonal, genetic, allergy, and advanced diagnostic testing', color: 'text-purple-500' },
  ];

  return (
    <Section id="services" title="Our Testing Services" subtitle="Comprehensive diagnostic testing with cutting-edge technology and expert analysis">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="text-center">
              <service.icon className={`h-12 w-12 ${service.color} mx-auto mb-4`} />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Feature Card Component for "Why Choose Us" section ---
const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
  <div className="text-center">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${iconBgColor}`}>
      <Icon className={`h-8 w-8 ${iconColor}`} />
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Why Choose Us Section using FeatureCard components ---
const WhyChooseUs = () => (
  <Section id="why-choose-us" title="Why Choose MediLab?" subtitle="Trusted by thousands of patients and healthcare providers across the region">
    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard
        icon={Shield}
        title="NABL Accredited"
        description="Certified quality standards ensuring accurate and reliable test results every time."
        iconBgColor="bg-blue-100"
        iconColor="text-blue-600"
      />
      <FeatureCard
        icon={Activity}
        title="Fast Results"
        description="Quick turnaround times with most results available within 24-48 hours."
        iconBgColor="bg-green-100"
        iconColor="text-green-600"
      />
      <FeatureCard
        icon={Users}
        title="Expert Team"
        description="Experienced pathologists and technicians with years of diagnostic expertise."
        iconBgColor="bg-purple-100"
        iconColor="text-purple-600"
      />
    </div>
  </Section>
);

// --- Stats Section Component ---
const StatsSection = () => {
  const stats = [
    { value: '50,000+', label: 'Tests Performed' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Sample Collection' },
    { value: '99.9%', label: 'Accuracy Rate' },
  ];

  return (
    <section className="bg-blue-600 text-white py-16 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Section Component ---
const AboutSection = () => (
  <Section id="about" title="About MediLab Diagnostics">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">About MediLab Diagnostics</h3>
        <p className="text-lg text-gray-600 mb-6">
          With over 15 years of experience in medical diagnostics, MediLab has been at the forefront
          of providing accurate, reliable, and timely diagnostic services to patients and healthcare
          providers throughout the region.
        </p>
        <p className="text-gray-600 mb-6">
          Our state-of-the-art laboratories are equipped with the latest technology and staffed by
          experienced professionals who are committed to maintaining the highest standards of quality
          and patient care.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Learn More
          </button>
          <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            View Certifications
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Emergency Services</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
          <div className="text-gray-600">Test Parameters</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">10+</div>
          <div className="text-gray-600">Locations</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
          <div className="text-gray-600">Confidential</div>
        </div>
      </div>
    </div>
  </Section>
);

// --- Contact Section Component ---
const ContactSection = () => (
  <section id="contact" className="bg-gray-900 text-white py-16 rounded-t-3xl shadow-xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Ready to book your test? Contact us today for appointments, home collection, or any questions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Phone className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Call Us</h4>
          <p className="text-gray-300">+91-9876543210</p>
          <p className="text-gray-300">+91-9876543211</p>
        </div>

        <div className="text-center">
          <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Mail className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Email Us</h4>
          <p className="text-gray-300">info@medilabdiagnostics.com</p>
          <p className="text-gray-300">support@medilabdiagnostics.com</p>
        </div>

        <div className="text-center">
          <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <MapPin className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          <p className="text-gray-300">123 Health Street</p>
          <p className="text-gray-300">Medical District, City 400001</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg">
          Schedule Your Test Today
        </button>
      </div>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <FlaskConical className="h-8 w-8 text-blue-400 mr-3" />
            <h4 className="text-xl font-bold text-white">MediLab</h4>
          </div>
          <p className="text-gray-400 text-sm">
            Leading diagnostic laboratory providing accurate medical testing services with a commitment to quality and patient care.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Blood Tests</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Urine Analysis</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Cardiac Tests</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Specialized Tests</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Book Appointment</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">View Reports</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Health Packages</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Download App</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-4">Contact Info</h5>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +91-9876543210
            </p>
            <p className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              info@medilabdiagnostics.com
            </p>
            <p className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              123 Health Street, Medical District
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <p className="text-gray-400">
          © 2025 MediLab Diagnostics. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  </footer>
);


// --- Main App Component ---
// This is the main component that renders all the refactored sections.
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <QuickContactBar />
        <ServicesSection />
        <WhyChooseUs />
        <StatsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
