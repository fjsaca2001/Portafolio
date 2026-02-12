import { Box } from "@mui/material";
import { Project } from "../interfaces/types";

interface GridPhotosProps {
  lstProjects: Project[];
}

const GridProjects = (props: GridPhotosProps) => {
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
      }}
    >
      {lstProjects.map((ProyectClass, index) => (
        <Box
          key={index}
          component="img"
          src={ProyectClass.pathImage}
          alt={`img-${index}`}
          sx={{
            aspectRatio: "1 / 1",
            objectFit: "contain",
            filter: "grayscale(100%)",
            transition: "all 0.3s ease",
            "&:hover": {
              filter: "grayscale(0%)",
              transform: "scale(1.05)",
              zIndex: 1,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default GridProjects;
