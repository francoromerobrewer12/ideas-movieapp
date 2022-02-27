import React, { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import Image from "next/image";

function MovieCard({ movie, baseUrl }) {
  const [active, setActive] = useState(false);
  const hoverColorBackground = grey[900];

  function handleMouseOver() {
    setActive(true);
  }
  function handleMouseOut() {
    setActive(false);
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        mt: [2, 2, 0],
        alignItems: "center",
        minHeight: 140,
        maxHeight: 160,
        flexGrow: 1,
        textAlign: "center",
        position: "relative",
        borderRadius: 2,
        cursor: "pointer",
        color: "white",
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <img
        src={`${baseUrl}/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      {/* -------- Normal View of the Movie Card --------*/}
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          display: active === true ? "none" : "flex",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={faPlayCircle} size="xl" />
        </CardContent>

        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{movie.title}</Typography>
        </CardContent>
      </CardContent>

      {/* -------- Hovered View of the Movie Card --------*/}
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          display: active === true ? "flex" : "none",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            bgcolor: hoverColorBackground,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faPlayCircle} size="xl" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              {movie.title}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 0.5,
              }}
            >
              <FontAwesomeIcon icon={faStar} size="1x" />
              <Typography variant="h6" sx={{ ml: 2.5 }}>
                {movie.vote_average}
              </Typography>
            </Box>
            <Typography variant="h6">
              {movie.release_date.substring(0, 4)}
            </Typography>
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
