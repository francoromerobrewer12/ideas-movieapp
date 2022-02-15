import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";

function MovieCard() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        alignItems: "center",
        height: 200,
        flexGrow: 1,
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
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
          <Typography variant="h6">THE KINGS ARMY</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
