import { Fragment } from 'react';

import Header from '../components/UI/Header';
import Heading from '../components/Home Page/Heading';
import InputField from '../components/Home Page/InputField';
import BgImage from '../components/UI/BgImage';
import Box1 from '../components/Home Page/Boxes/Box1';
import Box2 from '../components/Home Page/Boxes/Box2';
import Box3 from '../components/Home Page/Boxes/Box3';
import Box4 from '../components/Home Page/Boxes/Box4';
import Box5 from '../components/Home Page/Boxes/Box5';
import Footer from '../components/UI/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <BgImage />
      <Header homeHeader={true} />
      <Heading />
      <InputField />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Footer />
    </Fragment>
  );
}

export default HomePage;