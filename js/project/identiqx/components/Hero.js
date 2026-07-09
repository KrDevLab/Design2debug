function Hero() {
    try {
        return (
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-gray-200 text-sm mb-6 text-slate-600 bg-white/80">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Production Ready
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Secure Identity <br />
                            <span className="text-gradient">Wallet & Vault.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                            IDentiqX is a modern digital identity wallet built to securely store, organize, and access important personal documents from one place.
                        </p>

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-fit">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-gray-100">
                                <div className="icon-play text-xl text-slate-800"></div>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-0.5">Coming Soon</div>
                                <div className="text-sm font-bold text-slate-900">Google Play Store</div>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-['JetBrains_Mono']">
                            <div className="flex items-center gap-2">
                                <div className="icon-shield-check text-[#06B6D4]"></div>
                                E2E Encryption
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="icon-cloud-off text-[#8B5CF6]"></div>
                                Offline First
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full flex items-center justify-center reveal animate-float">
                        {/* Abstract Phone Mockup representation */}
                        <div className="w-[300px] h-[600px] glass-card border-gray-200 rounded-[3rem] p-4 relative overflow-hidden flex flex-col shadow-2xl shadow-[#6366F1]/10 bg-white">
                            <div className="w-32 h-6 bg-slate-100 rounded-b-3xl absolute top-0 left-1/2 -translate-x-1/2 shadow-inner"></div>
                            
                            {/* App Mockup UI */}
                            <div className="flex-1 rounded-[2rem] bg-slate-50 border border-gray-100 w-full mt-4 p-6 flex flex-col gap-6 relative overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-xs text-slate-500">Welcome back</div>
                                        <div className="font-semibold text-sm text-slate-900">Alex Johnson</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-md">
                                        <div className="icon-user text-white"></div>
                                    </div>
                                </div>

                                <div className="w-full h-32 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#06B6D4] p-4 relative overflow-hidden shadow-lg shadow-blue-500/20">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="text-white/90 text-xs mb-1">Total Documents</div>
                                    <div className="text-3xl font-bold text-white">12</div>
                                    <div className="mt-4 flex items-center gap-1 text-xs text-white/90">
                                        <div className="icon-shield text-xs"></div> Highly Secure
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="text-xs font-semibold text-slate-500 mb-3">Recent</div>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Passport', icon: 'plane', color: 'bg-blue-100 text-blue-600' },
                                            { name: 'Driving License', icon: 'car', color: 'bg-purple-100 text-purple-600' },
                                            { name: 'Insurance', icon: 'file-text', color: 'bg-emerald-100 text-emerald-600' }
                                        ].map((doc, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${doc.color}`}>
                                                    <div className={`icon-${doc.icon} text-sm`}></div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-medium text-slate-900">{doc.name}</div>
                                                    <div className="text-xs text-slate-500">Updated 2d ago</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative cards */}
                        <div className="absolute top-20 -right-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-float bg-white" style={{animationDelay: '1s'}}>
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <div className="icon-check text-green-600"></div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-900">Login Successful</div>
                                <div className="text-xs text-slate-500">Securely Authenticated</div>
                            </div>
                        </div>

                        <div className="absolute bottom-32 -left-12 glass-card p-4 rounded-xl flex items-center gap-3 animate-float bg-white" style={{animationDelay: '2s'}}>
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <div className="icon-fingerprint text-[#6366F1]"></div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-900">Biometric</div>
                                <div className="text-xs text-slate-500">Secured Access</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero error:', error);
        return null;
    }
}