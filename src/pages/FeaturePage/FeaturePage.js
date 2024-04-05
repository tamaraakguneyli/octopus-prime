import Benefits from "../../components/Benefits/Benefits";
import Reminder from "../../components/Reminder/Reminder";
import header from "../../assets/images/home-header.png";
import { Link, useNavigate } from "react-router-dom";
import "./FeaturePage.scss";
import { useState } from "react";

export default function FeaturePage() {
  const [enable, setEnable] = useState(false);
  const nav = useNavigate();

  const handleEnable = async (event) => {
    event.preventDefault();

    setEnable(true);
    nav("/loading");
    setTimeout(() => {
      nav("/energy");
    }, 1500);
  };

  return (
    <>
      <header className="feature-page">
        <img
          src={header}
          alt="Iphone top of screen"
          className="feature-page__image"
        />
        <h1 className="feature-page__heading">Introducing</h1>
        <h2 className="feature-page__subheading">Smart Notifications</h2>
      </header>
      <main className="feature-page__contents">
        <Reminder />
        <Benefits />
        <div className="feature-page__buttons">
          <button onClick={handleEnable} className="feature-page__enable">
            Enable
          </button>
          <Link to="/">
            <button className="feature-page__not">Not Now</button>
          </Link>
        </div>
      </main>
    </>
  );
}
