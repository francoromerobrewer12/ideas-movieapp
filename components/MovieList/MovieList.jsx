import { Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({ popularMovies, baseUrl }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: ["90%", "60%", "100%"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} baseUrl={baseUrl} />
      ))}
    </Box>
  );
}

export default MovieList;
