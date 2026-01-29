import Principal from "../components/ContainerWrapper";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";
import Imagen from "../../public/img/desarrolloamedida01.png";
import Typography from "@mui/material/Typography";

function HomeAux() {
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
          <br />
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "justify" }}
          >
            Soy desarrollador Full Stack radicado en Loja, Ecuador, con
            experiencia en el desarrollo de soluciones tecnológicas, migración
            de sistemas y creación de nuevos módulos. He participado en
            proyectos con distintos enfoques, abarcando tanto backend, frontend,
            como desarrollos full stack, adaptándome a las necesidades de cada
            iniciativa. Mi experiencia profesional se concentra principalmente
            en el sector financiero, área en la que he trabajado desarrollando
            sistemas robustos y orientados a la eficiencia, para empresas
            especializadas en este rubro.
          </Typography>
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
            src={Imagen}
            alt="Mi foto"
            sx={{
              width: 450,
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Principal>
  );
}

export default HomeAux;
