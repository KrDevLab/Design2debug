function TechStack() {
    try {
        const stack = [
            'Flutter', 'Dart', 'Firebase', 'Riverpod', 'Material 3', 
            'Hive', 'Cloud Firestore', 'Clean Architecture', 'REST API'
        ];

        return (
            <section id="tech" className="py-32 border-t border-gray-200 relative overflow-hidden bg-white/50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/5 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Powered by modern <br/><span className="text-gradient">Architecture</span></h2>
                    <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Built on top of robust, scalable technologies to ensure maximum performance and security.</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {stack.map((tech, idx) => (
                            <div key={idx} className="glass-card bg-white px-6 py-3 rounded-full flex items-center gap-2 hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                                <span className="font-['JetBrains_Mono'] text-sm text-slate-700 font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('TechStack error:', error);
        return null;
    }
}