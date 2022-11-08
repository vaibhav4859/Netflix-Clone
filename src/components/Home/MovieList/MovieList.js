import React from "react";
import HomePage from "../../UI/Footer";
import ContinueWatching from "./Continue Watching";
import TrendingNow from "./Trending Now";
import PopularOnNetflix from "./Popular On Netflix";
import IndianTVShows from "./Indian TV Shows";
import classes from "./MovieList.module.css";
import CrimeTVShows from "./Crime TV Shows";
import TVDramas from "./TV Dramas";

const MovieList = () => {
  return (
    <div className={classes.outer}>
      <ContinueWatching />
      <TrendingNow />
      <PopularOnNetflix />
      <IndianTVShows />
      <CrimeTVShows />
      <TVDramas />
      <HomePage />
    </div>
  );
}

export default MovieList;
