//import Card from "../components/Card";
import { Box, Typography, CardMedia } from "@mui/material";
import LogoCoop from "../../public/img/CoopLogo.png";
import LogoFaces from "../../public/img/FacesLogo.png";
import Clogo from "../../public/img/logos/clogo.webp";
import Netlogo from "../../public/img/logos/netlogo.png";
import Djangologo from "../../public/img/logos/djangologo.png";
import Jslogo from "../../public/img/logos/jslogo.svg";
import Mongologo from "../../public/img/logos/mongologo.webp";
import Postgreslogo from "../../public/img/logos/postgresqllogo.png";
import Pythonlogo from "../../public/img/logos/pythonlogo.svg";
import SqlServerlogo from "../../public/img/logos/sqlserverlogo.png";
import BurpSuitelogo from "../../public/img/logos/BurpSuiteLogo.png";
import DetectItEasylogo from "../../public/img/logos/DetectItEasyLogo.svg";
import DevExpresslogo from "../../public/img/logos/DevExpresLogo.png";
import Dockerlogo from "../../public/img/logos/DockerLogo.png";
import EntityFrameworklogo from "../../public/img/logos/entityFrameworkLogo.png";
import FireBaselogo from "../../public/img/logos/FireBaseLogo.png";
import GitHublogo from "../../public/img/logos/GitHubLogo.svg";
import GitLablogo from "../../public/img/logos/GitLabLogo.png";
import Jenkinslogo from "../../public/img/logos/JenkinsLogo.png";
import Linuxlogo from "../../public/img/logos/LinuxLogo.webp";
import NMaplogo from "../../public/img/logos/NmapLogo.png";
import PostManlogo from "../../public/img/logos/PostmanLogo.svg";
import VSlogo from "../../public/img/logos/VSLogo.png";
import Vuelogo from "../../public/img/logos/VueLogo.png";
import WireSharlogo from "../../public/img/logos/WiresharkLogo.png";
import Sybaselogo from "../../public/img/logos/sybaselogo.png";
import GridPhotos from "../components/GridPhotos";

const Skills = (/*props: Props*/) => {
  const lstImages = [
    Clogo,
    Netlogo,
    Djangologo,
    Jslogo,
    Mongologo,
    Postgreslogo,
    Pythonlogo,
    SqlServerlogo,
    BurpSuitelogo,
    DetectItEasylogo,
    DevExpresslogo,
    Dockerlogo,
    EntityFrameworklogo,
    FireBaselogo,
    GitHublogo,
    GitLablogo,
    Jenkinslogo,
    Linuxlogo,
    NMaplogo,
    PostManlogo,
    VSlogo,
    Vuelogo,
    WireSharlogo,
    Sybaselogo,
  ];
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#FAFAFA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ maxWidth: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box sx={{ width: "50%", display: "flex", justifyContent: "start" }}>
            <Box sx={{ width: "80%" }}>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                Tecnologías y Herramientas
              </Typography>
              <GridPhotos lstImagenes={lstImages} />
            </Box>
          </Box>
          <Box sx={{ width: "35%", display: "flex", justifyContent: "start" }}>
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{ color: "text.secondary", textAlign: "start" }}
              >
                Empresas en las que he trabajado{" "}
              </Typography>
              <CardMedia
                component="img"
                alt="Institute"
                image={LogoFaces}
                sx={{
                  height: 80,
                  objectFit: "contain",
                  marginTop: "20px",
                }}
              />
              <Typography gutterBottom variant="subtitle1" component="div">
                Fundación de Apoyo Social y Economico del Ecuador
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Técnico de Desarrollo | Jun 2025 - Actualidad
              </Typography>
              <br />
              <CardMedia
                component="img"
                alt="Institute"
                image={LogoCoop}
                sx={{
                  height: 80,
                  objectFit: "contain",
                  marginTop: "20px",
                }}
              />
              <Typography gutterBottom variant="subtitle1" component="div">
                Cooperativa de Ahorro y Crédito Manuel Estevan Godoy Ortega
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Desarrollador de Sistemas | Jun 2023 - May 2025
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
