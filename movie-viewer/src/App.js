import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Movie from './Movie';
import listOfMovies from './data.json';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const movies = listOfMovies.movies
    return (
        <div>
        <Header />
        <Routes>
          <Route path='/' element={<div className="grid-container">
            <Sidebar data={movies}/>
            <Movie  data={movies}/>
          </div>} />
         <Route path='/:title' element={<div className="grid-container">
            <Sidebar data={movies}/>
            <Movie  data={movies}/>
          </div>} />
        </Routes>
        </div>
        
    )
      
}

export default App;
