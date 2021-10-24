import './Menu.css';
import Card from '../../components/card/Card';
import Category from '../../components/card/Category';
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
                        <Category title={item.category} />
                        {dishesComp}
                    </>
                )
            })}
        </article>
    )
}

export default Menu;