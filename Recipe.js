import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, calories, image , ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1> 
            <ul className = {style.ingre}>
                {ingredients.map(ing => (
                    <li>{ing.text}</li>
                ))}    
            </ul> 
           
            <img className={style.image} src={image} alt="" />
            <p className = {style.calo}>calories: {Math.round(calories)}</p>
        </div>
    );
};

export default Recipe;