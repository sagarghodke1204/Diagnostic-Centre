import React, { useState } from 'react';
import {
    User,
    Phone,
    Mail,
    Calendar,
    Clock,
    MessageSquare,
    BriefcaseMedical,
    CheckCircle,
    Home,
    MapPin,
    ChevronLeft
} from 'lucide-react';

// --- Full Packages Data ---
const packagesData = [
    {
        id: 'gd-women-basic',
        title: 'GD Women Basic',
        price: '2200 - 700',
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
        price: '1299 - 650',
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
        price: '2200 - 900',
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
        price: '2800 - 1200',
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
        id: 'regular-check-up',
        title: 'Routine Check Up',
        price: '2800 - 1200',
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

const BookingPage = ({ onGoBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        appointmentType: 'Lab Visit',
        address: '',
        message: ''
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const parts = formData.time.split(":");
        const newTime = `${parts[0]}:${parts[1]}`;
        const appointmentData = {
            fullName: formData.name,
            phoneNum: formData.phone,
            email: formData.email,
            appointmentDate: formData.date,
            appointmentTime: newTime,
            packageName: formData.service,
            message: formData.message,
            address: formData.address,
            appointmentType: formData.appointmentType === 'Lab Visit' ? "LAB_VISIT" : "HOME_SERVICE"
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/patients`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appointmentData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setShowSuccessMessage(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    appointmentType: 'Lab Visit',
                    address: '',
                    message: ''
                });
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 bg-slate-950 min-h-screen relative">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                    <div className="flex flex-col items-center gap-4">
                        <svg
                            className="animate-spin h-12 w-12 text-cyan-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                            ></path>
                        </svg>
                        <p className="text-cyan-300 font-semibold text-lg">Booking your appointment...</p>
                    </div>
                </div>
            )}

            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                body { font-family: 'Inter', sans-serif; }
                .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up relative z-10">
                <div className="bg-slate-800 p-8 rounded-3xl shadow-2xl relative">
                    {showSuccessMessage && (
                        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 rounded-3xl z-10">
                            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-sm">
                                <CheckCircle className="h-16 w-16 mb-4 animate-bounce" />
                                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                                <p className="text-gray-100 mb-4">Your request is in! We've sent a confirmation email. Our team will contact you shortly.</p>
                                <button
                                    onClick={() => setShowSuccessMessage(false)}
                                    className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <button onClick={onGoBack} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
                        <ChevronLeft className="w-5 h-5 mr-2" /> Back
                    </button>

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-white mb-4">Book Your Appointment</h2>
                        <p className="text-lg text-slate-400">Fill out the form below to schedule your diagnostic test. Our team will contact you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                            <div className="relative md:col-span-2">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="date" name="date" value={formData.date} onChange={handleChange} required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                            <div className="relative">
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="time" name="time" value={formData.time} onChange={handleChange} required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                        </div>

                        <div className="relative">
                            <BriefcaseMedical className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select name="service" value={formData.service} onChange={handleChange} required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white focus:ring-cyan-500 focus:border-cyan-500 transition-colors appearance-none">
                                <option value="" disabled>Select a package...</option>
                                {packagesData.map(pkg => (
                                    <option key={pkg.id} value={pkg.title}>{pkg.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* Appointment Type */}
                        <div className="space-y-4">
                            <label className="text-slate-200 font-semibold text-lg">Appointment Type</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <label className={`flex items-center px-6 py-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.appointmentType === 'Lab Visit' ? 'border-cyan-600 bg-cyan-900/30' : 'border-slate-600 bg-slate-700'}`}>
                                    <input type="radio" name="appointmentType" value="Lab Visit" checked={formData.appointmentType === 'Lab Visit'} onChange={handleChange}
                                           className="form-radio h-5 w-5 text-cyan-500 mr-3 border-slate-500 bg-slate-600" />
                                    <MapPin className="text-cyan-400 mr-2" /> <span className="text-white">Lab Visit</span>
                                </label>
                                <label className={`flex items-center px-6 py-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.appointmentType === 'Home Service' ? 'border-cyan-600 bg-cyan-900/30' : 'border-slate-600 bg-slate-700'}`}>
                                    <input type="radio" name="appointmentType" value="Home Service" checked={formData.appointmentType === 'Home Service'} onChange={handleChange}
                                           className="form-radio h-5 w-5 text-cyan-500 mr-3 border-slate-500 bg-slate-600" />
                                    <Home className="text-cyan-400 mr-2" /> <span className="text-white">Home Service</span>
                                </label>
                            </div>
                        </div>

                        {formData.appointmentType === 'Home Service' && (
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Full Address" required
                                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors" />
                            </div>
                        )}

                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 text-slate-400" />
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any specific requests or questions? (Optional)" rows="4"
                                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"></textarea>
                        </div>

                        <div className="text-center flex justify-center" >
                            <button type="submit" disabled={isLoading}
                                    className="w-full md:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-10 py-4 rounded-full font-semibold hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
