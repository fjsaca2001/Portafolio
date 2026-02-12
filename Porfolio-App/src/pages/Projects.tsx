import { Box } from "@mui/material";
import GridProjects from "../components/GridProjects";
import { Project } from "../interfaces/types";
import Photo from "../../public/img/FacesLogo.png";

const projects: Project[] = [
  {
    pathImage: Photo,
    tittle: "Proyecto 1",
    code: "React + MUI",
  },
  {
    pathImage: Photo,
    tittle: "Proyecto 2",
    code: "Node + Express",
  },
  {
    pathImage: Photo,
    tittle: "Proyecto 2",
    code: "Node + Express",
  },
  {
    pathImage: Photo,
    tittle: "Proyecto 2",
    code: "Node + Express",
  },
  {
    pathImage: Photo,
    tittle: "Proyecto 2",
    code: "Node + Express",
  },
  {
    pathImage: Photo,
    tittle: "Proyecto 2",
    code: "Node + Express",
  },
];

const Projects = (/*props: Props*/) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <GridProjects lstProjects={projects} />
      </Box>
    </Box>
  );
};

export default Projects;
