import { useState } from 'react';
import Option from './Option';
import './Card.css';

const Card = props => {

    const [size, setSize] = useState(props.size ? props.size[0] : null)
    const [extras, _setExtras] = useState(props.extras ? [] : null);

    function setExtras(extra) {
        const newExtras = [...extras];
        if (newExtras.includes(extra)) {
            let extraIndex = newExtras.indexOf(extra);
            newExtras.splice(extraIndex, 1);
        }
        else newExtras.push(extra);
        _setExtras(newExtras);
    }

    function loadSizes() {
        const sizeComp = props.size.map(sizeOpt => (
            <Option
                name={sizeOpt}
                type='size'
                setSize={setSize}
                isSelected={size === sizeOpt}
            />
        ))
        return (
            <div className="options">
                <h2 className="options-label">Size:</h2>
                {sizeComp}
            </div>
        )
    }

    function loadExtras() {
        const extrasComp = props.extras.map(extraOpt => (
            <Option
                name={extraOpt}
                type='extras'
                setExtras={setExtras}
                isSelected={extras.includes(extraOpt)}
            />
        ))
        return (
            <div className="options">
                <h2 className="options-label">Extras:</h2>
                {extrasComp}
            </div>
        )
    }

    return (
        <section className="card">
            <img src={props.img} alt="Card" className="card-image" />
            <h1 className="card-name">{props.name}</h1>
            {props.size && loadSizes()}
            {props.extras && loadExtras()}
            <button className="addToCart">Add to Cart</button>
        </section>
    )
}

export default Card;