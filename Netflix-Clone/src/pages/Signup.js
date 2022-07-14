import { Outlet, useLocation } from 'react-router-dom'

import SignupHeader from "../components/Signup Page/SignupHeader";
import Footer from '../components/UI/Footer';

const Signup = () => {
    const location = useLocation();
    return (
        <div style={{ backgroundColor: 'white' }} >
            <SignupHeader signout={location.pathname === '/signup' ? true : false} />
            <Outlet />
            <Footer signup={true} />
        </div>
    );
};

export default Signup;