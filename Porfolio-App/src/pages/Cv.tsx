import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button } from "@mui/material";

const Cv = () => {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ maxWidth: 800 }}>
        <Button variant="contained" endIcon={<DownloadIcon />} sx={{ mt: 4 }}>
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};

export default Cv;
