import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <section className="loader">
      <div className="loader__container">
        <h1 className="loader__heading">Impact Loading</h1>
        <div className="loader__bar">
          <div className="loader__circle loader__circle--one"></div>
          <div className="loader__circle loader__circle--two"></div>
          <div className="loader__circle loader__circle--three"></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
