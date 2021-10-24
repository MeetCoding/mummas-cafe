import { useRef } from 'react';
import useFadeEffect from '../hooks/useFadeEffect';

const imageLink = 'https://media.istockphoto.com/photos/inside-of-city-cafe-in-buenos-aires-picture-id1254911300?b=1&k=20&m=1254911300&s=170667a&w=0&h=N2_IMgyqAtrizmZjBghoAPva9FBaqHRD2WWKNxEtxkY=';

const Intro = () => {

    const intro = useRef(null);
    useFadeEffect(intro);

    const image = useRef(null)
    useFadeEffect(image);

    return (
        <div ref={intro} className="home-block">
            <div className="home-content">
                <h1 className="home-heading">Introduction</h1>
                <p className="home-para">
                    Food and Beverage are inseparable parts of any holiday! Visit our Restaurants to enjoy delicious meals! We offer excellent food with reasonable price and heartwarming services.
                    <br /> <br />
                    Located in the first floor of Song Gia Suites Hotel, Mummas Café is glamour space. We offer a wide range of dishes which are well made by Master Chef, and we will give you a plenty of choices. Guests will be surprised with foods which are almost art and leaves a long and memorable aftertaste
                </p>
            </div>
            <img ref={image} src={imageLink} alt="Intro" className="home-image" />
        </div>
    )
}

export default Intro;