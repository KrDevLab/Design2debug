function Features() {
    try {
        const features = [
            { icon: 'shield', title: 'End-to-End Security', desc: 'Military-grade encryption ensures your documents are safe and accessible only by you.' },
            { icon: 'smartphone', title: 'Biometric Login', desc: 'Quick and secure access using Face ID or Fingerprint recognition.' },
            { icon: 'cloud-sync', title: 'Cloud Sync', desc: 'Seamlessly synchronize your documents across all your authorized devices.' },
            { icon: 'wifi-off', title: 'Offline Access', desc: 'Access your critical documents anytime, even without an internet connection.' },
            { icon: 'search', title: 'Fast Search', desc: 'Instantly find any document with powerful on-device searching capabilities.' },
            { icon: 'folder-tree', title: 'Smart Categories', desc: 'Automatically organizes documents into logical categories for easy retrieval.' }
        ];

        return (
            <section id="features" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Premium <span className="text-gradient">Features</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Designed with extreme attention to detail, IDentiqX offers a comprehensive suite of features built for modern needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="glass-card bg-white p-8 hover:bg-slate-50 transition-colors duration-300 group reveal" style={{transitionDelay: `${idx * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <div className={`icon-${feature.icon} text-2xl text-[#6366F1]`}></div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features error:', error);
        return null;
    }
}