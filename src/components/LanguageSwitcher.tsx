import { useTranslation } from 'react-i18next';

const locales = [
    { code: 'en', shortLabel: 'EN' },
    { code: 'fr', shortLabel: 'FR' },
    { code: 'ar', shortLabel: 'عربي' },
] as const;

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const current = (i18n.resolvedLanguage ?? i18n.language ?? 'en').split('-')[0] ?? 'en';

    return (
        <div
            className="flex rounded-full border border-white/60 bg-white/30 p-0.5 gap-0.5 shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
            role="group"
            aria-label={t('language.label')}
        >
            {locales.map(({ code, shortLabel }) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => void i18n.changeLanguage(code)}
                    className={`min-w-0 shrink-0 px-1.5 sm:px-2 py-1 text-[10px] sm:text-xs font-semibold rounded-full transition-all ${
                        current === code
                            ? 'bg-secondary text-white shadow-sm'
                            : 'text-slate-600 hover:text-secondary hover:bg-white/50'
                    }`}
                    aria-pressed={current === code}
                    lang={code}
                >
                    {shortLabel}
                </button>
            ))}
        </div>
    );
}
