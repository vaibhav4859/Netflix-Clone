import { Fragment } from "react";
import Header from "../components/Home/Header";
import MovieDisplay from '../components/Home/MovieDisplay';

const HomePage = props => {
  return (
    <Fragment>
      <Header />
      <MovieDisplay />
    </Fragment>
  );
}

export default HomePage;