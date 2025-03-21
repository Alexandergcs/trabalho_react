import React from "react";
import { Link } from "react-router-dom";

const Home = ({ movies, loading }) => {
  if (loading) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1>Filmes Populares</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>Nenhum filme encontrado.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
