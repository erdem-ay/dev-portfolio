import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import GradientLinkButton from "./GradientLinkButton";

const ProjectCard = ({ project, bg }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#1A2027",
        color: "white",
        p: 2,
        borderRadius: "20px 0px",
        m: 1,
        boxShadow:
          "0px 3px 1px -2px white,0px 2px 2px 0px white,0px 1px 5px 0px white",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          letterSpacing: "1px",
          m: "18px 0px",
          textDecoration: "underline",
          textDecorationColor: "skyblue",
          textDecorationStyle: "unset",
          color: "#BCBCBC",
        }}
      >
        {project.name}
      </Typography>
      <Typography variant="body2">{project.info}</Typography>
      <GradientLinkButton
        bg="linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)"
        link={project.Link}
      >
        Look it up
      </GradientLinkButton>
    </Paper>
  );
};

export default ProjectCard;
