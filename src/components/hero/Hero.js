import './Hero.css';
import HeroImage from './../../img/hero.png';

const Hero = () => (
    <div className="hero-background">
        <div className="hero">
            <div className="hero-content">
                <h className="heading">Mumma's Café</h>
                <p className="hero-paragraph">Hand made food that makes you come again.</p>
                <button className="hero-menu-button">View Menu</button>
            </div>
            <div className="hero-image-container">
                <img src={HeroImage} alt="Hero" className="hero-image" />
            </div>
        </div>
    </div>
)

export default Hero;