import React, { createContext, useState, useEffect } from "react";
import { fetchPopularMovies } from "../api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
      setLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};