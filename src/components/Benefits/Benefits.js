import octopusBank from "../../assets/images/octopus-1.svg";
import octopusWorld from "../../assets/images/octopus-2.svg";
import octopusCalculator from "../../assets/images/octopus-3.svg";
import "./Benefits.scss";

export default function Benefits () {
    return (
        <section className="benefits">
            <article className="benefits__information">
                <img src={octopusBank} alt="Octopus with piggy bank" className="benefits__image"/>
                <div>
                    <h3 className="benefits__heading">Cheaper energy</h3>
                    <p className="benefits__text">Get notified as soon as super cheap electricity is available.</p>
                </div>
            </article>
            <article className="benefits__information">
                <img src={octopusCalculator} alt="Octopus with calculator" className="benefits__image"/>
                <div>
                    <h3 className="benefits__heading">Better benefits</h3>
                    <p className="benefits__text">Supercharge your Octopoints by using off-peak energy.</p>
                </div>
            </article>
            <article className="benefits__information">
                <img src={octopusWorld} alt="Octopus and the world" className="benefits__image"/>
                <div>
                    <h3 className="benefits__heading">Greener planet</h3>
                    <p className="benefits__text">See the environmental impact you're having.</p>
                </div>
            </article>
        </section>
    )
}