// MovieDatabase.js

import React, { useState } from 'react';
import './App.css';

const MovieDatabase = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', year: '', rating: '' });
  const [editIndex, setEditIndex] = useState(null);

  const addMovie = () => {
    if (newMovie.title && newMovie.year && newMovie.rating) {
      if (editIndex !== null) {
        // Edit existing movie
        const updatedMovies = [...movies];
        updatedMovies[editIndex] = newMovie;
        setMovies(updatedMovies);
        setEditIndex(null);
      } else {
        // Add new movie
        setMovies([...movies, newMovie]);
      }
      // Reset the form
      setNewMovie({ title: '', year: '', rating: '' });
    }
  };

  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  const editMovie = (index) => {
    const movieToEdit = movies[index];
    setNewMovie({ ...movieToEdit });
    setEditIndex(index);
  };

  return (
    <div className="movie-database">
      <h1>Movie Database</h1>
      <div className="movie-form">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index}>
            <span>{movie.title} ({movie.year}) - Rating: {movie.rating}</span>
            <button onClick={() => editMovie(index)}>Edit</button>
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDatabase;
