import { Link } from 'react-router-dom';

export default function InvestorDashboard() {
  // Dummy data representing loan requests approved by AI
  const loanRequests = [
    { id: 1, purpose: "Medical Emergency", amount: 15000, tenure: 12, interest: 14, riskScore: "Low", match: "98%" },
    { id: 2, purpose: "Small Business Setup", amount: 50000, tenure: 24, interest: 16, riskScore: "Medium", match: "85%" },
    { id: 3, purpose: "Education Course", amount: 25000, tenure: 18, interest: 12, riskScore: "Low", match: "92%" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Dashboard Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-slate-200">
        <div className="text-xl font-extrabold text-slate-900 tracking-tight">
          SmartLend<span className="text-teal-500">.ai</span> <span className="text-slate-400 font-medium text-sm ml-2">| Investor Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-600">Portfolio Value: <span className="text-green-600 font-bold">₹1,20,000</span></span>
          <Link to="/" className="text-sm font-semibold text-red-500 hover:text-red-600 transition border border-red-100 bg-red-50 px-4 py-2 rounded-lg">
            Logout
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Investor Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Total Invested</p>
            <h3 className="text-2xl font-black text-slate-800">₹85,000</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Earned Interest</p>
            <h3 className="text-2xl font-black text-green-600">+ ₹12,450</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Active Loans</p>
            <h3 className="text-2xl font-black text-teal-600">4</h3>
          </div>
        </div>

        {/* Available Loans Marketplace */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Available Loan Requests</h2>
            <p className="text-sm text-slate-500 mt-1">Pre-verified by our ML risk assessment model.</p>
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {loanRequests.map((loan) => (
            <div key={loan.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100">
                  {loan.purpose}
                </span>
                <span className="text-xs font-bold text-slate-400">Match: {loan.match}</span>
              </div>
              
              <h3 className="text-3xl font-black text-slate-800 mb-1">₹{loan.amount.toLocaleString('en-IN')}</h3>
              
              <div className="grid grid-cols-2 gap-4 my-6">
                <div>
                  <p className="text-xs text-slate-500">Interest Rate</p>
                  <p className="font-bold text-slate-800">{loan.interest}% p.a.</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Tenure</p>
                  <p className="font-bold text-slate-800">{loan.tenure} Months</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">AI Risk Score</p>
                  <p className={`font-bold ${loan.riskScore === 'Low' ? 'text-green-600' : 'text-amber-500'}`}>
                    {loan.riskScore} Risk
                  </p>
                </div>
              </div>

              <button className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition shadow-sm">
                Fund This Loan
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}