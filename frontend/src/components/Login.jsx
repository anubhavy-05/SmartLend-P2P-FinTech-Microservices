import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  // Navigation hook initialize kiya
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Login to your SmartLend account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Yahan onClick event add kiya gaya hai */}
          <button 
            type="button"
            onClick={() => navigate('/dashboard/borrower')}
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Don't have an account? <Link to="/signup" className="text-purple-600 font-semibold cursor-pointer hover:underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}