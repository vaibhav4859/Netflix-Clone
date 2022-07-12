import { Fragment } from "react";

import BgImage from "../components/UI/BgImage";
import Header from "../components/UI/Header";
import SignInForm from '../components/LoginPage/SignInForm';
import Footer from "../components/UI/Footer";

function Login() {
    return (
        <Fragment>
            <BgImage />
            <Header />
            <SignInForm />
            <Footer />
        </Fragment>
    )
}

export default Login;