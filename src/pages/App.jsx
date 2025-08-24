import React, { useState } from 'react';
import {
    Phone, Mail, MapPin, Clock, Users, Shield, Award, ChevronRight, Menu, X, Calendar,
    FlaskConical, Heart, Brain, Droplets, Activity, ClipboardList, User, BriefcaseMedical, CheckCircle, Home, ChevronLeft, MessageSquare
} from 'lucide-react';

// Import BookingPage and ServicesPage
import BookingPage from './BookingPage.jsx';
import ServicesPage from './ServicesPage.jsx';

// Image assets
import labLogo from '../assets/logo/img.png';
import labLocationImage from '../assets/images/img.png';

// --- Reusable Section Component ---
const Section = ({ id, title, subtitle, children }) => (
    <section id={id} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
                <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
            </div>
            {children}
        </div>
    </section>
);

// --- Header Component ---
const Header = ({ onBookNow, onViewServices }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Tests & Services', onClick: onViewServices },
        { name: 'Book Test', onClick: onBookNow },
        { name: 'Location', href: '#contact' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src={labLogo} alt="Logo" className="h-12 w-12 mr-4 rounded-full" />
                        <h1 className="text-2xl font-bold text-gray-900">General Diagnostics</h1>
                    </div>

                    <nav className="hidden lg:flex space-x-6">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href || '#'}
                                onClick={item.onClick}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors hover:underline underline-offset-4"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
                                <a
                                    key={index}
                                    href={item.href || '#'}
                                    onClick={item.onClick}
                                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg transition-colors hover:bg-gray-100"
                                >
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

// --- Hero Section ---
const Hero = ({ onBookNow, onViewServices }) => (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Accurate Results,<br />
                    <span className="text-blue-200">Timely Delivered</span>
                </h2>
                <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                    India's Leading & Most Reputed Diagnostic Chain with state-of-the-art medical testing services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={onBookNow} className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Appointment
                    </button>
                    <button onClick={onViewServices} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        View Services
                    </button>
                </div>
            </div>
        </div>
    </section>
);

// --- Quick Contact Bar ---
const QuickContactBar = () => (
    <section className="bg-white py-4 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
                <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">Contact:</span>
                    <span className="ml-1">+91 9373999536</span>
                </div>
                <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">Hours:</span>
                    <span className="ml-1">Mon-Sat 7AM-8PM, Sun 7AM-2PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">Address:</span>
                    <a href="https://maps.google.com/?cid=4619259872661213091" target="_blank" rel="noopener noreferrer" className="ml-1 hover:text-blue-600 underline transition-colors">
                        Shop No. 36 A1, Majestique Manhattan, Bawadi Road, Wagholi, Pune-412207
                    </a>
                </div>
            </div>
        </div>
    </section>
);

// --- Feature Section ---
const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => (
    <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${iconBgColor}`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyChooseUs = () => (
    <section id="why-choose-us" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose General Diagnostics?</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by thousands of patients and healthcare providers across the region</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={Shield}
                    title="Certified Quality"
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
                    title="Home Collection"
                    description="Convenient home collection services available, saving you time and effort."
                    iconBgColor="bg-purple-100"
                    iconColor="text-purple-600"
                />
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

// --- About Section ---
const AboutSection = () => (
    <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About General Diagnostics</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">About General Diagnostics</h3>
                    <p className="text-lg text-gray-600 mb-6">
                        General Diagnostics has been at the forefront of providing accurate, reliable, and timely diagnostic services to patients and healthcare providers.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Our state-of-the-art laboratories are equipped with the latest technology and staffed by experienced professionals who are committed to maintaining the highest standards of quality and patient care.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">Home</div>
                        <div className="text-gray-600">Collection Available</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
                        <div className="text-gray-600">Test Parameters</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">Parvati</div>
                        <div className="text-gray-600">Collection Center</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="text-2xl font-bold text-red-600 mb-2">100%</div>
                        <div className="text-gray-600">Confidential</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- Contact Section ---
const ContactSection = ({ onBookNow }) => (
    <Section id="contact" title="Get in Touch" subtitle="We are here to answer all your questions.">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6 text-blue-600" />
                        <span>Shop No. 36 A1, Majestique Manhattan, Bawadi Road, Wagholi, Pune-412207</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Phone className="h-6 w-6 text-blue-600" />
                        <span>+91 9373999536</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Mail className="h-6 w-6 text-blue-600" />
                        <span>maheshdapkeakar2016@gmail.com</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-blue-600" />
                        <span>Mon-Sat 7AM-8PM, Sun 7AM-2PM</span>
                    </li>
                </ul>
                <div className="mt-8">
                    <button onClick={onBookNow} className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                        Book an Appointment
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h4>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <a href="https://maps.google.com/?cid=4619259872661213091" target="_blank" rel="noopener noreferrer">
                        <img src={labLocationImage} alt="Map location" className="w-full h-auto" />
                    </a>
                </div>
            </div>
        </div>
    </Section>
);

// --- Footer ---
const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={labLogo} alt="Logo" className="h-8 w-8 mr-3 rounded-full" />
                        <h4 className="text-xl font-bold text-white">General Diagnostics</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Leading diagnostic laboratory providing accurate medical testing services.
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
                    <h5 className="text-white font-semibold mb-4">Contact</h5>
                    <ul className="space-y-2 text-sm">
                        <li>+91 9373999536</li>
                        <li>maheshdapkeakar2016@gmail.com</li>
                        <li>Shop No. 36 A1, Majestique Manhattan, Wagholi, Pune-412207</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} General Diagnostics. All rights reserved.
            </div>
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

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        setCurrentPage('services');
    };

    if (currentPage === 'booking') {
        return <BookingPage onGoBack={handleGoBack} service={selectedService} />;
    }

    if (currentPage === 'services') {
        return (
            <ServicesPage
                onGoBack={handleGoBack}
                onBookNow={handleBookNow}
                selectedService={selectedService}
            />
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
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
