import { Fragment } from 'react';
import BgImage from '../components/UI/BgImage';
import Header from '../components/UI/Header';
import ForgotPasswordForm from '../components/Forgot Password Page/ForgotPasswordForm';
import Signout from '../components/SignOut Page/Signout';
import Box6 from '../components/UI/Footer';

const LoginHelp = (props) => {
  return (
    <Fragment>
      <BgImage forgotPage={true} />
      <Header forgotHeader={true} />
      {props.signout && <Signout />}
      {!props.signout && <ForgotPasswordForm />}
      <Box6 />
    </Fragment>
  );
};

export default LoginHelp;