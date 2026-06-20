export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm border-b border-slate-100">
        <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
          SmartLend<span className="text-purple-600">.ai</span>
        </div>
        <div>
          <button className="text-slate-600 font-semibold hover:text-purple-600 mr-6 transition">Log In</button>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-slate-800 transition shadow-md">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 font-semibold text-sm mb-8 border border-purple-100 shadow-sm">
          Powered by Advanced Machine Learning
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Smarter P2P Lending, <br className="hidden md:block" /> Secured by AI.
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mb-10">
          Borrow with fair rates. Invest with confidence. Our ML-driven risk assessment model ensures secure, fraud-free micro-lending for everyone.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg hover:shadow-purple-500/30">
            I want to Borrow
          </button>
          <button className="bg-white text-slate-800 border border-slate-300 px-8 py-3.5 rounded-lg font-bold text-lg hover:border-purple-400 hover:text-purple-600 transition shadow-sm">
            Start Investing
          </button>
        </div>
      </main>

      {/* Features/Stats Section (Energetic Tech Mix Colors) */}
      <div className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div>
             {/* Teal color for 87% */}
             <h3 className="text-4xl font-black text-teal-400 mb-2">87%</h3>
             <p className="text-slate-500 font-medium">Fraud Prevention Precision</p>
           </div>
           <div>
             {/* Amber/Orange color for Zero */}
             <h3 className="text-4xl font-black text-amber-500 mb-2">Zero</h3>
             <p className="text-slate-500 font-medium">Hidden Processing Fees</p>
           </div>
           <div>
             {/* Purple color for 24/7 */}
             <h3 className="text-4xl font-black text-purple-500 mb-2">24/7</h3>
             <p className="text-slate-500 font-medium">Automated Risk Scoring</p>
           </div>
        </div>
      </div>
    </div>
  );
}