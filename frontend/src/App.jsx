import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import BorrowerDashboard from './components/BorrowerDashboard'; // <--- Yeh Naya Import kiya

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Naya Route Dashboard ke liye */}
        <Route path="/dashboard/borrower" element={<BorrowerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;