import { useRef } from "react";
import useFadeEffect from "../hooks/useFadeEffect";

const imageLink = 'https://www.holidify.com/images/cmsuploads/compressed/67650276_1541885352615705_8557314319681847296_o_20191219164152.jpg';

const Goals = () => {

    const goals = useRef(null);
    useFadeEffect(goals);

    const image = useRef(null);
    useFadeEffect(image);

    return (
        <div ref={goals} className="home-block">
            <div className="home-content">
                <h1 className="home-heading">Our Goals</h1>
                <ul className="home-list">
                    {goalList.map(goal => (
                        <Goal title={goal.title} content={goal.content} />
                    ))}
                </ul>
            </div>
            <img ref={image} src={imageLink} alt="Goals" className="home-image" />
        </div>
    )
}

export default Goals;

const Goal = ({ title, content }) => {

    const goal = useRef(null);
    useFadeEffect(goal);

    return (
        <li ref={goal} className="home-list-item">
            <strong>{title}:</strong>
            {content}
        </li>
    )
}

const goalList = [
    {
        title: 'Health',
        content: 'healthy food is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer'
    },
    {
        title: 'Hygiene',
        content: 'hygiene lowers your risk for diseases and illnesses commonly spread through viruses and bacteria'
    },
    {
        title: 'Taste',
        content: 'who doesn\'t like tasty food after all?'
    }
]