import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Movie from './Movie';
import listOfMovies from './data.json';



const App = () => {
  const movies = listOfMovies.movies
  let list = movies.map((data) => {
    return (
      <div>
        <Sidebar name={data.title} picture={data.poster} />
        <Movie name={data.title} picture={data.hero_image} charac={data.main_characters} content={data.description} />
      </div>
      )
  })
  return (
    <div>
    <Header />
      <div>
      {list}
      </div>
    </div>
  );
}

export default App;
