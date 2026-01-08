import { useState, useRef, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, ArrowLeft, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SuccessModal from '../components/SuccessModal';

// EmailJS Configuration
const SERVICE_ID = 'service_9nx2mja'; // ⚠️ REPLACE THIS WITH YOUR SERVICE ID (e.g., service_gmail)
const TEMPLATE_ID = 'template_quuy86s';
const PUBLIC_KEY = 'J1p-nAeO9nIB6NVqr';

export default function Contact() {
    const isRtl = false;
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!SERVICE_ID) {
            alert('Error: Service ID is missing.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Initialize EmailJS with the Public Key
            emailjs.init(PUBLIC_KEY);

            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current!,
                PUBLIC_KEY
            );

            console.log('SUCCESS!', result.status, result.text);
            setShowSuccess(true);
            setFormData({ full_name: '', email: '', phone: '', destination: '', message: '' });
        } catch (error: any) {
            console.error('Full Error Object:', error);

            // Handle different types of EmailJS errors
            let errorMsg = 'Unknown Error';
            if (typeof error === 'string') errorMsg = error;
            else if (error?.text) errorMsg = error.text;
            else if (error?.message) errorMsg = error.message;
            else if (error?.status) errorMsg = `HTTP ${error.status}: ${error.text || 'No message'}`;

            console.error('Extracted Error Message:', errorMsg);
            alert(`❌ Send Failed! \n\nMessage: ${errorMsg}\n\nPlease check your EmailJS dashboard setup.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Get in Touch</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about studying abroad? Our team is here to help you start your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-bold text-secondary mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Phone</p>
                                        <p className="text-gray-600" dir="ltr">+212 605-671896</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p className="text-gray-600" dir="ltr">info.movecommunity@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Office</p>
                                        <p className="text-gray-600">Hay Drissia, Rés. Rama Business, Bd Abou Chouaib Doukkali, Casablanca</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form ref={form} onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Mohammed Admed"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="mohammed@ahmed.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="+212 600-000000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination</label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Select a country</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-secondary font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message {isRtl ? <ArrowLeft size={20} /> : <Send size={20} />}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </div>
    );
}
