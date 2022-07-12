import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoginHelp from './pages/LoginHelp';
// footer leaks everywhere
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/LoginHelp' element={<LoginHelp />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
