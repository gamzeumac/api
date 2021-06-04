import React, { useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';
import png from './images/cook-book.png'


const App = () => {

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  const [reciper, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")



   const getRecipes = async() => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);


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
      <div className="d-flex justify-cotent-center align-items-center mylogo w-100 p-5"><img src={png} alt="" className="mylogo"/></div>
      
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
