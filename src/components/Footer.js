import { Container, Box, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socials = [
  {
    name: "Linkedin",
    url:process.env.REACT_APP_LINKEDIN ,
    icon: <LinkedInIcon sx={{ color: "inherit" }} />,
  },
  {
    name: "Github",
    url:process.env.REACT_APP_GITHUB ,
    icon: <GitHubIcon sx={{ color: "inherit" }} />,
  },
];

const Footer = () => {
  return (
    <Box sx={{ minHeight: "10vh" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            sx={{
              m: 2,
              display: "inline-block",
              py: 1,
              px: 4,
              fontWeight: "bold",
              color: "inherit",
            }}
            href={`mailto:${process.env.REACT_APP_EMAIL}?subject=About website`}
          >
            Email: { process.env.REACT_APP_EMAIL }
          </Link>
          <Box sx={{ display: "flex" }}>
            {socials.map((item) => (
              <Box
                key={item.name}
                px={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  rel="noreferrer"
                  target="_blank"
                  sx={{ textDecoration: "none", color: "white" }}
                  href={item.url}
                >
                  {item.icon}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
