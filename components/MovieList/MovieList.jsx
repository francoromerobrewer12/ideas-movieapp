import { Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({ popularMovies }) {
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
      {popularMovies.map(({ id, title, release_date, vote_average }) => (
        <MovieCard
          key={id}
          title={title}
          year={release_date}
          reviews={vote_average}
        />
      ))}
    </Box>
  );
}

export default MovieList;
