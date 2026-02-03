import CardPassion from "../components/Passion";
import { Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import SecurityIcon from "@mui/icons-material/Security";

const WhatIDo = (/*props: Props*/) => {
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
      <Box sx={{ maxWidth: "95%" }}>
        <Box sx={{ display: "flex", alignContent: "center", gap: 4 }}>
          <CardPassion
            icon={<DesktopMacIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
            title="Front End"
            text="Con una sólida base en informática, me apasiona el diseño y desarrollo web, y me interesa el desarrollo de aplicaciones móviles. A medida que crezca como desarrollador, espero escribir código limpio y legible que otros puedan usar y aprovechar para crear un software bonito."
          />
          <CardPassion
            icon={<CodeIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
            title="Back End"
            text="El diseño no es solo lo que un producto parece y se siente por fuera. El diseño abarca la funcionalidad interna de un producto así como la experiencia global del usuario. Me esfuerzo por diseñar interfaces y experiencias que la gente pueda disfrutar en todos los medios digitales."
          />
          <CardPassion
            icon={<SecurityIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
            title="Ciberseguridad"
            text="En Northeastern, actualmente soy la web chair de nuWiT (NU Women in Tech) y asistente de enseñanza en el curso de HCI de grado. Anteriormente, he estado involucrado en el equipo de waterpolo del club, la asociación de estudiantes residentes y el club de esquí y snowboard."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhatIDo;
