import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';



export default function Contact() {
    const isRtl = false;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you! We will be in touch soon.');
        setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
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
                                        <p className="text-gray-600" dir="ltr">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p className="text-gray-600" dir="ltr">hello@moveagency.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Office</p>
                                        <p className="text-gray-600">123 Agency Way, Study City, ST 12345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
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
                                        placeholder="john@example.com"
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
                                        placeholder="+1 (555) 000-0000"
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
                                className="w-full bg-primary text-secondary font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg shadow-md"
                            >
                                Send Message {isRtl ? <ArrowLeft size={20} /> : <Send size={20} />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
