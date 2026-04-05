import { ArrowRight, ArrowLeft, Globe, Award, Users, Search, FileCheck, Plane } from 'lucide-react';
import { useRef, useState, useEffect, useMemo, type TouchEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HERO_BG = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
];

const HOME_DEST_IDS = ['ireland', 'uk', 'germany', 'canada', 'spain', 'russia', 'romania', 'usa'] as const;

const HOME_DEST_IMAGES: Record<(typeof HOME_DEST_IDS)[number], string> = {
    ireland: `${import.meta.env.BASE_URL}countries-pictures/Ireland1.jpg`,
    uk: `${import.meta.env.BASE_URL}countries-pictures/uk1.jpg`,
    germany: `${import.meta.env.BASE_URL}countries-pictures/germany1.jpg`,
    canada: `${import.meta.env.BASE_URL}countries-pictures/canada1.jpg`,
    spain: `${import.meta.env.BASE_URL}countries-pictures/spain1.jpg`,
    russia: `${import.meta.env.BASE_URL}countries-pictures/russia1.jpg`,
    romania: `${import.meta.env.BASE_URL}countries-pictures/romania1.jpg`,
    usa: `${import.meta.env.BASE_URL}countries-pictures/usa1.jpg`,
};

export default function Home() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const destinationsRef = useRef<HTMLDivElement | null>(null);

    const [currentHeroBg, setCurrentHeroBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroBg((prev) => (prev + 1) % HERO_BG.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const touchStartX = useRef<number | null>(null);

    const handleHeroTouchStart = (e: TouchEvent<HTMLElement>) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
    };

    const handleHeroTouchEnd = (e: TouchEvent<HTMLElement>) => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
        const deltaX = endX - touchStartX.current;
        const threshold = 50;

        if (deltaX > threshold) {
            setCurrentHeroBg((prev) => (prev - 1 + HERO_BG.length) % HERO_BG.length);
        } else if (deltaX < -threshold) {
            setCurrentHeroBg((prev) => (prev + 1) % HERO_BG.length);
        }

        touchStartX.current = null;
    };

    const scrollDestinations = (direction: 'left' | 'right') => {
        const container = destinationsRef.current;
        if (!container) return;
        const cardWidth = 320;
        container.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    };

    const destinationCards = useMemo(
        () =>
            HOME_DEST_IDS.map((id) => ({
                id,
                image: HOME_DEST_IMAGES[id],
                name: t(`homePage.destinations.${id}.name`),
                bullets: t(`homePage.destinations.${id}.bullets`, { returnObjects: true }) as string[],
            })),
        [t]
    );

    return (
        <div className="relative flex flex-col min-h-screen bg-white">
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-5 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                aria-hidden="true"
            />
            <section
                className="relative bg-secondary text-white py-20 sm:py-24"
                onTouchStart={handleHeroTouchStart}
                onTouchEnd={handleHeroTouchEnd}
            >
                <div className="absolute inset-0 bg-secondary/90 z-0" />
                <div
                    className="absolute inset-0 opacity-25 bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url('${HERO_BG[currentHeroBg]}')` }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">{t('homePage.heroKicker')}</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                {t('homePage.heroTitle')}
                                <span className="block text-primary">{t('homePage.heroHighlight')}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">{t('homePage.heroLead')}</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="bg-primary text-secondary px-8 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-yellow-400 transition-all transform hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2"
                                >
                                    {t('homePage.bookConsultation')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                                </Link>
                                <Link
                                    to="/destinations"
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                >
                                    {t('homePage.exploreTopDestinations')}
                                </Link>
                            </div>

                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-100">
                                <div className="text-left sm:text-center rtl:text-right">
                                    <p className="text-xs uppercase tracking-wide text-white/70 mb-1">{t('homePage.statStudents')}</p>
                                    <p className="text-lg font-semibold">2,000+</p>
                                </div>
                                <div className="text-left sm:text-center rtl:text-right">
                                    <p className="text-xs uppercase tracking-wide text-white/70 mb-1">{t('homePage.statVisa')}</p>
                                    <p className="text-lg font-semibold">96%</p>
                                </div>
                                <div className="text-left sm:text-center rtl:text-right col-span-2 sm:col-span-1">
                                    <p className="text-xs uppercase tracking-wide text-white/70 mb-1">{t('homePage.statPartners')}</p>
                                    <p className="text-lg font-semibold">50+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 text-center md:text-left rtl:md:text-right">
                        {t('common.trustedBy')} <span className="font-semibold text-secondary">{t('common.countries20')}</span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400">
                        <span className="font-semibold text-gray-500">{t('common.partnerUniversitiesSample')}</span>
                        <span>Galway</span>
                        <span>Munich</span>
                        <span>Toronto</span>
                        <span>London</span>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('homePage.servicesSectionTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('homePage.servicesSectionLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { icon: Search, wrap: 'bg-blue-50 text-secondary', title: 'svcProfileTitle', desc: 'svcProfileDesc' },
                            { icon: Globe, wrap: 'bg-yellow-50 text-primary', title: 'svcCourseTitle', desc: 'svcCourseDesc' },
                            { icon: FileCheck, wrap: 'bg-green-50 text-green-600', title: 'svcAppTitle', desc: 'svcAppDesc' },
                            { icon: Award, wrap: 'bg-purple-50 text-secondary', title: 'svcScholarTitle', desc: 'svcScholarDesc' },
                            { icon: Plane, wrap: 'bg-red-50 text-secondary', title: 'svcVisaTitle', desc: 'svcVisaDesc' },
                            { icon: Users, wrap: 'bg-indigo-50 text-secondary', title: 'svcOngoingTitle', desc: 'svcOngoingDesc' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow rtl:text-right">
                                <div className={`w-12 h-12 rounded-full ${item.wrap} flex items-center justify-center mb-4`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-secondary mb-2">{t(`homePage.${item.title}` as 'homePage.svcProfileTitle')}</h3>
                                <p className="text-gray-600 text-sm">{t(`homePage.${item.desc}` as 'homePage.svcProfileDesc')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('homePage.whyTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('homePage.whyLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow rtl:text-right">
                            <div className="w-14 h-14 bg-blue-100 text-secondary rounded-full flex items-center justify-center mb-5">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary mb-2">{t('homePage.whySuccessTitle')}</h3>
                            <p className="text-gray-600 text-sm">{t('homePage.whySuccessDesc')}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow rtl:text-right">
                            <div className="w-14 h-14 bg-yellow-100 text-primary rounded-full flex items-center justify-center mb-5">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary mb-2">{t('homePage.whyPersonalTitle')}</h3>
                            <p className="text-gray-600 text-sm">{t('homePage.whyPersonalDesc')}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow rtl:text-right">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary mb-2">{t('homePage.whyNetworkTitle')}</h3>
                            <p className="text-gray-600 text-sm">{t('homePage.whyNetworkDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('homePage.howTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('homePage.howLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0 rtl:scale-x-[-1]" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
                            {[
                                { n: 1, bg: 'bg-secondary text-white', title: 'how1Title', desc: 'how1Desc' },
                                { n: 2, bg: 'bg-primary text-secondary', title: 'how2Title', desc: 'how2Desc' },
                                { n: 3, bg: 'bg-secondary text-white', title: 'how3Title', desc: 'how3Desc' },
                                { n: 4, bg: 'bg-primary text-secondary', title: 'how4Title', desc: 'how4Desc' },
                            ].map((step) => (
                                <div key={step.n} className="text-center bg-white p-6 rounded-2xl shadow-sm rtl:text-right md:text-center">
                                    <div
                                        className={`w-16 h-16 ${step.bg} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-white shadow-lg`}
                                    >
                                        <span>{step.n}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-secondary mb-2">{t(`homePage.${step.title}` as 'homePage.how1Title')}</h3>
                                    <p className="text-gray-600 text-sm">{t(`homePage.${step.desc}` as 'homePage.how1Desc')}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                        >
                            {t('homePage.startJourney')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('homePage.topDestTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('homePage.topDestLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="relative -mx-4 sm:mx-0">
                        <button
                            type="button"
                            onClick={() => scrollDestinations('left')}
                            className="hidden sm:flex absolute ltr:left-0 rtl:right-0 rtl:left-auto top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-secondary shadow-sm items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                            aria-label={t('common.scrollLeft')}
                        >
                            <ArrowLeft size={20} className="rtl:rotate-180" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollDestinations('right')}
                            className="hidden sm:flex absolute ltr:right-0 rtl:left-0 rtl:right-auto top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-secondary shadow-sm items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                            aria-label={t('common.scrollRight')}
                        >
                            <ArrowRight size={20} className="rtl:rotate-180" />
                        </button>

                        <div
                            ref={destinationsRef}
                            className="flex overflow-x-auto gap-6 px-4 sm:px-0 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                        >
                            {destinationCards.map((card) => (
                                <div
                                    key={card.id}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] snap-center"
                                >
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white rtl:text-right">
                                        <h3 className="text-2xl font-bold mb-3">{card.name}</h3>
                                        <ul className="text-xs sm:text-sm text-gray-200 space-y-1 mb-4">
                                            {card.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all"
                                        >
                                            {t('homePage.cardCta', { country: card.name })}{' '}
                                            <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/destinations"
                            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                        >
                            {t('homePage.compareAll')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('homePage.faqTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('homePage.faqLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {([1, 2, 3, 4] as const).map((n) => (
                            <div key={n} className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm rtl:text-right">
                                <h3 className="font-semibold text-secondary mb-2 text-sm sm:text-base">{t(`homePage.faq${n}Q` as 'homePage.faq1Q')}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{t(`homePage.faq${n}A` as 'homePage.faq1A')}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80"
                        >
                            {t('homePage.learnAboutWork')} {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('homePage.finalTitle')}</h2>
                    <p className="text-gray-100 max-w-xl mx-auto mb-8">{t('homePage.finalLead')}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
                        >
                            {t('homePage.bookMyConsultation')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/15 transition-colors"
                        >
                            {t('common.askQuickQuestion')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
