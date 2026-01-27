import Principal from "../components/ContainerWrapper";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";
import ImagenProfile from "../../public/img/Photo.jpeg";

function Home() {
  return (
    <Principal maxWidth="90%" padding="40px">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // columnas en mobile -> filas en desktop
          gap: 4, // espacio entre columnas
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>HOLA, SOY FRANK!</h1>
          <h1>FULL STACK DEVELOPER</h1>
          <br />
          <p>
            Ingeniero en Ciencias de la Computación con 3 años de experiencia en
            desarrollo de software y análisis de ciberseguridad. Experto en
            bases de datos relacionales y no relacionales (Sybase, SQL Server,
            PostgreSQL, MongoDB) y en lenguajes como C#, Python y JavaScript.
            Manejo de frameworks como .NET Framework, .NET Core y Django.
          </p>
          <br />
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Descargar CV
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={ImagenProfile}
            alt="Mi foto"
            sx={{
              width: 300,
              height: 350,
              borderRadius: "25%",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0, 3, 170, 0.5)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 30px rgba(0, 3, 170, 0.5)",
              },
            }}
          />
        </Box>
      </Box>
    </Principal>
  );
}

export default Home;
