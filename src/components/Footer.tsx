import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {


    return (
        <footer className="bg-secondary text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Move Agency Logo" className="w-8 h-8 rounded-full object-cover" />
                            <span className="font-bold text-xl tracking-tight">Move</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Helping students broaden their horizons through international study experiences in Ireland, UK, Germany, Canada, and more.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-primary text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link to="/destinations" className="hover:text-primary transition-colors">Our Destinations</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-primary text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span>Hay Drissia, Rés. Rama Business, Bd Abou Chouaib Doukkali, Casablanca</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                <span>+212 605-671896</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <span>info.movecommunity@gmail.com</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 rtl:space-x-reverse mt-6">
                            <a href="https://www.instagram.com/movecommunity.official/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Move Study Abroad Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
