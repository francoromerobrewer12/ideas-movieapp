import Head from "next/head";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";

import Navbar from "../components/Navbar/Navbar.jsx";
import MovieList from "../components/MovieList/MovieList.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Home() {
  const [topMovie, setTopMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");
  const apiKey = "d1ffffb865607a9bf4e9ba37ee53f9c4";

  useEffect(() => {
    async function getData() {
      try {
        const movies = await (
          await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
          )
        ).data.results;
        const imagesData = await axios.get(
          "https://api.themoviedb.org/3/configuration?api_key=d1ffffb865607a9bf4e9ba37ee53f9c4"
        );
        setBaseUrl(imagesData.data.images.base_url);
        setTopMovie(movies[0]);
        setPopularMovies(movies.slice(1, 5));
        console.log(topMovie);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="app-container">
      <Head>
        <title>Popflix</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container maxWidth="xxl">
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            minHeight: "85vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: ["100%", "100%", "80%"],
              px: 3,
              display: "flex",
              marginTop: ["50px", "50px", 0],
              paddingBottom: ["50px", "100px"],
            }}
          >
            <Box sx={{ alignSelf: "flex-end" }}>
              <Typography variant="h6">POPFLIX ORIGINAL</Typography>
              <Typography variant="h1">{topMovie.title}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row"],
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ px: 5 }}
                  startIcon={<FontAwesomeIcon icon={faPlay} />}
                >
                  WATCH NOW
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  sx={{ px: 5, ml: [0, 2], mt: [2, 0] }}
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                  MY PLAYLIST
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: ["100%", "100%", "20%"],
              minWidth: "300px",
              minHeight: "65vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MovieList popularMovies={popularMovies} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
