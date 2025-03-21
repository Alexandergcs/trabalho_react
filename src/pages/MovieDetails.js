import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading } = useMovieDetails(id);

  if (loading) return <p>Carregando detalhes...</p>;

  if (!movie || !movie.poster_path) return <p>Filme não encontrado.</p>;

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        onError={(e) => e.target.src = "https://via.placeholder.com/500x750?text=Sem+Imagem"} 
      />
      <p><strong>Data de lançamento:</strong> {movie.release_date || "Não disponível"}</p>
      <p><strong>Nota:</strong> {movie.vote_average ? `${movie.vote_average}/10` : "Sem avaliação"}</p>
      <p>{movie.overview || "Descrição não disponível"}</p>
    </div>
  );
};

export default MovieDetails;
