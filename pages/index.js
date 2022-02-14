import Head from "next/head";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Popflix</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Typography variant="h1" component="div" gutterBottom>
        Welcome
      </Typography>
    </div>
  );
}
