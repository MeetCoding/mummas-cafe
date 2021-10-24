import './Hero.css';
import HeroImage from './../../img/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => (
    <div className="hero-background">
        <section className="hero">
            <div className="hero-content">
                <h className="hero-heading">Mumma's Café</h>
                <p className="hero-paragraph">
                    Located on the 1st floor of hotel, just nearby Gallery Cafe and Lobby area, Mummas Cafe is a good place for meeting and dining at the same time.
                </p>
                <Link to='/menu' className="hero-menu-link">
                    View Menu
                </Link>
            </div>
            <img src={HeroImage} alt="Hero" className="hero-image" />
        </section>
    </div>
)

export default Hero;