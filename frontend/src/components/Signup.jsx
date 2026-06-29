import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  // Navigation aur State hooks initialize kiye
  const navigate = useNavigate();
  const [role, setRole] = useState('borrower'); // Default role 'borrower' set kiya hai

  // Handle Signup click
  const handleSignup = () => {
    if (role === 'borrower') {
      navigate('/dashboard/borrower');
    } else if (role === 'investor') {
      navigate('/dashboard/investor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
          <p className="text-slate-500 mt-2">Join SmartLend P2P Platform</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">I want to...</label>
            {/* Yahan humne value aur onChange lagaya hai state update karne ke liye */}
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
            >
              <option value="borrower">Apply for a Loan (Borrower)</option>
              <option value="investor">Invest Money (Investor)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <button 
            type="button"
            onClick={handleSignup}
            className="w-full bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-800 transition duration-200 mt-2 shadow-sm"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account? <Link to="/login" className="text-teal-600 font-semibold cursor-pointer hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}