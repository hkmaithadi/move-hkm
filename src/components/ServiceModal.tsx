import { X, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        icon: ReactNode;
        details: string[];
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && service && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        ref={modalRef}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                        >
                            <X size={24} className="text-gray-500" />
                        </button>

                        <div className="grid md:grid-cols-5_3_2 h-full md:grid-cols-[2fr_3fr]">
                            <div className="bg-secondary/5 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg mb-6">
                                    <div className="transform scale-150">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">{service.title}</h3>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Service Details</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Benefits</h4>
                                <ul className="space-y-3">
                                    {service.details.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-primary hover:text-secondary transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
