import React from "react";
import Energygraph from "../../assets/images/graph.svg";
import LeftChevron from "../../assets/images/left-chevron.png";
import RightChevron from "../../assets/images/right-chevron.png";
import Currentenergy from "../../assets/images/current-usage.svg";
import "./Graph.scss";

const Graph = () => {
  return (
    <section className="graph">
      <div className="graph__container">
        <div className="graph__month">
          <img className="graph__chevron" src={LeftChevron} alt="" />
          <h1 className="graph__heading">March</h1>
          <img className="graph__chevron" src={RightChevron} alt="" />
        </div>
        <article className="graph__chart">
          <img className="graph__energy" src={Energygraph} alt="energy usage" />
          <img
            className="graph__current-energy"
            src={Currentenergy}
            alt="energy usage"
          />
          <small className="graph__axis">Daily Time</small>
        </article>
      </div>
    </section>
  );
};

export default Graph;
