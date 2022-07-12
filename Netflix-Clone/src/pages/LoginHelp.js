import { Fragment } from 'react';
import BgImage from '../components/UI/BgImage';
import Header from '../components/UI/Header';
import ForgotPasswordForm from '../components/Forgot Password Page/ForgotPasswordForm';
import Footer from '../components/UI/Footer';

const LoginHelp = () => {
  return (
    <Fragment>
      <BgImage forgotPage={true} />
      <Header forgotHeader={true} />
      <ForgotPasswordForm />
      <Footer />
    </Fragment>
  );
};

export default LoginHelp;