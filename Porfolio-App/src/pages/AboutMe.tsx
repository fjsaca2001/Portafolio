import { autocompleteClasses, Box } from "@mui/material";
import Card from "../components/Card";
import logoUtpl from "../../public/img/utpl2.png";
import logoUide from "../../public/img/logo-uide.webp";
import Typography from "@mui/material/Typography";
import ImagenProfile from "../../public/img/Photo.jpeg";

function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box
        sx={{
          width: {xs: "90%", sm:"75%", md:"60%"},
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            sm: "repeat(2,2fr)",
            md: "repeat(2,2fr)",
          },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            margin: "20px auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src={ImagenProfile}
            alt="Mi foto"
            sx={{
              width: { xs: 120, sm: 140, md: 150 },
              height: { xs: 120, sm: 140, md: 150 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "justify",
              margin: "20px 0",
              fontFamily: "Google Sans Flex",
            }}
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
        </Box>
        <Box
          sx={{
            margin: "auto",
            width: "90%",
          }}
        >
          <Card
            pathImage={logoUide}
            text="Magister En Ciberseguridad"
            title="Universidad Internacional del Ecuador"
          />
          <Card
            pathImage={logoUtpl}
            text="Ingeniero En Ciencias De La Computación"
            title="Universidad Técnica Particular de Loja"
          />
        </Box>
      </Box>
    </Box>
  );
}
export default AboutMe;
