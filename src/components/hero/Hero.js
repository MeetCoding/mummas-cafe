import './Hero.css';
import HeroImage from './../../img/hero.png';

const Hero = () => (
    <div className="hero-background">
        <div className="hero">
            <div className="hero-content">
                <h className="hero-heading">Mumma's Café</h>
                <p className="hero-paragraph">
                    Located on the 1st floor of hotel, just nearby Gallery Cafe and Lobby area, Lounge Bar is a good place for meeting and dining at the same time.
                </p>
                <button className="hero-menu-button">View Menu</button>
            </div>
            <img src={HeroImage} alt="Hero" className="hero-image" />
        </div>
    </div>
)

export default Hero;