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
    MapPin
} from 'lucide-react';

// --- Packages Data ---
// This array holds all the information for the health packages.
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
];

const BookingPage = ({ onGoBack }) => {
    // State to hold all form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        appointmentType: 'Lab Visit', // Default to 'Lab Visit'
        address: '',
        message: ''
    });

    // State to control the visibility of the custom success message modal
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    // Handles changes to form input fields, updating the state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Booking submitted:', formData);

        const parts = formData.time.split(":")
        const newTime = `${parts[0]}:${parts[1]}`;
        const appointmentData = {
            fullName : formData.name,
            phoneNum : formData.phone,
            email: formData.email,
            appointmentDate:formData.date,
            appointmentTime:newTime,
            packageName:formData.service,
            message:formData.message,
            appointmentType:formData.appointmentType === 'Lab Visit'?"LAB_VISIT":"HOME_SERVICE"

        };

        try{
            const response = await fetch("https://gen-daigonistic-lab-backend-03hy.onrender.com/api/patients",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(appointmentData)
            })
            if (response.ok) {
                const data = response.json();
                console.log(data);

                // Show the custom success message UI instead of a browser alert
                setShowSuccessMessage(true);

                // Clear the form fields after a successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    appointmentType: 'Lab Visit', // Reset to default
                    address: '',
                    message: ''
                });
            }else {
                console.log(response);

            }
        }catch (error){
            console.log(error);
        }finally {
            setIsLoading(false);
        }



    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-3xl shadow-2xl relative">
                    {/* Conditional rendering for the custom success message modal */}
                    {showSuccessMessage && (
                        <div
                            className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4 rounded-3xl z-10">
                            <div
                                className="bg-green-500 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-sm">
                                <CheckCircle className="h-16 w-16 mb-4 animate-bounce" />
                                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                                <p className="text-gray-100 mb-4">Your appointment request has been submitted successfully. We will contact you shortly to confirm.</p>
                                <button
                                    onClick={() => setShowSuccessMessage(false)}
                                    className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Back button to go to the previous page */}
                    <button onClick={onGoBack}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                             stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back
                    </button>

                    {/* Page title and description */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
                        <p className="text-lg text-gray-600">
                            Fill out the form below to schedule your diagnostic test. Our team will contact you shortly
                            to confirm.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Input field for Full Name */}
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                            {/* Input field for Phone Number */}
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                            {/* Input field for Email Address */}
                            <div className="relative md:col-span-2">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address (Optional)"
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                            {/* Input field for Date */}
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                            {/* Input field for Time */}
                            <div className="relative">
                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Dropdown for selecting a service */}
                        <div className="relative">
                            <BriefcaseMedical className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                            >
                                <option value="" disabled>Select a package...</option>
                                {/* Dynamically generated options from the packagesData array */}
                                {packagesData.map(pkg => (
                                    <option key={pkg.id} value={pkg.title}>
                                        {pkg.title}
                                    </option>
                                ))}
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                        </div>

                        {/* Appointment type selection with conditional address field */}
                        <div className="space-y-4">
                            <label className="text-gray-700 font-semibold text-lg">Appointment Type</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <label
                                    className={`flex items-center px-6 py-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.appointmentType === 'Lab Visit' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        name="appointmentType"
                                        value="Lab Visit"
                                        checked={formData.appointmentType === 'Lab Visit'}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-blue-600 mr-3"
                                    />
                                    <MapPin className="text-blue-600 mr-2" />
                                    <span>Lab Visit</span>
                                </label>
                                <label
                                    className={`flex items-center px-6 py-4 rounded-xl border-2 transition-colors cursor-pointer ${formData.appointmentType === 'Home Service' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        name="appointmentType"
                                        value="Home Service"
                                        checked={formData.appointmentType === 'Home Service'}
                                        onChange={handleChange}
                                        className="form-radio h-5 w-5 text-blue-600 mr-3"
                                    />
                                    <Home className="text-blue-600 mr-2" />
                                    <span>Home Service</span>
                                </label>
                            </div>
                        </div>

                        {/* Conditionally rendered address field for Home Service */}
                        {formData.appointmentType === 'Home Service' && (
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Full Address"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                        )}

                        {/* Textarea for additional message */}
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 text-gray-400" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any specific requests or questions? (Optional)"
                                rows="4"
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            ></textarea>
                        </div>

                        {/* Submit button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isLoading}

                                className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                {
                                    isLoading ? (
                                        <>
                                             Booking.......
                                        </>
                                    ): (
                                        "Confirm Booking"
                                    )
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingPage;
