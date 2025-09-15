import React, { useState } from 'react';
// The local file path for the logo is causing a compilation error.
// To fix this, we'll use a placeholder image URL instead.
import labLogo from '../assets/logo/img.png';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// --- Packages Data ---
// This array holds all the information for the different health packages,
// including their title, price range, and the list of tests they include.
const packagesData = [
    {
        id: 'gd-women-basic',
        title: 'GD Women Basic',
        price: '2200 ',
        includes: [
            'Estradiol',
            'CBC-Complete Hemogram Test(28)',
            'Iron Studies (Iron,TIBC, Transferrin saturation)',
            'LFT (Liver Function Test)',
            'Kidney Profile',
            'Lipid Profile',
            'GD Wellness Vitamin Profile (3)',
            'Hba1c (Whole Blood)',
            'Thyroid Profile - Total T3,Total T4,TSH (TFT)',
            'FSH, LH & Prolactin',
        ],
    },
    {
        id: 'fit-man',
        title: 'Fit Man',
        price: '1299 ',
        includes: [
            'Calcium',
            'Serum Creatinine',
            'Aspartate AminoTransferase (SGOT)',
            'Alanine Transaminase (SGPT)',
            'Uric Acid',
            'Sugar (Glucose) Fasting',
            'Prostate Specific Antigen (PSA)-Total',
            'Urine Complete',
            'Rheumatoid Factor (RF)',
            'Lipid Profile',
            'CBC-Complete Hemogram Test(28)',
        ],
    },
    {
        id: 'gd-advance-men',
        title: 'GD Advance Men Package',
        price: '2200 ',
        includes: [
            'Urine Complete',
            'Specific Cardiac Profile (6 Parameters)',
            'CBC-Complete Hemogram Test(28)',
            'Iron Studies (Iron,TIBC, Transferrin saturation)',
            'LFT (Liver Function Test)',
            'Kidney Profile',
            'Lipid Profile',
            '25 OH Vitamin D',
            'Hba1c (Whole Blood)',
            'Thyroid Profile - Total T3,Total T4,TSH (TFT)',
            'Lipase',
            'Serum Electrolyte Profile',
            'Prostate Specific Antigen (PSA)-Total',
            'Amylase',
            'Vitamin B12',
        ],
    },
    {
        id: 'gd-women-advance',
        title: 'GD Women Advance',
        price: '2800 ',
        includes: [
            'Specific Cardiac Profile (6 Parameters)',
            'CBC-Complete Hemogram Test(28)',
            'Iron Studies (Iron,TIBC, Transferrin saturation)',
            'LFT (Liver Function Test)',
            'Kidney Profile',
            'Lipid Profile',
            'GD Wellness Vitamin Profile (3)',
            'Hba1c (Whole Blood)',
            'Thyroid Profile - Total T3,Total T4,TSH (TFT)',
            'ANTI CCP (ACCP)',
            'Calcium',
            'FSH, LH & Prolactin',
            'Estradiol',
        ],
    },

    {
        id: 'regular check up',
        title: 'Routine Check Up',
        price: 'Varies with tests ',
        includes: [
            'Specific Cardiac Profile (6 Parameters)',
            'CBC-Complete Hemogram Test(28)',
            'Iron Studies (Iron,TIBC, Transferrin saturation)',
            'LFT (Liver Function Test)',
            'Kidney Profile',
            'Lipid Profile',
            'GD Wellness Vitamin Profile (3)',
            'Hba1c (Whole Blood)',
            'Thyroid Profile - Total T3,Total T4,TSH (TFT)',
            'ANTI CCP (ACCP)',
            'Calcium',
            'FSH, LH & Prolactin',
            'Estradiol',
        ],
    },
];

// --- Header Component (with Logo) ---
// This component provides the top navigation bar.
const Header = () => (
    <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <img
                    src={labLogo}
                    alt="HealthCare Logo"
                    className="h-10 w-10 rounded-full shadow-md"
                />
                <h1 className="text-2xl font-bold">General Diagnostics</h1>
            </div>
            <nav className="space-x-6">
                <a href="/" className="hover:text-gray-200">Home</a>
                <a href="/packages" className="hover:text-gray-200"></a>
                <a href="/about" className="hover:text-gray-200"></a>
                <a href="/contact" className="hover:text-gray-200"></a>
            </nav>
        </div>
    </header>
);

// --- Footer Component ---
// This component displays the copyright information.
const Footer = () => (
    <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} General Diagnostics. All rights reserved.</p>
        </div>
    </footer>
);

// --- Package Card Component ---
// Renders an individual package card with enhanced visual design and hover effects.
const PackageCard = ({ onSelect, packageItem }) => (
    <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 cursor-pointer flex flex-col items-center text-center group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <h4 className="text-2xl font-bold text-gray-900 mb-2 mt-4">{packageItem.title}</h4>
        <p className="text-gray-600 text-lg font-bold mb-4 flex-grow">
            Price: <span className="text-blue-600">₹{packageItem.price}</span>
        </p>
        <button
            onClick={() => onSelect(packageItem)}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center transition-colors"
        >
            View Details <ChevronRight className="h-4 w-4 ml-1" />
        </button>
    </div>
);

// --- Packages Section ---
// This is the main section that displays all the packages as a grid of cards.
const PackagesSection = ({ onPackageSelect }) => (
    <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Comprehensive Health Packages</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Choose from our thoughtfully curated health check-up packages designed to suit different needs and lifestyles.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                {packagesData.map((packageItem) => (
                    <PackageCard key={packageItem.id} packageItem={packageItem} onSelect={onPackageSelect} />
                ))}
            </div>
        </div>
    </section>
);

// --- Package Details Page ---
// This page shows the detailed information for a single, selected package.
const PackageDetailsPage = ({ packageItem, onGoBack, onBookNow }) => {
    if (!packageItem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h2>
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
                        Back to Packages
                    </button>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">{packageItem.title}</h2>
                        <p className="text-xl font-bold text-blue-600 mb-4">
                            ₹{packageItem.price}
                        </p>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included?</h3>
                        <ul className="space-y-3 mt-6">
                            {packageItem.includes.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center mt-12">
                        <button
                            onClick={() => onBookNow(packageItem.title)}
                            className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Book {packageItem.title}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Packages Page ---
const PackagesPage = ({ onBookNow }) => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    return (
        <>
            <Header />
            {selectedPackage ? (
                <PackageDetailsPage
                    packageItem={selectedPackage}
                    onGoBack={() => setSelectedPackage(null)}
                    onBookNow={onBookNow}
                />
            ) : (
                <PackagesSection onPackageSelect={setSelectedPackage} />
            )}
            <Footer />
        </>
    );
};

export default PackagesPage;
