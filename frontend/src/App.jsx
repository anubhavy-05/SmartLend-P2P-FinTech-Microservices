import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      {/* Abhi ke liye hum dono components ek ke neeche ek dikha rahe hain */}
      <Login />
      <hr className="border-4 border-slate-200" />
      <Signup />
    </div>
  )
}

export default App;