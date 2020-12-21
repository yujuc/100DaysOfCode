import './App.css';
import React, { Component } from 'react';
import MovieRow from './MovieRow';
import $ from 'jquery'

const API_key = process.env.REACT_APP_MOVIE_KEY
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movieRows: []
    }
  }

  performSearch (searchTerm) {
    console.log(this.API_key);
    
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_key}`;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0]);

        var movieRows = []

        results.forEach((movie)=>{
          // console.log(movie.title)
          if (movie.poster_path) {
              movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          } else {
              movie.poster_src = "tokusatsu_kaiju_blue.png"
          }
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        })

        this.setState({movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler (event) {
    // console.log(event.target.value)
    const searchTerm = event.target.value;
    const boundObject = this
    boundObject.performSearch(searchTerm)
  }
  
  render() { 
    return ( 
      <div className="App">
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="eiga_kachinko.png" />
            </td>
            <td width="8" />
            <td>
              <h1>MovieDB search</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input 
        className="searchBar" 
        placeholder="Enter search term" 
        onChange={this.searchChangeHandler.bind(this)}
      />

      {this.state.movieRows}
      
    </div>

     );
  }
}
 
export default App;