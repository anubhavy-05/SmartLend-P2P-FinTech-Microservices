import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import BorrowerDashboard from './components/BorrowerDashboard';
import InvestorDashboard from './components/InvestorDashboard'; // <-- Naya Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/borrower" element={<BorrowerDashboard />} />
        
        {/* Naya route Investor Dashboard ke liye */}
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;