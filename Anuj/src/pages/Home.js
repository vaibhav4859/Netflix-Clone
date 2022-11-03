import { Fragment } from 'react';

import Header from '../components/UI/Header';
import Heading from '../components/Home Page/Heading';
import InputField from '../components/Home Page/InputField';
import BgImage from '../components/UI/BgImage';
import Boxes from '../components/Home Page/Boxes/Boxes';

const HomePage = () => {
  return (
    <Fragment>
      <BgImage />
      <Header homeHeader={true} />
      <Heading />
      <InputField />
      <Boxes/>
    </Fragment>
  )
}

export default HomePage;