import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const LoginHelp = React.lazy(() => import('./pages/LoginHelp'));
const TxtContainer = React.lazy(() => import('./components/Signup Page/TxtContainer'));
const SignupForm = React.lazy(() => import('./components/Signup Page/SignupForm'));
const ChoosePlan = React.lazy(() => import('./components/Signup Page/ChoosePlan'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));

function App() {
  return (
    <div>
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/LoginHelp' element={<LoginHelp />} />
          <Route path='/signup/*' element={<Signup />} >
            <Route path='' element={<ChoosePlan />} />
            <Route path='registration' element={<TxtContainer />} />
            <Route path='regform' element={<SignupForm />} />
          </Route>
          <Route path='/logout' element={<LoginHelp signout={true} />} />
          <Route path='/home' element={<HomePage />} />
          <Route path="/play" element={<Movies />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
