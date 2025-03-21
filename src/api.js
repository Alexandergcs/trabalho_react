const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Buscar filmes populares
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return null;
  }
};

// Buscar detalhes de um filme
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return null;
  }
};
