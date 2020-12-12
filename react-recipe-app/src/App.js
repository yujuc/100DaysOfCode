import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  // in order to embed the app id and app key, please create a file called ".env"
  // add the value of "REACT_APP_ID" and "REACT_APP_KEY"
  // you can find those keys from edamam recipe API website
  // and run "yarn build" before "yarn start"
  // (environment variables are embedded during building)

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const [recipies, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect( async () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);

    //Alternative way
    // fetch (url)
    // .then(response => {
    //   const data = response.json
    // })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          onChange={updateSearch}
        />
        <button 
          className="search-button" 
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="recipes">
        {recipies.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
