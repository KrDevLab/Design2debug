function Navigation() {
    try {
        const [scrolled, setScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#06B6D4] flex items-center justify-center shadow-md">
                            <div className="icon-fingerprint text-white text-xl"></div>
                        </div>
                        <span className="font-['Space_Grotesk'] font-bold text-xl tracking-wide text-slate-900">IDentiqX</span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
                        <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
                        <a href="#tech" className="hover:text-slate-900 transition-colors">Tech Stack</a>
                        <a href="#process" className="hover:text-slate-900 transition-colors">Process</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-slate-500 hover:text-slate-900 transition-colors">
                            <div className="icon-sun"></div>
                        </button>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation error:', error);
        return null;
    }
}