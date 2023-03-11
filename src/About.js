import mario from './assets/Mario and Adrian A.jpg';
import restaurant from './assets/restaurant.jpg';

function About() {
    return (
    <section className="about" id="about">
        <div className="about-title">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <div className="about-brief">
                <p>Little lemon is the brainchild of two entrepreneurs who dared to take an unprecedented business stride, and shaped an extraordinary trend in the mediterranean food industry.<br/>Launched in 2016 with the  purpose of providing delicious and authentic dishes  at affordable prices.
                 It believes in prioritizing customer satisfaction and create fun memorable experiences.</p>
            </div>
        </div>
        <div className="about-img">
            <img className="about-restaurant" src={restaurant} alt="Little-lemon img" />
            <img className="about-mario" src={mario} alt="Person img" />
        </div>
    </section>
    )
}

export default About;