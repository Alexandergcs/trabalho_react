import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../api";

const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieDetails = async () => {
      if (!id) return;
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
      setLoading(false);
    };

    loadMovieDetails();
  }, [id]);

  return { movie, loading };
};

export default useMovieDetails;
