import { Fragment } from "react";

import BgImage from "../components/UI/BgImage";
import Header from "../components/UI/Header";
import SignInForm from '../components/LoginPage/SignInForm';
import Box6 from '../components/UI/Footer';

function Login() {
    return (
        <Fragment>
            <BgImage signIn={true} />
            <Header />
            <SignInForm />
            <Box6 />
        </Fragment>
    )
}

export default Login;