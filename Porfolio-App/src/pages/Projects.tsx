import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Projects = (/*props: Props*/) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#b8b8b8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>

        <Typography color="text.secondary" lineHeight={1.7}>
          Soy desarrollador Full Stack con experiencia en el sector
          financiero...
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;
