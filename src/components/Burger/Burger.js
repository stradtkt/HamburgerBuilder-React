import React from 'react';
import Classes from '../Burger/Burger.css';
import BurgerIngredient from './burger-ingredients/BurgerIngredients';

const Burger = (props) => {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default Burger;