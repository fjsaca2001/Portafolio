import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "15vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          Footer
        </Typography>

        <Typography color="text.secondary" lineHeight={1.7}>
          Soy desarrollador Full Stack con experiencia en el sector
          financiero...
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
