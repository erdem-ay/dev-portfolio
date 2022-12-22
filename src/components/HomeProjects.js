import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import ProjectCard from "./ProjectCard";
import blogify from "../assets/blogify.png";

const projetcList = [
  {
    id: 1,
    name: "Firebase",
    info: "Firebase Info ",
    link: "https://github.com/erdem-ay/firebase",
    img: blogify,
  },
  {
    id: 2,
    name: "Exchange App",
    info: "Exchange App Info",
    link: "https://github.com/erdem-ay/exchangeApp",
    img: blogify,
  },
  {
    id: 3,
    name: "Weather App",
    info: "Weather App Info",
    link: "https://github.com/erdem-ay/weatherApp",
    img: blogify,
  },
  {
    id: 4,
    name: "News",
    info: "News Info",
    link: "https://github.com/erdem-ay/News",
    img: blogify,
  },
  {
    id: 5,
    name: "New Person",
    info: "New Person Info",
    link: "https://github.com/erdem-ay/NewPersonInfo",
    img: blogify,
  },
  {
    id: 6,
    name: "Movie App",
    info: "Movie App Info",
    link: "https://github.com/erdem-ay/NewPersonInfo",
    img: blogify,
  },
  {
    id: 7,
    name: "County And Car App",
    info: "County And Car App Info",
    link: "https://github.com/erdem-ay/CountyAndCar",
    img: blogify,
  },
  {
    id: 8,
    name: "Sign In",
    info: "Sign In Info",
    link: "https://github.com/erdem-ay/sign-In2",
    img: blogify,
  },
];

const HomeProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" sx={{ my: 2 }}>
        My Projects
      </Typography>
      <Grid container spacing={6} columns={12}>
        {projetcList?.map((project) => (
          <Grid key={project.id} item xs={12} md={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;
