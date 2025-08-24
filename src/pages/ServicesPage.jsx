import React, { useState } from 'react';
import labLogo from '../assets/logo/img.png';
import { ChevronLeft, ChevronRight, Droplets, ClipboardList, Heart, Brain } from 'lucide-react';

// --- Header Component (with Logo) ---
const Header = () => (
    <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

            <div className="flex items-center space-x-3">
                <img
                    src={labLogo}   // <-- replace with your logo path
                    alt="HealthCare Logo"
                    className="h-10 w-10 rounded-full shadow-md"
                />
                <h1 className="text-2xl font-bold">HealthCare Diagnostics</h1>
            </div>

            {/* Navigation */}
            <nav className="space-x-6">
                <a href="/" className="hover:text-gray-200">Home</a>
                <a href="/services" className="hover:text-gray-200">Services</a>
                <a href="/about" className="hover:text-gray-200">About</a>
                <a href="/contact" className="hover:text-gray-200">Contact</a>
            </nav>
        </div>
    </header>
);

// --- Footer Component ---
const Footer = () => (
    <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} HealthCare Diagnostics. All rights reserved.</p>
        </div>
    </footer>
);

// --- Services Data ---
const servicesData = [
    {
        id: 'blood-tests',
        title: 'Blood Tests',
        icon: Droplets,
        color: 'text-red-500',
        description: 'A wide range of blood tests including CBC, lipid profile, liver function tests, and more.',
        details: {
            fullDescription: 'Our laboratory offers a comprehensive range of blood tests...',
            includes: [
                'Complete Blood Count (CBC)',
                'Lipid Profile',
                'Liver Function Test (LFT)',
                'Kidney Function Test (KFT)',
                'Thyroid Function Test (TFT)',
                'Diabetes Screening'
            ]
        }
    },
    {
        id: 'urine-analysis',
        title: 'Urine Analysis',
        icon: ClipboardList,
        color: 'text-yellow-500',
        description: 'Routine and microscopic urine analysis for detection of infections.',
        details: {
            fullDescription: 'Urine analysis is a crucial diagnostic tool...',
            includes: [
                'Routine Urinalysis',
                'Urine Culture',
                'Microscopic Examination',
                'Protein and Creatinine Levels'
            ]
        }
    },
    {
        id: 'cardiac-tests',
        title: 'Cardiac Tests',
        icon: Heart,
        color: 'text-red-500',
        description: 'Comprehensive cardiac health screening including ECG, lipid profile, and enzyme tests.',
        details: {
            fullDescription: 'We offer a variety of cardiac tests to assess risk factors...',
            includes: [
                'Electrocardiogram (ECG)',
                'Lipid Profile',
                'Cardiac Enzymes',
                'C-Reactive Protein (CRP)'
            ]
        }
    },
    {
        id: 'specialized-tests',
        title: 'Specialized Tests',
        icon: Brain,
        color: 'text-purple-500',
        description: 'Advanced diagnostic testing for hormonal imbalances, allergies, and genetics.',
        details: {
            fullDescription: 'We provide a wide array of specialized tests...',
            includes: [
                'Hormonal Assays',
                'Allergy Panels',
                'Genetic Testing',
                'Tumor Markers',
                'Drug Level Monitoring'
            ]
        }
    }
];

// --- Service Card Component ---
const ServiceCard = ({ onSelect, service }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
        <service.icon className={`h-12 w-12 ${service.color} mx-auto mb-4`} />
        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <button
            onClick={() => onSelect(service)}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center transition-colors"
        >
            Learn More <ChevronRight className="h-4 w-4 ml-1" />
        </button>
    </div>
);

// --- Services Section ---
const ServicesSection = ({ onServiceSelect }) => (
    <section id="services" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Testing Services</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive diagnostic testing with cutting-edge technology and expert analysis
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map(service => (
                    <ServiceCard key={service.id} service={service} onSelect={onServiceSelect} />
                ))}
            </div>
        </div>
    </section>
);

// --- Service Details Page ---
const ServiceDetailsPage = ({ service, onGoBack, onBookNow }) => {
    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h2>
                <button
                    onClick={onGoBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-3xl shadow-2xl relative">
                    <button
                        onClick={onGoBack}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" />
                        Back to Services
                    </button>

                    <div className="text-center mb-10">
                        <service.icon className={`h-20 w-20 ${service.color} mx-auto mb-4`} />
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600">{service.details.fullDescription}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included?</h3>
                        <ul className="space-y-2 text-gray-700 list-disc list-inside">
                            {service.details.includes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => onBookNow(service.title)}
                            className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Book {service.title}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Services Page ---
const ServicesPage = ({ onBookNow }) => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <>
            <Header />
            {selectedService ? (
                <ServiceDetailsPage
                    service={selectedService}
                    onGoBack={() => setSelectedService(null)}
                    onBookNow={onBookNow}
                />
            ) : (
                <ServicesSection onServiceSelect={setSelectedService} />
            )}
            <Footer />
        </>
    );
};

export default ServicesPage;
