import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import FondoHome from "../../public/img/FondoOfice2.jpg";

const Cv = () => {
  return (
    <Box
      sx={{
        height: "40vh",
        width: "100%",
        backgroundImage: `url(${FondoHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: {xs:"90%"},
          display: "flex",
          alignContent: "center",
          alignItems:"center",
          margin:"auto",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#F5F5F5",
            textAlign: "center",
            fontFamily: "Google Sans Flex",
          }}
        >
          ¡Mira mi currículum!
        </Typography>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          component="a"
          href="../../public/docs/CV.pdf"
          download
          sx={{
            mt: 4,
            background: "rgba(0, 0, 0, 0.10)",
            color: "#ffffff",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(0, 0, 0, 0.9)",
            borderRadius: "30px",
            px: 4,
            py: 1.3,
            fontWeight: 600,
            alignContent: "center",
            letterSpacing: "0.05em",
            "&:hover": {
              boxShadow: ` 0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6) `,
              transform: "translateY(-5px)",
            },
            width:"250px"
          }}
        >
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};

export default Cv;
