import { Link } from 'react-router-dom';

export default function BorrowerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Dashboard Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-slate-200">
        <div className="text-xl font-extrabold text-slate-900 tracking-tight">
          SmartLend<span className="text-purple-600">.ai</span> <span className="text-slate-400 font-medium text-sm ml-2">| Borrower Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-600">Hello, Anubhav</span>
          <Link to="/" className="text-sm font-semibold text-red-500 hover:text-red-600 transition border border-red-100 bg-red-50 px-4 py-2 rounded-lg">
            Logout
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Apply for Loan Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Apply for a New Loan</h2>
          <p className="text-sm text-slate-500 mb-6">Our AI will assess your request instantly based on these details.</p>
          
          <form className="space-y-6">
            {/* Ab is grid mein 6 items ho gaye hain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Requested Amount (₹)</label>
                <input type="number" placeholder="e.g. 10000" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Income (₹)</label>
                <input type="number" placeholder="e.g. 45000" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Active EMIs (₹/month)</label>
                <input type="number" placeholder="e.g. 2500" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Employment Duration (Years)</label>
                <input type="number" step="0.5" placeholder="e.g. 2.5" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>

              {/* NAYA FIELD: Loan Tenure */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Tenure (Months)</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white">
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  <option value="24">24 Months</option>
                  <option value="36">36 Months</option>
                </select>
              </div>

              {/* NAYA FIELD: Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expected Interest Rate (% p.a.)</label>
                <input type="number" step="0.1" placeholder="e.g. 12.5" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Purpose of Loan</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white">
                <option value="medical">Medical Emergency</option>
                <option value="education">Education / Upskilling</option>
                <option value="business">Small Business / Shop</option>
                <option value="personal">Personal / Other</option>
              </select>
            </div>

            {/* Dummy Document Upload */}
            <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg text-center hover:bg-slate-50 transition cursor-pointer">
              <p className="text-sm font-medium text-slate-600 mb-1">Upload Bank Statement (Last 3 Months)</p>
              <p className="text-xs text-slate-400 mb-3">PDF or Image up to 5MB</p>
              <input type="file" className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer" />
            </div>

            <button type="button" className="w-full bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition shadow-md">
              Submit Application to AI
            </button>
          </form>
        </div>

        {/* Right Column: Status & Stats */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Active Loan Status</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-500">Status</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Good Standing</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-500">Amount Borrowed</span>
              <span className="font-semibold text-slate-800">₹15,000</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-500">Interest Rate</span>
              <span className="font-semibold text-slate-800">12% p.a.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Next EMI</span>
              <span className="font-semibold text-slate-800">₹1,500 (5th July)</span>
            </div>
            <button className="w-full mt-6 bg-slate-900 text-white font-semibold py-2 rounded-lg hover:bg-slate-800 transition">
              Pay EMI Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-teal-50 p-6 rounded-xl border border-purple-100">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">🛡️</span>
              <h3 className="text-md font-bold text-slate-800">Data Privacy Assured</h3>
            </div>
            <p className="text-sm text-slate-600">Your financial data is encrypted and only used by our AI to assess creditworthiness.</p>
          </div>
        </div>

      </div>
    </div>
  );
}