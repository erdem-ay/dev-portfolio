import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import ProjectCard from "./ProjectCard";

const projetcList = [
  {
    id: 1,
    name: "Firebase",
    info: "Firebase Info ",
    Link: "https://github.com/erdem-ay/firebase",
  },
  {
    id: 2,
    name: "Exchange App",
    info: "Exchange App Info",
    Link: "https://github.com/erdem-ay/exchangeApp",
  },
  {
    id: 3,
    name: "Weather App",
    info: "Weather App Info",
    Link: "https://github.com/erdem-ay/weatherApp",
  },
  {
    id: 4,
    name: "News",
    info: "News Info",
    Link: "https://github.com/erdem-ay/News",
  },
  {
    id: 5,
    name: "New Person",
    info: "New Person Info",
    Link: "https://github.com/erdem-ay/NewPersonInfo",
  },
  {
    id: 6,
    name: "Movie App",
    info: "Movie App Info",
    Link: "https://github.com/erdem-ay/NewPersonInfo",
  },
  {
    id: 7,
    name: "County And Car App",
    info: "County And Car App Info",
    Link: "https://github.com/erdem-ay/CountyAndCar",
  },
  {
    id: 8,
    name: "Sign In",
    info: "Sign In Info",
    Link: "https://github.com/erdem-ay/sign-In2",
  },
];

const HomeProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ my: 4, display: "flex", justifyContent: "center" }}
      >
        My Projects
      </Typography>
      <Grid container rowSpacing={1}>
        {projetcList?.map((project) => (
          <Grid item xs={12} md={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;
