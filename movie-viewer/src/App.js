import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Movie from './Movie'

function App() {

  return (
    <div>
    <Header />
      <div>
      <Sidebar />
      <Movie />
      </div>
    </div>
  );
}

export default App;
