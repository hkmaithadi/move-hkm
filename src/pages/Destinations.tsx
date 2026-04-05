import { ArrowRight, ArrowLeft, Globe, Award, Users, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const DEST_IDS = ['ireland', 'uk', 'germany', 'canada', 'spain', 'russia', 'romania', 'usa'] as const;

const DEST_IMAGES: Record<(typeof DEST_IDS)[number], string> = {
    ireland: `${import.meta.env.BASE_URL}countries-pictures/Ireland1.jpg`,
    uk: `${import.meta.env.BASE_URL}countries-pictures/uk1.jpg`,
    germany: `${import.meta.env.BASE_URL}countries-pictures/germany1.jpg`,
    canada: `${import.meta.env.BASE_URL}countries-pictures/canada1.jpg`,
    spain: `${import.meta.env.BASE_URL}countries-pictures/spain1.jpg`,
    russia: `${import.meta.env.BASE_URL}countries-pictures/russia1.jpg`,
    romania: `${import.meta.env.BASE_URL}countries-pictures/romania1.jpg`,
    usa: `${import.meta.env.BASE_URL}countries-pictures/usa1.jpg`,
};

const TRUST_STRIP_IDS: (typeof DEST_IDS)[number][] = ['ireland', 'uk', 'germany', 'canada', 'spain', 'usa'];

export default function Destinations() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const destinations = useMemo(
        () =>
            DEST_IDS.map((id) => ({
                id,
                image: DEST_IMAGES[id],
                name: t(`destinationsPage.countries.${id}.name`),
                shortTitle: t(`destinationsPage.countries.${id}.shortTitle`),
                description: t(`destinationsPage.countries.${id}.description`),
                tuition: t(`destinationsPage.countries.${id}.tuition`),
                workRights: t(`destinationsPage.countries.${id}.workRights`),
                postStudyWork: t(`destinationsPage.countries.${id}.postStudyWork`),
            })),
        [t]
    );

    return (
        <div className="flex flex-col">
            <section className="relative bg-secondary text-white py-16 sm:py-20">
                <div className="absolute inset-0 bg-secondary/90 z-0" />
                <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 md:grid-cols-2 items-center">
                        <div className="rtl:text-right">
                            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                                {t('destinationsPage.heroKicker')}
                            </p>
                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 tracking-tight">
                                {t('destinationsPage.heroTitle')}
                                <span className="block text-primary">{t('destinationsPage.heroHighlight')}</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-100 mb-6 max-w-xl">
                                {t('destinationsPage.heroLead')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-primary text-secondary px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-400 transition-all transform hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2"
                                >
                                    {t('destinationsPage.talkExpert')} {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                                </Link>
                                <Link
                                    to="/services"
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                >
                                    {t('destinationsPage.seeSupport')}
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:block">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl max-w-md ltr:ml-auto rtl:mr-auto rtl:ml-0">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                                    {t('destinationsPage.cardTitle')}
                                </p>
                                <h2 className="text-xl md:text-2xl font-semibold mb-3">{t('destinationsPage.cardHeading')}</h2>
                                <p className="text-sm text-gray-100 mb-4">{t('destinationsPage.cardLead')}</p>
                                <ul className="space-y-2 text-sm text-gray-100">
                                    <li className="flex items-start gap-2 rtl:flex-row-reverse rtl:text-right">
                                        <Globe className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                                        <span>{t('destinationsPage.cardLi1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2 rtl:flex-row-reverse rtl:text-right">
                                        <Award className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                                        <span>{t('destinationsPage.cardLi2')}</span>
                                    </li>
                                    <li className="flex items-start gap-2 rtl:flex-row-reverse rtl:text-right">
                                        <Users className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                                        <span>{t('destinationsPage.cardLi3')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 text-center md:text-left rtl:md:text-right">
                        {t('common.visaBacked')}{' '}
                        <span className="font-semibold text-secondary">{t('common.visaRate')}</span>{' '}
                        {t('common.visaForEligible')}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400">
                        <span className="font-semibold text-gray-500">{t('common.keyRegions')}</span>
                        {TRUST_STRIP_IDS.map((id) => (
                            <span key={id}>{t(`destinationsPage.countries.${id}.name`)}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('destinationsPage.gridTitle')}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t('destinationsPage.gridLead')}</p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {destinations.map((dest) => (
                            <div
                                key={dest.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
                            >
                                <div className="h-52 sm:h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity z-10" />
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
                                        <div className="rtl:text-right">
                                            <p className="text-xs uppercase tracking-[0.2em] text-white/80 mb-1">
                                                {t('common.destinationLabel')}
                                            </p>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white">{dest.name}</h3>
                                        </div>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-gray-100">
                                            <Plane className="w-3 h-3 flex-shrink-0" />
                                            {t('common.studyAbroadFocus')}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-7 flex flex-col flex-1 rtl:text-right">
                                    <p className="text-sm font-semibold text-secondary mb-2">{dest.shortTitle}</p>
                                    <p className="text-sm text-gray-600 mb-5 flex-1">{dest.description}</p>

                                    <div className="grid grid-cols-1 gap-3 text-xs sm:text-[13px] text-gray-700 mb-5">
                                        <div className="flex flex-col rounded-xl bg-gray-50 p-3 border border-gray-100">
                                            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                                                {t('common.typicalTuition')}
                                            </span>
                                            <span className="font-medium text-secondary">{dest.tuition}</span>
                                        </div>
                                        <div className="flex flex-col rounded-xl bg-gray-50 p-3 border border-gray-100">
                                            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                                                {t('common.workWhileStudy')}
                                            </span>
                                            <span className="font-medium text-secondary">{dest.workRights}</span>
                                        </div>
                                        <div className="flex flex-col rounded-xl bg-gray-50 p-3 border border-gray-100">
                                            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                                                {t('common.postStudyOptions')}
                                            </span>
                                            <span className="font-medium text-secondary">{dest.postStudyWork}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto rtl:text-right">
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-yellow-600 transition-colors"
                                        >
                                            {t('common.getPlanFor', { name: dest.name })}{' '}
                                            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                        </Link>
                                        <span className="text-[11px] text-gray-400">{t('common.detailsDisclaimer')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 md:grid-cols-3 items-start">
                        <div className="md:col-span-1 rtl:text-right">
                            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">{t('destinationsPage.decideTitle')}</h2>
                            <p className="text-gray-600 text-sm md:text-base mb-4">{t('destinationsPage.decideP1')}</p>
                            <p className="text-gray-600 text-sm md:text-base">{t('destinationsPage.decideP2')}</p>
                        </div>
                        <div className="md:col-span-2 grid gap-4">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 rtl:flex-row-reverse rtl:text-right">
                                <div className="mt-1 flex-shrink-0">
                                    <Users className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary mb-1 text-sm sm:text-base">{t('destinationsPage.d1Title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('destinationsPage.d1Desc')}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 rtl:flex-row-reverse rtl:text-right">
                                <div className="mt-1 flex-shrink-0">
                                    <Globe className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary mb-1 text-sm sm:text-base">{t('destinationsPage.d2Title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('destinationsPage.d2Desc')}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex gap-4 rtl:flex-row-reverse rtl:text-right">
                                <div className="mt-1 flex-shrink-0">
                                    <Award className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary mb-1 text-sm sm:text-base">{t('destinationsPage.d3Title')}</h3>
                                    <p className="text-gray-600 text-sm">{t('destinationsPage.d3Desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('destinationsPage.finalTitle')}</h2>
                    <p className="text-gray-100 max-w-xl mx-auto mb-8 text-sm md:text-base">{t('destinationsPage.finalLead')}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
                        >
                            {t('destinationsPage.finalCta')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
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
