import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const apply = () => {
            const lng = (i18n.resolvedLanguage ?? i18n.language ?? 'en').split('-')[0] ?? 'en';
            document.documentElement.lang = lng;
            document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        };
        apply();
        i18n.on('languageChanged', apply);
        return () => {
            i18n.off('languageChanged', apply);
        };
    }, [i18n]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
