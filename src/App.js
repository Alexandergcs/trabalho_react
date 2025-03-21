import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import "./styles/global.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;  // 🔹 Agora usa a variável de ambiente
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = () => {
    if (!API_KEY) {
      console.error("⚠ API Key não encontrada! Verifique o arquivo .env");
      return;
    }

    setLoading(true);
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar filmes populares:", error));
  };

  const searchMovies = (query) => {
    if (!API_KEY) {
      console.error("⚠ API Key não encontrada! Verifique o arquivo .env");
      return;
    }

    if (!query.trim()) {
      fetchPopularMovies(); // Se o campo for apagado, volta aos filmes populares
      return;
    }

    setLoading(true);
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar filmes:", error));
  };

  return (
    <MovieProvider>
      <Router>
        <Navbar onSearch={searchMovies} />
        <Routes>
          <Route path="/" element={<Home movies={movies} loading={loading} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
