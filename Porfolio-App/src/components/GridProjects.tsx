import { Box } from "@mui/material";
import { Project } from "../interfaces/types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DetailProject from "./DetailProject";

interface GridPhotosProps {
  lstProjects: Project[];
}

const GridProjects = (props: GridPhotosProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lstProjects } = props;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 1,
        width: "80%",
      }}
    >
      {lstProjects.map((project) => (
        <Box
          onClick={() => setSelectedProject(project)}
          key={project.cod}
          sx={{
            position: "relative",
            aspectRatio: "19 / 13",
            width: "90%",
            margin: "auto",
            overflow: "hidden",
            "&:hover .overlay": {
              opacity: 1,
              transform: "translateY(0)",
              transition: "all .5s ease",
            },
            "&:hover img": {
              transform: "scale(1.08)",
              filter: "brightness(0.7)",
            },
            "&:hover": {
              boxShadow: 6,
            },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 2,
          }}
        >
          <Box
            component="img"
            src={project.pathImage}
            alt={`img-${project.cod}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 0.3s ease",
            }}
          />

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.6)",
              opacity: { xs: 1, sm: 0, md: 0 },
              transform: { sm: "translateY(10px)", md: "translateY(10px)" },
              transition: "opacity 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <RemoveRedEyeIcon sx={{ fontSize: 40, color: "white" }} />
            <Typography variant="h6" sx={{ color: "white" }}>
              {project.tittle}
            </Typography>
          </Box>
        </Box>
      ))}
      <DetailProject
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
};

export default GridProjects;
