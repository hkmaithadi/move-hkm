import { BookOpen, Home as HomeIcon, FileText, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ServiceModal from '../components/ServiceModal';

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const services = [
        {
            icon: <FileText size={32} />,
            title: "Visa",
            description: "We are your steadfast companions providing the guidance to secure the essential documents for your visa application process.",
            details: [
                "Document checklist preparation and verification",
                "Appointment scheduling assistance",
                "Interview preparation mock sessions",
                "Application form filling guidance",
                "Post-submission tracking"
            ]
        },
        {
            icon: <BookOpen size={32} />,
            title: "Admissions",
            description: "We navigate all university applications, ensuring you find your perfect academic match.",
            details: [
                "University sieving and shortlisting",
                "SOP (Statement of Purpose) editing",
                "LOR (Letter of Recommendation) guidance",
                "Application submission management",
                "Scholarship application support"
            ]
        },
        {
            icon: <Briefcase size={32} />,
            title: "Ausbildung",
            description: "Start your professional career in Germany with our expert guidance on vocational training programs and placement assistance.",
            details: [
                "Eligibility assessment",
                "German language requirement guidance",
                "Resume and cover letter preparation",
                "Interview coaching for employers",
                "Contract understanding and signing"
            ]
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Scholarships",
            description: "Empowering students with tailored scholarship guidance for studying abroad.",
            details: [
                "Database of available scholarships",
                "Profile evaluation for eligibility",
                "Essay writing mentoring",
                "Application timeline management",
                "Financial aid documentation"
            ]
        },
        {
            icon: <HomeIcon size={32} />,
            title: "Accommodation",
            description: "Simplify your stay abroad with our personalized accommodation solutions.",
            details: [
                "Student dormitory applications",
                "Private apartment hunting",
                "Lease agreement review",
                "Neighborhood safety checks",
                "Utility setup assistance"
            ]
        },
    ];

    return (
        <div className="py-20 md:py-32 bg-gray-50/50">
            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase mb-3 block">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Services we are offering are specifically designed to meet your needs and ensure a smooth journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            <button
                                onClick={() => setSelectedService(service)}
                                className="flex items-center text-secondary font-semibold group-hover:text-primary transition-colors cursor-pointer w-fit"
                            >
                                <span className="mr-2">Learn more</span>
                                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-block p-1 rounded-full bg-white shadow-xl">
                        <Link
                            to="/contact"
                            className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-secondary transition-all duration-300 inline-flex items-center gap-3 group"
                        >
                            Get Personalised Advice
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
