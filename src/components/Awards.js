import { useRef } from "react";
import useFadeEffect from "../hooks/useFadeEffect";

const imageLink = 'https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg';

const Awards = () => {

    const awards = useRef(null);
    useFadeEffect(awards);

    const image = useRef(null);
    useFadeEffect(image);

    return (
        <section ref={awards} className="home-block">
            <div className="home-content">
                <h1 className="home-heading">Our Awards</h1>
                <ul className="home-list">
                    {awardList.map(goal => (
                        <Award title={goal.title} content={goal.content} />
                    ))}
                </ul>
            </div>
            <img ref={image} src={imageLink} alt="Goals" className="home-image" />
        </section>
    )
}

export default Awards;

const Award = ({ title, content }) => {

    const award = useRef(null);
    useFadeEffect(award);

    return (
        <li ref={award} className="home-list-item">
            <strong>{title}:</strong>
            {content}
        </li>
    )
}

const awardList = [
    {
        title: 'Best American/American style diner in India',
        content: 'This category recognises the best American Style diner known for its dining experience, customer service and imagination in menu creation and ambience'
    },
    {
        title: 'Best Regional Vegetarian Restaurant of the Year',
        content: 'This category recognises the best vegetarian restaurant for its dining experience, customer service and imagination in menu creation and ambience'
    },
    {
        title: 'Best National/Regional Chinese Restaurant of the Year',
        content: 'This award goes to the Chinese restaurants across Northern, Southern, Eastern, Western and Central regions of India that show a drive to influence and shape the future of chinese cuisine.'
    }
]