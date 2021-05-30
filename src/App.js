import React, { useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';


const App = () => {

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  const [reciper, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")
 
  console.log(process.env.REACT_APP_API_KEY)


   const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }

  useEffect( () => {
    getRecipes(); 
   
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form"> 
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {reciper.map(item => (
        <Recipe 
        key={item.recipe.label}
        title={item.recipe.label} 
        calories={item.recipe.calories} 
        image={item.recipe.image}
        ingredients={item.recipe.ingredients}
        
        />
      ))}
      
    </div>
    </div>

  );
};

export default App;
