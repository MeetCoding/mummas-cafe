import { useState } from 'react';
import Option from './Option';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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

    const cardImageStyle = { backgroundImage: `url(${props.img})` }

    return (
        <section className="card">
            <div style={cardImageStyle} className="card-image">
                <div className="card-image-shadow"></div>
                <h1 className="card-name">{props.name}</h1>
            </div>
            <div className="card-content">
                {props.size && loadSizes()}
                {props.extras && loadExtras()}
                {(!props.extra && !props.size) &&
                    <p className='card-para'>{props.desc}</p>
                }
                <button className="addToCart">
                    Add to Cart
                    <ShoppingCartIcon className='cart-icon' />
                </button>
            </div>
        </section>
    )
}

export default Card;