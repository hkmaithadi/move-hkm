import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: '/' },
        { name: "Our Services", path: '/services' },
        { name: "Our Destinations", path: '/destinations' },
        { name: "About Us", path: '/about' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Move Agency Logo" className="w-10 h-10 rounded-full object-cover" />
                        <span className="font-bold text-2xl text-secondary tracking-tight">Move</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-primary'
                                    : 'text-secondary hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/contact"
                            className="bg-primary text-secondary px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleMenu}
                            className="text-secondary hover:text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={toggleMenu}
                                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-primary bg-yellow-50'
                                    : 'text-secondary hover:text-primary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={toggleMenu}
                            className="block w-full text-center mt-4 bg-primary text-secondary px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
