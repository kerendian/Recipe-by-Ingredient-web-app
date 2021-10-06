import Reader,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const App_ID = 'd3d04757'
  const App_Key ='c8c91d957666b11c4604a2fccc76aebd'

  const [recipes , setRecipes] = useState([]);//recipes is an array, we gonna use recipes.map to map all the objects in the array
  const [search, setSearch] = useState("");
  const [query , setQuery] = useState('banana');



useEffect( () => {
  getRecipes();
}, [query]); // the useEffect only runs when our query changes

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`) //in any external request we will use await
  const data = await response.json(); //formate the data in a way we can easily work with it
  setRecipes(data.hits);// it makes all of the recipes be on the useState above, then we can go over the state and visualize it
  console.log(data.hits);
};
//e is the event, and this function is the action on the event "onChange"
const updateSearch =  e => {
  setSearch(e.target.value); //the value of the input bar on search
}
//update the search only when the search button is clicked
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return(
    
    <div className="App">
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@1,300&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@1,300;1,500&display=swap');
      </style>
      <h1 className = "appTitle">Recipe by Ingredient</h1>
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
       <button className="search-button" type="submit">
         Search
       </button>
     </form>
     <div className="recipes">
     {recipes.map(recipe => (
       <Recipe
          key={recipe.recipe.label}
          title = {recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} //passing down information from the App component to the recipe component
          ingredients={recipe.recipe.ingredients}//this is an array - to show it we gonna have to loop throgh this

      />
     ))}
     </div>
    </div>
  );
};

export default App;
