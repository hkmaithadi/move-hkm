import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function Destinations() {
    const isRtl = false;

    const destinations = [
        {
            id: 'ireland',
            name: "Ireland",
            description: "Known for its friendly people and rich history, Ireland offers high-quality education and post-study work opportunities.",
            image: `${import.meta.env.BASE_URL}countries-pictures/Ireland1.jpg`,
        },
        {
            id: 'uk',
            name: "United Kingdom",
            description: "Home to some of the world's oldest and most prestigious universities. Experience academic excellence in the UK.",
            image: `${import.meta.env.BASE_URL}countries-pictures/uk1.jpg`,
        },
        {
            id: 'germany',
            name: "Germany",
            description: "A hub for innovation and engineering. Enjoy low tuition fees and a vibrant international student community.",
            image: `${import.meta.env.BASE_URL}countries-pictures/germany1.jpg`,
        },
        {
            id: 'canada',
            name: "Canada",
            description: "Welcoming and diverse, Canada provides top-tier education and excellent pathways for permanent residency.",
            image: `${import.meta.env.BASE_URL}countries-pictures/canada1.jpg`,
        },
    ];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Our Destinations</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the best countries for international students and find your perfect fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-secondary mb-3">{dest.name}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {dest.description}
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-yellow-600 transition-colors"
                                >
                                    Study in {dest.name} {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
