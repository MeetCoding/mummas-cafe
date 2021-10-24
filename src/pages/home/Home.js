import Hero from './../../components/hero/Hero';
import Intro from './../../components/Intro';
import Goals from './../../components/Goals';
import Awards from './../../components/Awards';
import './Home.css';

const Home = () => (
    <article className="home">
        <Hero />
        <Intro />
        <Goals />
        <Awards />
    </article>
)

export default Home;