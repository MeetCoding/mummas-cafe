import './Menu.css';
import Card from '../../components/card/Card';
import MenuBook from './../../MenuBook.json';

const Menu = () => {

    const mapDishes = dishes => {
        return dishes.map(dish => <Card {...dish} />)
    }

    return (
        <article className="menu">
            {MenuBook.items.map(item => {
                const dishesComp = mapDishes(item.dishes);
                return (
                    <>
                        <h1 className="category">{item.category}</h1>
                        {dishesComp}
                    </>
                )
            })}
        </article>
    )
}

export default Menu;