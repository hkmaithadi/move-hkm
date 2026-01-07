import { ArrowRight, ArrowLeft, Globe, Award, Users, Search, FileCheck, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function Home() {
    const isRtl = false; // Default to LTR

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-secondary text-white py-24 sm:py-32">
                <div className="absolute inset-0 bg-secondary/90 z-0"></div>
                {/* Placeholder for background image if needed */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Your Future Starts <span className="text-primary">Abroad</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
                        Discover world-class education opportunities in Ireland, UK, Germany, and Canada. Let Move guide you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/destinations" className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                            Explore Destinations {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                        <Link to="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative -mx-4 sm:mx-0">
                        <div className="flex overflow-x-auto gap-6 px-4 sm:px-0 pb-4 snap-x snap-mandatory scrollbar-hide justify-start sm:justify-center">
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex-shrink-0 w-[280px] sm:w-[320px] text-center snap-center">
                                <div className="w-16 h-16 bg-blue-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Globe size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Global Network</h3>
                                <p className="text-gray-600">Partnered with leading institutions in 4 major countries.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex-shrink-0 w-[280px] sm:w-[320px] text-center snap-center">
                                <div className="w-16 h-16 bg-yellow-100 text-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                                    <Users size={32} className="text-yellow-600 group-hover:text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Personalized Guidance</h3>
                                <p className="text-gray-600">Expert counselors to help you choose the right path.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex-shrink-0 w-[280px] sm:w-[320px] text-center snap-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">High Success Rate</h3>
                                <p className="text-gray-600">Thousands of students successfully placed worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {/* Step 1 */}
                            <div className="text-center bg-white p-4">
                                <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Discover</h3>
                                <p className="text-gray-600">Browse through our curated list of universities and courses.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center bg-white p-4">
                                <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">
                                    <FileCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Apply</h3>
                                <p className="text-gray-600">Submit your application with our step-by-step assistance.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center bg-white p-4">
                                <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-white shadow-lg">
                                    <Plane size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Go</h3>
                                <p className="text-gray-600">Get your visa and prepare for your journey abroad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Destinations Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Top Destinations</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative -mx-4 sm:mx-0">
                        <div className="flex overflow-x-auto gap-6 px-4 sm:px-0 pb-4 snap-x snap-mandatory scrollbar-hide">
                            {/* Ireland */}
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}countries-pictures/Ireland1.jpg`}
                                    alt="Ireland"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Ireland</h3>
                                    <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        Known for its friendly people and rich history, Ireland offers high-quality education and post-study work opportunities.
                                    </p>
                                    <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>

                            {/* UK */}
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}countries-pictures/uk1.jpg`}
                                    alt="UK"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">United Kingdom</h3>
                                    <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        Home to some of the world's oldest and most prestigious universities. Experience academic excellence in the UK.
                                    </p>
                                    <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>

                            {/* Germany */}
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}countries-pictures/germany1.jpg`}
                                    alt="Germany"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Germany</h3>
                                    <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        A hub for innovation and engineering. Enjoy low tuition fees and a vibrant international student community.
                                    </p>
                                    <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>

                            {/* Canada */}
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] snap-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}countries-pictures/canada1.jpg`}
                                    alt="Canada"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Canada</h3>
                                    <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        Welcoming and diverse, Canada provides top-tier education and excellent pathways for permanent residency.
                                    </p>
                                    <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        View Details <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/destinations" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors">
                            Explore Destinations {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
