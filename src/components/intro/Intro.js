import { useEffect, useRef } from 'react';
import './Intro.css';

const Intro = () => {

    const intro = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const height = document.documentElement.clientHeight;
            const top = intro.current.getBoundingClientRect().top;
            if (height - top > 20) {
                intro.current.classList.add('show-intro');
            }
        })
    }, [])

    return (
        <div ref={intro} className="intro">
            <h1 className="intro-heading">Introduction</h1>
            <p className="intro-para">
                Food and Beverage are inseparable parts of any holiday! Visit our Restaurants to enjoy delicious meals! We offer excellent food with reasonable price and heartwarming services.
                <br /> <br />
                Located in the first floor of Song Gia Suites Hotel, Mummas Café is glamour space. We offer a wide range of dishes which are well made by Master Chef, and we will give you a plenty of choices. Guests will be surprised with foods which are almost art and leaves a long and memorable aftertaste
            </p>
        </div>
    )
}

export default Intro;