import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { nameKey: 'nav.home' as const, path: '/' },
        { nameKey: 'nav.services' as const, path: '/services' },
        { nameKey: 'nav.destinations' as const, path: '/destinations' },
        { nameKey: 'nav.about' as const, path: '/about' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-secondary/10 via-white/10 to-white/0 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,0.14)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-white/60 blur-md" />
                            <img
                                src={`${import.meta.env.BASE_URL}logo.jpg`}
                                alt="Move Agency Logo"
                                className="relative w-10 h-10 rounded-full object-cover ring-2 ring-white/70 shadow-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl text-secondary tracking-tight leading-none">Move</span>
                            <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                                Study Abroad Agency
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 rtl:space-x-reverse">
                        <LanguageSwitcher />
                        <div className="flex items-center gap-6 lg:gap-8 px-4 py-2 rounded-full bg-white/30 backdrop-blur-lg border border-white/50 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative text-sm font-medium transition-all duration-200 ${
                                        isActive(link.path)
                                            ? 'text-secondary'
                                            : 'text-slate-600 hover:text-secondary'
                                    }`}
                                >
                                    <span>{t(link.nameKey)}</span>
                                    {isActive(link.path) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-primary/80 shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-primary via-yellow-300 to-primary text-secondary px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_8px_22px_rgba(250,204,21,0.3)] hover:brightness-105 transition-all"
                        >
                            {t('nav.contact')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <LanguageSwitcher />
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/30 p-2 shadow-[0_6px_18px_rgba(15,23,42,0.16)] text-secondary hover:text-primary hover:bg-white/60 transition-all focus:outline-none"
                            aria-label={t('nav.toggleMenu')}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white/85 backdrop-blur-lg border-b border-white/60 shadow-[0_14px_34px_rgba(15,23,42,0.22)]">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={toggleMenu}
                                className={`block px-3 py-3 rounded-xl text-base font-medium transition-all ${
                                    isActive(link.path)
                                        ? 'text-secondary bg-yellow-50 shadow-sm'
                                        : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
                                }`}
                            >
                                {t(link.nameKey)}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={toggleMenu}
                            className="block w-full text-center mt-4 bg-gradient-to-r from-primary via-yellow-300 to-primary text-secondary px-6 py-3 rounded-full font-semibold shadow-[0_10px_26px_rgba(250,204,21,0.35)] hover:brightness-105 transition-all"
                        >
                            {t('nav.contact')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
