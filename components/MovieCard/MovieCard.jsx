import React, { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";

function MovieCard({ title, reviews, year }) {
  const [active, setActive] = useState(false);

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
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
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
          <Typography variant="h6">{title}</Typography>
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
              {title}
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
                {reviews}
              </Typography>
            </Box>
            <Typography variant="h6">{year.substring(0, 4)}</Typography>
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
