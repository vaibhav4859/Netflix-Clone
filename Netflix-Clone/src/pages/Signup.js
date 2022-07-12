import { useState } from "react";

import SignupHeader from "../components/Signup Page/SignupHeader";
import TxtContainer from '../components/Signup Page/TxtContainer';
import SignupForm from "../components/Signup Page/SignupForm";
import Footer from '../components/UI/Footer';

const Signup = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const buttonClickedHandler = () => setIsButtonClicked(true);

    return (
        <div style={{ backgroundColor: 'white' }} >
            <SignupHeader signup={true} />
            {!isButtonClicked && <TxtContainer onClicked={buttonClickedHandler} />}
            {isButtonClicked && <SignupForm />}
            <Footer signup={true} />
        </div>
    );
};

export default Signup;