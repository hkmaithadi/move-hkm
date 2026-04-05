import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    return (
        <div className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-14 lg:gap-20 items-center">
                    <div className="rtl:text-right">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                            {t('aboutPage.badge')}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">{t('aboutPage.heroTitle')}</h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-4">
                            <span className="font-semibold text-secondary">{t('aboutPage.p1Lead')}</span> {t('aboutPage.p1')}
                        </p>
                        <p className="text-gray-700 leading-relaxed max-w-2xl mb-4">{t('aboutPage.p2')}</p>
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 md:p-6 mb-6">
                            <p className="text-sm md:text-base text-secondary font-medium">{t('aboutPage.missionBox')}</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed max-w-2xl">{t('aboutPage.p3')}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm md:text-base font-semibold text-secondary shadow-md hover:bg-yellow-400 transition-colors"
                            >
                                {t('aboutPage.speakTeam')}
                            </Link>
                            <span className="text-xs md:text-sm text-gray-500">{t('aboutPage.consultationHint')}</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-md" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt={t('aboutPage.advisorsAlt')}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className={`absolute -bottom-6 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 max-w-xs ${
                                isRtl ? 'right-6 left-auto' : 'left-6 right-auto'
                            }`}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-1">{t('aboutPage.floatingTitle')}</p>
                            <p className="text-sm text-gray-700">{t('aboutPage.floatingText')}</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20 border-y border-gray-100 bg-gray-50/60 rounded-3xl px-6 py-10 md:px-10 md:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 text-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">{t('aboutPage.stat1Label')}</p>
                            <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{t('aboutPage.stat1Value')}</p>
                            <p className="text-xs text-gray-500">{t('aboutPage.stat1Hint')}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">{t('aboutPage.stat2Label')}</p>
                            <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{t('aboutPage.stat2Value')}</p>
                            <p className="text-xs text-gray-500">{t('aboutPage.stat2Hint')}</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">{t('aboutPage.stat3Label')}</p>
                            <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">{t('aboutPage.stat3Value')}</p>
                            <p className="text-xs text-gray-500">{t('aboutPage.stat3Hint')}</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">{t('aboutPage.valuesTitle')}</h2>
                        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">{t('aboutPage.valuesLead')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-7 shadow-sm rtl:text-right">
                            <h3 className="font-semibold text-lg text-secondary mb-2">{t('aboutPage.v1Title')}</h3>
                            <p className="text-sm text-gray-600">{t('aboutPage.v1Desc')}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-7 shadow-sm rtl:text-right">
                            <h3 className="font-semibold text-lg text-secondary mb-2">{t('aboutPage.v2Title')}</h3>
                            <p className="text-sm text-gray-600">{t('aboutPage.v2Desc')}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-7 shadow-sm rtl:text-right">
                            <h3 className="font-semibold text-lg text-secondary mb-2">{t('aboutPage.v3Title')}</h3>
                            <p className="text-sm text-gray-600">{t('aboutPage.v3Desc')}</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20 md:mt-24 rounded-3xl bg-secondary text-white px-6 py-10 md:px-10 md:py-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('aboutPage.ctaTitle')}</h2>
                    <p className="text-sm md:text-base text-gray-100 max-w-2xl mx-auto mb-6">{t('aboutPage.ctaLead')}</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm md:text-base font-semibold text-secondary shadow-lg hover:bg-yellow-400 transition-colors"
                    >
                        {t('aboutPage.ctaButton')}
                    </Link>
                </section>
            </div>
        </div>
    );
}
