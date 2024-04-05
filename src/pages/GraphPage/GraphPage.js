import Graph from "../../components/Graph/Graph";
import header from "../../assets/images/home-header.png";
import Green from "../../components/Green/Green";
import nav from "../../assets/images/new-page-footer.png";
import "./GraphPage.scss";

export default function GraphPage() {
  return (
    <>
      <header className="graph-page">
        <img
          className="graph-page__phone"
          src={header}
          alt="Iphone top of screen"
        />
        <div className="graph-page__container">
          <h1 className="graph-page__heading">
            {" "}
            Here's what Smart Notifications could have done for your energy
            consumption!
          </h1>
        </div>
      </header>
      <main className="graph-page__content">
        <Graph />
        <Green />
      </main>
      <nav>
        <img
          className="graph-page__img"
          src={nav}
          alt="Navigation bar for home, usage(highlighted), bills"
        />
      </nav>
    </>
  );
}
