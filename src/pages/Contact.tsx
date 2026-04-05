import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SuccessModal from '../components/SuccessModal';

const SERVICE_ID = 'service_9nx2mja';
const TEMPLATE_ID = 'template_quuy86s';
const PUBLIC_KEY = 'J1p-nAeO9nIB6NVqr';

const COUNTRY_VALUES = ['Ireland', 'UK', 'Germany', 'Canada', 'Spain', 'Russia', 'Romania', 'USA', 'Other'] as const;

export default function Contact() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
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
            alert(t('contactPage.errors.serviceId'));
            return;
        }

        setIsSubmitting(true);

        try {
            emailjs.init(PUBLIC_KEY);

            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY);

            console.log('SUCCESS!', result.status, result.text);
            setShowSuccess(true);
            setFormData({ full_name: '', email: '', phone: '', destination: '', message: '' });
        } catch (error: unknown) {
            console.error('Full Error Object:', error);

            let errorMsg = 'Unknown Error';
            if (typeof error === 'string') {
                errorMsg = error;
            } else if (error instanceof Error) {
                errorMsg = error.message;
            } else if (typeof error === 'object' && error !== null) {
                const maybeError = error as { text?: unknown; message?: unknown; status?: unknown };
                if (typeof maybeError.text === 'string') errorMsg = maybeError.text;
                else if (typeof maybeError.message === 'string') errorMsg = maybeError.message;
                else if (maybeError.status !== undefined) {
                    errorMsg = `HTTP ${String(maybeError.status)}: ${typeof maybeError.text === 'string' ? maybeError.text : 'No message'}`;
                }
            }

            console.error('Extracted Error Message:', errorMsg);
            alert(t('contactPage.errors.sendFailed', { message: errorMsg }));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-white">
            <div
                className="pointer-events-none fixed inset-0 -z-10 opacity-5 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                aria-hidden="true"
            />

            <section className="relative bg-secondary text-white py-20 sm:py-24">
                <div className="absolute inset-0 bg-secondary/90 z-0" />
                <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2 items-start">
                        <div className="rtl:text-right">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">{t('contactPage.heroEyebrow')}</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                {t('contactPage.heroTitle')}
                                <span className="block text-primary">{t('contactPage.heroHighlight')}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">{t('contactPage.heroLead')}</p>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                                <h3 className="text-xl font-semibold text-white mb-6">{t('contact.info.title')}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div className="rtl:text-right">
                                            <p className="font-bold text-white">{t('contact.info.phone')}</p>
                                            <p className="text-gray-100/80" dir="ltr">
                                                +212 605-671896
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div className="rtl:text-right">
                                            <p className="font-bold text-white">{t('contact.info.email')}</p>
                                            <p className="text-gray-100/80" dir="ltr">
                                                info.movecommunity@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="rtl:text-right">
                                            <p className="font-bold text-white">{t('contact.info.office')}</p>
                                            <p className="text-gray-100/80">{t('contactPage.officeAddress')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl rtl:text-right"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">{t('contactPage.formTitle')}</h3>
                            <p className="text-gray-100/80 mb-8 text-sm md:text-base">{t('contactPage.formHint')}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('contactPage.placeholders.name')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('contactPage.placeholders.email')}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t('contact.form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('contactPage.placeholders.phone')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="destination" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t('contactPage.preferredDestination')}
                                    </label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">{t('contact.form.selectDest')}</option>
                                        {COUNTRY_VALUES.map((val) => (
                                            <option key={val} value={val}>
                                                {t(`countryOption.${val}`)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder={t('contactPage.messagePlaceholder')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-secondary font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 text-lg shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        {t('common.sending')}
                                    </>
                                ) : (
                                    <>
                                        {t('contact.form.submit')} {isRtl ? <ArrowLeft size={20} /> : <Send size={20} />}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 text-center md:text-left rtl:md:text-right">
                        {t('common.trustedBy')} <span className="font-semibold text-secondary">{t('common.countries20')}</span>
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400">
                        <span className="font-semibold text-gray-500">{t('common.responseTime')}</span>
                        <span>{t('common.hours48')}</span>
                        <span>{t('common.personalizedGuidance')}</span>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contactPage.finalCtaTitle')}</h2>
                    <p className="text-gray-100 max-w-xl mx-auto mb-8">{t('contactPage.finalCtaLead')}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/destinations"
                            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
                        >
                            {t('contactPage.exploreDestinations')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/15 transition-colors"
                        >
                            {t('contactPage.viewServices')} {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                    </div>
                </div>
            </section>

            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
        </div>
    );
}
