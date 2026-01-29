import { Box, Typography, IconButton } from "@mui/material";
import FondoHome from "../../public/img/fondoBlack.avif";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${FondoHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Overlay oscuro */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: "text.main" }}>
            FRANK SACA
          </Typography>
          <Typography variant="h5" sx={{ color: "text.main" }}>
            Full Stack Developer - Junior Cybersecurity Analyst
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={() => {
            document
              .getElementById("AboutMe")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{
            color: "white",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-10px)" },
              "60%": { transform: "translateY(-5px)" },
            },
          }}
        >
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Home;
