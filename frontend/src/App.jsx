import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Jab URL '/' hoga, tab Landing page dikhega */}
        <Route path="/" element={<Landing />} />
        
        {/* Jab URL '/login' hoga, tab Login page dikhega */}
        <Route path="/login" element={<Login />} />
        
        {/* Jab URL '/signup' hoga, tab Signup page dikhega */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;