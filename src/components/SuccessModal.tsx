import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    const { t } = useTranslation();
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl z-10 p-8 text-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute top-4 right-4 rtl:left-4 rtl:right-auto p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label={t('modal.closeAria')}
                        >
                            <X size={20} className="text-gray-400" />
                        </button>

                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                            <CheckCircle2 size={40} />
                        </div>

                        <h3 className="text-2xl font-bold text-secondary mb-2">{t('modal.successTitle')}</h3>
                        <p className="text-gray-600 mb-8">
                            {t('modal.successBody')}
                        </p>

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-primary hover:text-secondary transition-all duration-300 shadow-lg"
                        >
                            {t('modal.successButton')}
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
