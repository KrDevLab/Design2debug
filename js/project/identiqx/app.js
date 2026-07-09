class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-slate-900">
          <div className="text-center p-8 glass-card">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
            <p className="text-slate-500 mb-4">An error occurred while loading the application.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-slate-900 text-white rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Footer() {
    return (
        <footer className="py-12 border-t border-gray-200 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="icon-fingerprint text-[#6366F1] text-xl"></div>
                    <span className="font-['Space_Grotesk'] font-bold tracking-wide">IDentiqX</span>
                </div>
                <div className="text-sm text-slate-500">
                    &copy; 2026 Designed for Portfolio Showcase.
                </div>
                <div className="flex gap-4">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kishoresde006@gmail.com.com&su=Project%20enquiry&body=Hello%20Design2Debug%20Team%2C%0AI%20hope%20you%27re%20doing%20well.%0AI%27m%20interested%20in%20working%20with%20Design2Debug%20and%20would%20like%20to%20discuss%20my%20project.%20Please%20let%20me%20know%20how%20we%20can%20get%20started.%0ALooking%20forward%20to%20hearing%20from%20you.%0ABest%20regards%2C" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-slate-900 text-slate-500 transition-colors">
                        <div className=" icon-mail"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/kishore-ravi-/" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-slate-900 text-slate-500 transition-colors">
                        <div className=" icon-linkedin"></div>
                    </a>
                </div>
            </div>
        </footer>
    );
}

function CTA() {
    return (
        <section className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
                <div className="glass-card p-16 rounded-[3rem] border-[#6366F1]/10 relative overflow-hidden bg-white/80 shadow-xl shadow-[#6366F1]/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#06B6D4]/5"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to secure your digital identity?</h2>
                        <p className="text-slate-500 mb-10 text-lg">Experience the future of secure document management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function App() {
  try {
    useScrollReveal();

    return (
      <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-[#6366F1]/20 selection:text-slate-900 relative" data-name="app" data-file="app.js">
        {/* Background ambient light */}
        <div className="fixed inset-0 bg-[url('https://resource.trickle.so/public/noise.png')] opacity-[0.02] pointer-events-none z-50 mix-blend-overlay"></div>
        
        <Navigation />
        <main>
            <Hero />
            <Features />
            <TechStack />
            <CTA />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);