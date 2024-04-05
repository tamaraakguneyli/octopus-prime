import earth from "../../assets/images/earth.svg";
import coins from "../../assets/images/coin.svg";
import tree from "../../assets/images/tree.svg";
import "./Green.scss";

export default function Green() {
  return (
    <section className="green">
      <div className="green__message">
        <img src={coins} alt="Coins" />
        <p className="green__text green__text--height">
          If you switched to our optimal hours, you could save{" "}
          <span className="green__text green__text--enhanced">£8</span> and do
          your bit for the environment:{" "}
        </p>
      </div>
      <div  className="green__information">
      <div className="green__activity">
        <img src={tree} alt="Tree" className="green__image"/>
        <p className="green__text">
          Reduce the CO2 output that tree seedlings absorb
        </p>
      </div>
      <div className="green__activity">
        <img src={earth} alt="Earth" />
        <p className="green__text">
          Opt in to greener times and make your travel cleaner
        </p>
      </div>
      </div>
      <p className="green__text green__text--bold">
        Trust that with Octopus, you're as green as you can get
      </p>
    </section>
  );
}
