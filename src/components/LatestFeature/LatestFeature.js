import React from "react";
import "./LatestFeature.scss";
import octopus from "../../assets/images/octopus-img.png";
import coins from "../../assets/images/coin-2.svg";
import { Link } from "react-router-dom";

export default function LatestFeature() {
  return (
    <section className="latest-feature">
      <h1 className="latest-feature__header">Our latest feature</h1>
      <div className="peak-savings">
        <h2 className="peak-savings__header">
          Peak Savings for Off-Peak Times
        </h2>
        <div className="peak-savings__body">
          <img
            src={octopus}
            alt="octopus with coins"
            className="peak-savings__octopus-img"
          />
          <img
            src={coins}
            alt="3 golden coins"
            className="peak-savings__coin-img"
          />
          <p className="peak-savings__text">
            Save money, earn points, and help the environment, once notification
            at a time.
          </p>
        </div>
        <div className="peak-savings__button-block">
          <Link to="/feature"><button className="peak-savings__button">Save now</button></Link>
        </div>
      </div>
    </section>
  );
}
