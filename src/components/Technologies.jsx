import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { DiMaterializecss } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { CgEricsson } from "react-icons/cg";
import { BsFillBootstrapFill } from "react-icons/bs";

const techs = [
  {
    id: 1,
    name: "Javascript",
    level: "Advanced",
    percentage: 80,
    icon: <IoLogoJavascript fontSize="large" />,
  },
  {
    id: 2,
    name: "ReactJS",
    level: "Advanced",
    percentage: 80,
    icon: <RiReactjsLine fontSize="large" />,
  },
  {
    id: 3,
    name: "HTML",
    level: "Advanced",
    percentage: 80,
    icon: <ImHtmlFive2 fontSize="large" />,
  },
  {
    id: 4,
    name: "CSS",
    level: "Advanced",
    percentage: 80,
    icon: <DiCss3 fontSize="large" />,
  },
  {
    id: 5,
    name: "Material UI",
    level: "Advanced",
    percentage: 80,
    icon: <DiMaterializecss fontSize="large" />,
  },
  {
    id: 6,
    name: "Git",
    level: "Regular",
    percentage: 60,
    icon: <BiGitBranch fontSize="large" />,
  },
  {
    id: 7,
    name: "GitHub",
    level: "Regular",
    percentage: 60,
    icon: <AiOutlineGithub fontSize="large" />,
  },
];

const additionaltechs = [
  { id: 1, name: "TailwindCSS", icon: <SiTailwindcss fontSize="large" /> },
  { id: 2, name: "SCSS", icon: <CgEricsson fontSize="large" /> },
  { id: 3, name: "Bootstrap", icon: <BsFillBootstrapFill fontSize="large" /> },
];

const Technologies = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 12,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: "#162950",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      background:
        "linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)",
    },
  }));
  return (
    <Box maxWidth="md" sx={{ margin: "auto" }}>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        Technologies
      </Typography>
      <Box sx={{ mt: 10, maxWidth: "90%", margin: "auto" }}>
        {techs.map((item) => (
          <Box key={item.id} my={2}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "20px" }}>{item.icon}</Box>
                <Typography sx={{ ml: 2 }} variant="h5">
                  {item.name}
                </Typography>
              </Box>
              <Typography>{item.level}</Typography>
            </Box>
            <BorderLinearProgress
              variant="determinate"
              value={item.percentage}
            />
          </Box>
        ))}
      </Box>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        Additional technologies and skills
      </Typography>
      <Box sx={{ mt: 10, maxWidth: "90%", margin: "auto" }}>
        <Grid
          container
          sx={{ my: 2, mx: 2 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {additionaltechs.map((item) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "28px" }}>{item.icon}</Box>
              <Typography>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Technologies;
