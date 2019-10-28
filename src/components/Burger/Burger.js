import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredient from './burger-ingredients/BurgerIngredients';

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default Burger;