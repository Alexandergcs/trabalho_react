import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading } = useMovieDetails(id);

  if (loading) return <p>Carregando detalhes...</p>;

  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
      <p><strong>Nota:</strong> {movie.vote_average}/10</p>
    </div>
  );
};

export default MovieDetails;
