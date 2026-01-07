import { Link } from 'react-router-dom';



export default function About() {
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">About Move</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                <span className="font-bold text-secondary">Move Community</span> was created by former international students who went through the same visa stress, refusals, and confusion.
                            </p>
                            <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                                <p className="font-medium text-secondary">
                                    Our mission is simple: to give honest, clear and professional guidance so every Moroccan student has a real chance to study or work abroad safely.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Link to="/contact" className="bg-primary text-secondary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                                Speak to our Team
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3 rtl:-rotate-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                            alt="Team meeting"
                            className="relative rounded-2xl shadow-xl w-full"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-secondary text-center mb-10">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-xl mb-2 text-primary">Transparency</h4>
                            <p className="text-gray-600">No hidden fees or surprises. We guide you with honesty and integrity.</p>
                        </div>
                        <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-xl mb-2 text-primary">Expertise</h4>
                            <p className="text-gray-600">Years of experience and deep knowledge of global education systems.</p>
                        </div>
                        <div className="text-center p-6 border border-gray-100 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-xl mb-2 text-primary">Support</h4>
                            <p className="text-gray-600">24/7 assistance for students, even after they have landed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
