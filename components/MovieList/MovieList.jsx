import { Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const movies = [
  {
    title: "THE KINGS ARMY",
    year: 2021,
    reviews: 7.2,
  },
  {
    title: "HARRY POTTER",
    year: 2005,
    reviews: 9.7,
  },
  {
    title: "PIXAR ANIMATION",
    year: 2021,
    reviews: 8.5,
  },
  {
    title: "MIAMI BEACH",
    year: 2022,
    reviews: 8.1,
  },
];

function MovieList() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        bgcolor: "red",
      }}
    >
      {movies.map(({ title, year, reviews }) => (
        <MovieCard key={title} title={title} year={year} reviews={reviews} />
      ))}
    </Box>
  );
}

export default MovieList;
