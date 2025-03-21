import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieDetails = async () => {
      if (!id) return;

      try {
        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        const data = await response.json();

        if (data && !data.status_code) {
          setMovie(data);
        } else {
          setMovie(null); // Se a API retornar erro, mantém movie como null
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  return { movie, loading };
};

export default useMovieDetails;
