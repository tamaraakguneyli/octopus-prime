import Benefits from "../../components/Benefits/Benefits";
import Reminder from "../../components/Reminder/Reminder";
import "./FeaturePage.scss";

export default function FeaturePage() {
  return (
    <>
      <header className="feature-page">
        <h1 className="feature-page__heading">Introducing</h1>
        <h2 className="feature-page__subheading">Smart Notifications</h2>
      </header>
      <main className="feature-page__contents">
        <Reminder/>
        <Benefits/>
        <div className="feature-page__buttons">
          <button className="feature-page__enable">Enable</button>
          <button className="feature-page__not">Not Now</button>
        </div>
      </main>
    </>
  );
}
