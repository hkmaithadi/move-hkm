import { BookOpen, Home as HomeIcon, FileText, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import ServiceModal from '../components/ServiceModal';

const SERVICE_KEYS = ['visa', 'admissions', 'ausbildung', 'scholarships', 'accommodation'] as const;

type ServiceItem = {
    icon: ReactElement;
    title: string;
    description: string;
    details: string[];
};

export default function Services() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    const services = useMemo(
        () => {
            const icons = [
                <FileText size={32} key="visa" />,
                <BookOpen size={32} key="adm" />,
                <Briefcase size={32} key="aus" />,
                <GraduationCap size={32} key="sch" />,
                <HomeIcon size={32} key="acc" />,
            ];
            return SERVICE_KEYS.map((key, index) => ({
                icon: icons[index],
                title: t(`servicesPage.items.${key}.title`),
                description: t(`servicesPage.items.${key}.description`),
                details: t(`servicesPage.items.${key}.details`, { returnObjects: true }) as string[],
            }));
        },
        [t]
    );

    const sidebarBullets = t('servicesPage.sidebarBullets', { returnObjects: true }) as string[];

    return (
        <div className="py-20 md:py-32 bg-gray-50/50">
            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-center mb-20">
                    <div className="text-left rtl:text-right">
                        <span className="text-primary font-bold tracking-wider uppercase mb-3 block">{t('servicesPage.sectionKicker')}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                            {t('servicesPage.heroTitle')}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                            {t('servicesPage.heroP1')}
                        </p>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            {t('servicesPage.heroP2')}
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-8">
                        <h2 className="text-xl font-semibold text-secondary mb-3">{t('servicesPage.sidebarTitle')}</h2>
                        <ul className="space-y-3 text-sm text-gray-600">
                            {sidebarBullets.map((line, i) => (
                                <li key={i}>• {line}</li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors"
                            >
                                {t('servicesPage.talkAdvisor')}
                                <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                        >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-yellow-300 to-primary opacity-70" />
                            <div className="flex items-start justify-between gap-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-secondary flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                                    {service.icon}
                                </div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                                    {t('common.serviceBadge')}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-7 flex-grow">
                                {service.description}
                            </p>
                            <button
                                type="button"
                                onClick={() => setSelectedService(service)}
                                className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors w-fit"
                            >
                                <span>{t('common.learnMore')}</span>
                                <ArrowRight size={18} className={`transform group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-24 grid gap-12 lg:grid-cols-2 items-start">
                    <div className="rtl:text-right">
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                            {t('servicesPage.journeyTitle')}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t('servicesPage.journeyP1')}
                        </p>
                        <p className="text-gray-600">
                            {t('servicesPage.journeyP2')}
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 md:p-8">
                        <ol className="space-y-4 text-gray-700">
                            <li>
                                <div className="flex items-start gap-3 rtl:flex-row-reverse">
                                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-secondary text-sm font-bold">
                                        1
                                    </span>
                                    <div className="rtl:text-right">
                                        <h3 className="font-semibold text-secondary mb-1">{t('servicesPage.step1Title')}</h3>
                                        <p className="text-sm">
                                            {t('servicesPage.step1Desc')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 rtl:flex-row-reverse">
                                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                                        2
                                    </span>
                                    <div className="rtl:text-right">
                                        <h3 className="font-semibold text-secondary mb-1">{t('servicesPage.step2Title')}</h3>
                                        <p className="text-sm">
                                            {t('servicesPage.step2Desc')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 rtl:flex-row-reverse">
                                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-secondary text-sm font-bold">
                                        3
                                    </span>
                                    <div className="rtl:text-right">
                                        <h3 className="font-semibold text-secondary mb-1">{t('servicesPage.step3Title')}</h3>
                                        <p className="text-sm">
                                            {t('servicesPage.step3Desc')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 rtl:flex-row-reverse">
                                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                                        4
                                    </span>
                                    <div className="rtl:text-right">
                                        <h3 className="font-semibold text-secondary mb-1">{t('servicesPage.step4Title')}</h3>
                                        <p className="text-sm">
                                            {t('servicesPage.step4Desc')}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-block p-1 rounded-full bg-white shadow-xl">
                        <Link
                            to="/contact"
                            className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 group"
                        >
                            {t('servicesPage.ctaAdvice')}
                            <ArrowRight className={`group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
