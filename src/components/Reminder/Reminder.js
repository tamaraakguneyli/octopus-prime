import "./Reminder.scss";
import octopus from "../../assets/images/octopus-img.png";

export default function Reminder () {
    return (
        <section className="reminder">
          <img className="reminder__image" src={octopus} alt="Octopus"/>
          <div className="reminder__information">
            <h3 className="reminder__heading">Off-peak hours approaching!</h3>
            <p className="reminder__text">
              It's a great time to make the most of your energy, at a cheaper
              rate.
            </p>
          </div>
          <div>
          <p className="reminder__date">now</p>
          </div>
        </section>
    )
}