import { useEffect } from 'react';
import { APPEAR_DIST, Y_DISP } from './../../hooks/useFadeEffect';
import Hero from './../../components/hero/Hero';
import Intro from './../../components/Intro';
import Goals from './../../components/Goals';
import Awards from './../../components/Awards';
import './Home.css';

const Home = () => {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.paddingBottom = (Y_DISP + APPEAR_DIST) + "px";
    }, [])

    return (
        <article className="home">
            <Hero />
            <Intro />
            <Goals />
            <Awards />
        </article>
    )
}

export default Home;