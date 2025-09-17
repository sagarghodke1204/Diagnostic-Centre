import React, { useState } from 'react';
import labLogo from '../assets/logo/img.png';
import { ChevronLeft, ChevronRight, CheckCircle, HeartPulse } from 'lucide-react';
import fitManImg from '../assets/images/fit_man.png';
import gdAdvanceMenImg from '../assets/images/GD_Advance_Men.png';
import gdWomenAdvanceImg from '../assets/images/GD_Women_Advance.png';
import gdWomenBasiceImg from '../assets/images/GD_Women_Basic.png';
import routineCheckup from '../assets/images/routine-checkup.png';
import BgVideoHome from '../assets/video/test.mp4';


// --- Packages Data ---
const packagesData = [
    {
        id: 'gd-women-basic',
        title: 'GD Women Basic',
        price: '2200',
        image: gdWomenBasiceImg,
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
        price: '1299',
        image: fitManImg,
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
        image: gdAdvanceMenImg,
        price: '2200',
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
        price: '2800',
        image: gdWomenAdvanceImg,
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
        price: 'Varies with tests',
        image: routineCheckup,
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

// --- Header Component ---
const Header = () => (
    <header className="bg-slate-900/50 backdrop-blur-md text-white py-4 shadow-xl sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            {/* Logo stays the same */}
            <div className="flex items-center space-x-3 cursor-pointer">
                <img src={labLogo} alt="Logo" className="h-10 w-10 rounded-full shadow-lg" />
                <h1 className="text-2xl font-extrabold tracking-wide">General Diagnostics</h1>
            </div>

            <nav className="space-x-6 hidden md:flex font-medium">
                {/* Home button: navigates to root (App.jsx) */}
                <button
                    onClick={() => window.location.href = '/'}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                    Home
                </button>
            </nav>
        </div>
    </header>
);



// --- Footer Component ---
const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} General Diagnostics. All rights reserved.</p>
            <p className="text-xs mt-2 text-slate-600">Designed and Developed with ❤️</p>
        </div>
    </footer>
);

const HeroSection = () => (
    <section className="relative text-white py-24 md:py-40 overflow-hidden">
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

        {/* Theme Overlay (dark + indigo blend) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-indigo-800/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4 drop-shadow-2xl">
                Your Health, Our Priority
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 font-light drop-shadow-lg">
                Discover our comprehensive health packages designed to give you peace of mind with accurate diagnostics and expert care.
            </p>
            <button
                onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-400 text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl
                           hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Explore Packages
            </button>
        </div>
    </section>
);

// --- Package Card ---
const PackageCard = ({ packageItem, onSelect }) => (
    <div className="relative bg-white/5 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 hover:border-cyan-400 cursor-pointer flex flex-col items-center text-center group">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
            <CheckCircle className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-2">{packageItem.title}</h4>
        <p className="text-slate-400 text-xl font-bold mb-4 flex-grow">
            <span className="text-cyan-400">₹{packageItem.price}</span>
        </p>
        <button
            onClick={() => onSelect(packageItem)}
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center transition-colors mt-auto"
        >
            View Details <ChevronRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
);

// --- Packages Section ---
const PackagesSection = ({ onPackageSelect }) => (
    <section id="packages" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    Our Comprehensive Health Packages
                </h3>
                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    Choose from our thoughtfully curated health check-up packages designed to suit different needs and lifestyles.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {packagesData.map((pkg) => (
                    <PackageCard key={pkg.id} packageItem={pkg} onSelect={onPackageSelect} />
                ))}
            </div>
        </div>
    </section>
);

// --- Package Details Page ---
const PackageDetailsPage = ({ packageItem, onGoBack, onBookNow }) => {
    if (!packageItem) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-white">
            <h2 className="text-3xl font-bold mb-4">Package Not Found</h2>
            <button onClick={onGoBack} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                <ChevronLeft className="w-5 h-5 mr-2" /> Go Back
            </button>
        </div>
    );

    return (
        <section
            className="py-20 min-h-screen relative text-white"
            style={{
                backgroundImage: `url(${packageItem.image || '/images/default-bg.jpg'})`, // 👈 use package-specific image
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/85"></div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-800/90 p-10 rounded-3xl shadow-2xl relative border border-slate-700">
                    <button onClick={onGoBack} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 text-lg font-semibold">
                        <ChevronLeft className="w-5 h-5 mr-2" /> Back to Packages
                    </button>

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold mb-2">{packageItem.title}</h2>
                        <p className="text-2xl font-bold text-cyan-400 mb-4">₹{packageItem.price}</p>
                    </div>

                    <div className="border-t border-slate-700 pt-8 mt-8">
                        <h3 className="text-2xl font-bold mb-6">What's Included?</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {packageItem.includes.map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-300 p-4 bg-slate-700/80 rounded-lg shadow-sm">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => onBookNow(packageItem.title)}
                            className="w-full md:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg transform hover:scale-105"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Main PackagesPage Component ---
const PackagesPage = ({ onBookNow }) => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [bookingMessage, setBookingMessage] = useState('');

    const handleBookNow = (packageName) => {
        if (onBookNow) onBookNow(packageName);
        setBookingMessage(`Booking for "${packageName}" has been submitted. We will contact you shortly!`);
        setTimeout(() => {
            setBookingMessage('');
            setSelectedPackage(null);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
        .animate-slide-in-up { animation: slideInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes slideInUp { from { transform: translateY(100%); opacity:0; } to { transform:translateY(0); opacity:1; } }
      `}</style>

            <Header />
            {selectedPackage ? (
                <PackageDetailsPage
                    packageItem={selectedPackage}
                    onGoBack={() => setSelectedPackage(null)}
                    onBookNow={handleBookNow}
                />
            ) : (
                <>
                    <HeroSection />
                    <PackagesSection onPackageSelect={setSelectedPackage} />
                </>
            )}
            <Footer />

            {bookingMessage && (
                <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center items-center">
                    <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium animate-slide-in-up">
                        {bookingMessage}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackagesPage;
