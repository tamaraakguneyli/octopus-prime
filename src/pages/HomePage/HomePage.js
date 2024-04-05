import React from "react";
import "./HomePage.scss";
import homePageTop from "../../assets/images/new-home-top.png";
import homePageBottom from "../../assets/images/new-home-bottom.png";
import LatestFeature from "../../components/LatestFeature/LatestFeature";

export default function HomePage() {
  return (
    <main className="main">
      <img
        className="main__img "
        src={homePageTop}
        alt="image of the app home screen"
      />
      <LatestFeature className="main__feature" />
      <img
        className="main__img "
        src={homePageBottom}
        alt="image of the app home screen"
      />
    </main>
  );
}
