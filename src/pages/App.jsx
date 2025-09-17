import React, { useState ,useEffect} from 'react';
import {
    Phone, Mail, MapPin, Clock, Users, Shield, Activity, Calendar, Menu, X, Heart
} from 'lucide-react';

import BookingPage from './BookingPage.jsx';
import ServicesPage from './ServicesPage.jsx';

import labLogo from '../assets/logo/img.png';
import labLocationImage from '../assets/images/img.png';
import BgVideoHome from '../assets/video/Home3.mp4';


// --- Reusable Section Component ---
const Section = ({ id, title, subtitle, children }) => (
    <section id={id} className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">{title}</h2>
                <p className="mt-4 text-lg text-slate-400">{subtitle}</p>
            </div>
            {children}
        </div>
    </section>
);

// --- Header Component ---
const Header = ({ onBookNow, onViewServices }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { name: 'Tests & Services', onClick: onViewServices },
        { name: 'Book Test', onClick: onBookNow },
        { name: 'Location', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },

    ];

    return (
        <header className="bg-slate-900/50 backdrop-blur-md shadow-lg sticky top-0 z-50 rounded-b-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={labLogo} alt="Logo" className="h-10 w-10 rounded-full shadow-lg" />
                        <h1 className="text-2xl font-extrabold text-white tracking-wide ml-3">General Diagnostics</h1>
                    </div>

                    <nav className="hidden lg:flex space-x-6 font-medium">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={item.onClick}
                                className="text-slate-300 hover:text-cyan-400 transition-colors hover:underline underline-offset-4"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-slate-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="lg:hidden pb-4 transition-all duration-300 ease-in-out">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => { item.onClick(); setIsMenuOpen(false); }}
                                    className="text-slate-300 hover:text-cyan-400 font-medium py-2 px-4 rounded-lg transition-colors hover:bg-slate-800"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

const Hero = ({ onBookNow, onViewServices }) => {
    const [animate, setAnimate] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // stop observing after trigger
                }
            },
            { threshold: 0.3 } // trigger when 30% of Hero is visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="home"
            ref={ref}
            className="relative text-white py-24 md:py-40 rounded-b-3xl shadow-lg overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={BgVideoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Theme Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-indigo-800/70"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                {/* Main Heading */}
                <h2
                    className={`text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg transition-all duration-700 ${
                        animate
                            ? "animate-fade-in-up [animation-delay:0.1s]"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Accurate Results,
                    <br />
                    <span className="text-cyan-400">Timely Delivered</span>
                </h2>

                {/* Subheading */}
                <p
                    className={`text-lg md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto font-light transition-all duration-700 ${
                        animate
                            ? "animate-fade-in-up [animation-delay:0.3s]"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    India's Leading & Most Reputed Diagnostic Chain with state-of-the-art
                    medical testing services.
                </p>

                {/* Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                        animate
                            ? "animate-fade-in-up [animation-delay:0.5s]"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <button
                        onClick={onBookNow}
                        className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg flex items-center justify-center transform hover:scale-105"
                    >
                        <Calendar className="h-5 w-5 mr-2" /> Book Appointment
                    </button>
                    <button
                        onClick={onViewServices}
                        className="border-2 border-slate-300 text-slate-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                    >
                        View Services
                    </button>
                </div>
            </div>
        </section>
    );
};






// --- Quick Contact Bar ---
const QuickContactBar = () => (
    <section className="bg-slate-800 text-white py-4 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
                <div className="flex items-center text-slate-300">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="font-medium">Contact:</span>
                    <span className="ml-1">+91 9373999536</span>
                </div>
                <div className="flex items-center text-slate-300">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="font-medium">Hours:</span>
                    <span className="ml-1">Mon-Sat 7AM-8PM, Sun 7AM-2PM</span>
                </div>
                <div className="flex items-center text-slate-300">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="font-medium">Address:</span>
                    <a href="https://maps.google.com/?cid=4619259872661213091" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-cyan-400 underline transition-colors">
                        Shop No. 36 A1, Majestique Manhattan, Wagholi, Pune-412207
                    </a>
                </div>
            </div>
        </div>
    </section>
);

// --- Feature Section ---
const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
    <div className="text-center bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${iconBgColor}`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
        <p className="text-slate-400">{description}</p>
    </div>
);

const WhyChooseUs = () => (
    <section id="why-choose-us" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose General Diagnostics?</h3>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">Trusted by thousands of patients and healthcare providers across the region</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard icon={Shield} title="Certified Quality" description="Certified quality standards ensuring accurate and reliable test results every time." iconBgColor="bg-blue-800/30" iconColor="text-blue-400" />
                <FeatureCard icon={Activity} title="Fast Results" description="Quick turnaround times with most results available within 24-48 hours." iconBgColor="bg-green-800/30" iconColor="text-green-400" />
                <FeatureCard icon={Users} title="Home Collection" description="Convenient home collection services available, saving you time and effort." iconBgColor="bg-purple-800/30" iconColor="text-purple-400" />
            </div>
        </div>
    </section>
);

// --- Stats Section ---
const StatsSection = () => {
    const stats = [
        { value: '50,000+', label: 'Tests Performed' },
        { value: '15+', label: 'Years Experience' },
        { value: '7AM-8PM', label: 'Daily Service' },
        { value: '99.9%', label: 'Accuracy Rate' },
    ];

    return (
        <section className="bg-gradient-to-r from-cyan-800 to-indigo-900 text-white py-16 rounded-2xl mx-4 sm:mx-6 lg:mx-8 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-cyan-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- About Section ---
const AboutSection = () => (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 scroll-mt-20">
        {/* Decorative top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z" fill="#1e293b" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">About General Diagnostics</h2>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                    Trusted diagnostic services delivering accurate results with timely reporting.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Our Commitment to Your Health</h3>
                    <p className="text-slate-300 mb-4">
                        General Diagnostics has been at the forefront of providing accurate, reliable, and timely diagnostic services to patients and healthcare providers.
                    </p>
                    <p className="text-slate-300 mb-4">
                        Our state-of-the-art laboratories are equipped with the latest technology and staffed by experienced professionals committed to maintaining the highest standards of quality and patient care.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">Home</div>
                        <div className="text-slate-300">Collection Available</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
                        <div className="text-slate-300">Test Parameters</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-purple-400 mb-2">Parvati</div>
                        <div className="text-slate-300">Collection Center</div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-red-400 mb-2">100%</div>
                        <div className="text-slate-300">Confidential</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z" fill="#1e293b" />
            </svg>
        </div>
    </section>
);



// --- Contact Section (Standalone & Compact) ---
const ContactSection = ({ onBookNow }) => (
    <section id="contact" className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
                <p className="mt-2 text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
                    Have questions or need assistance? Reach out to us anytime.
                </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                {/* Info Card */}
                <div className="bg-slate-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-white mb-3">Get in Touch</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-cyan-400" /><span>Shop No. 36 A1, Majestique Manhattan, Wagholi, Pune-412207</span></li>
                        <li className="flex items-center space-x-2"><Phone className="h-4 w-4 text-cyan-400" /><span>+91 9373999536</span></li>
                        <li className="flex items-center space-x-2"><Mail className="h-4 w-4 text-cyan-400" /><span>maheshdapkeakar2016@gmail.com</span></li>
                        <li className="flex items-center space-x-2"><Clock className="h-4 w-4 text-cyan-400" /><span>Mon-Sat 7AM-8PM, Sun 7AM-2PM</span></li>
                    </ul>
                    <div className="mt-4 text-center">
                        <button onClick={onBookNow} className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-sm">
                            Book Appointment
                        </button>
                    </div>
                </div>

                {/* Map Card */}
                <div className="bg-slate-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-white mb-3 text-center">Our Location</h4>
                    <div className="overflow-hidden rounded-xl shadow-sm">
                        <a href="https://maps.google.com/?cid=4619259872661213091" target="_blank" rel="noopener noreferrer">
                            <img src={labLocationImage} alt="Map location" className="w-full h-auto rounded-md" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- Footer ---
const Footer = () => (
    <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={labLogo} alt="Logo" className="h-8 w-8 mr-3 rounded-full" />
                        <h4 className="text-xl font-bold text-white">General Diagnostics</h4>
                    </div>
                    <p className="text-slate-400 text-sm">Leading diagnostic laboratory providing accurate medical testing services.</p>
                </div>
                <div>
                    <h5 className="text-white font-semibold mb-4">Services</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Blood Tests</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Urine Analysis</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Cardiac Tests</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Specialized Tests</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-semibold mb-4">Quick Links</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Book Appointment</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">View Reports</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Health Packages</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Download App</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-semibold mb-4">Contact</h5>
                    <ul className="space-y-2 text-sm">
                        <li>+91 9373999536</li>
                        <li>maheshdapkeakar2016@gmail.com</li>
                        <li>Shop No. 36 A1, Majestique Manhattan, Wagholi, Pune-412207</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-slate-500 text-sm">&copy; {new Date().getFullYear()} General Diagnostics. All rights reserved.</div>
        </div>
    </footer>
);

// --- Main App Component ---
const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedService, setSelectedService] = useState(null);

    const handleBookNow = (serviceTitle) => {
        setSelectedService(serviceTitle || null);
        setCurrentPage('booking');
    };

    const handleGoBack = () => {
        setCurrentPage('home');
        setSelectedService(null);
    };

    const handleViewServices = () => {
        setCurrentPage('services');
        setSelectedService(null);
    };

    if (currentPage === 'booking') {
        return <BookingPage onGoBack={handleGoBack} service={selectedService} />;
    }

    if (currentPage === 'services') {
        return <ServicesPage onGoBack={handleGoBack} onBookNow={handleBookNow} selectedService={selectedService} />;
    }

    return (
        <div className="min-h-screen bg-slate-900 font-sans text-white">
            <Header onBookNow={handleBookNow} onViewServices={handleViewServices} />
            <main>
                <Hero onBookNow={handleBookNow} onViewServices={handleViewServices} />
                <QuickContactBar />
                <WhyChooseUs />
                <StatsSection />
                <AboutSection />
                <ContactSection onBookNow={handleBookNow} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
