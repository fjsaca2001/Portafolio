import CardPassion from "../components/Passion";
import { Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import SecurityIcon from "@mui/icons-material/Security";

const WhatIDo = () => {
  return (
    <Box
      sx={{
        display: "grid",
        backgroundColor: "#b8b8b8",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 1,
          margin:"10px 0px"
        }}
      >
        <CardPassion
          icon={<CodeIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
          title="Back End"
          text="Experiencia en desarrollo backend utilizando C# con .NET Core para la construcción de APIs y servicios RESTful. Manejo de bases de datos relacionales como SQL Server, Sybase y PostgreSQL, incluyendo modelado, consultas avanzadas y optimización de rendimiento. Uso de Entity Framework y LINQ para el acceso y manipulación eficiente de datos. Implementación de mecanismos de seguridad mediante autenticación JWT y Basic Authentication, así como cifrado asimétrico con RSA para garantizar la confidencialidad e integridad de la información."
        />
        <CardPassion
          icon={<DesktopMacIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
          title="Front End"
          text="Desarrollador Frontend Junior con experiencia en la construcción de interfaces web modernas utilizando Vue.js integrado en soluciones ASP.NET, participando en la mejora progresiva de aplicaciones tradicionales mediante componentes interactivos. Experiencia inicial en el desarrollo de aplicaciones SPA con React y TypeScript, aplicando principios básicos de componentización, tipado estático y consumo de APIs REST. Enfocado en escribir código mantenible, reutilizable y alineado a buenas prácticas de desarrollo frontend."
        />
        <CardPassion
          icon={<SecurityIcon sx={{ fontSize: 40, color: "#FFFF" }} />}
          title="Ciberseguridad"
          text="Experiencia inicial en análisis de malware y fundamentos de ingeniería inversa, utilizando herramientas como x32dbg y Detect It Easy (DIE) para la inspección estática y dinámica de ejecutables. Identificación de posibles vectores de ataque, dependencias sospechosas y comportamientos asociados a solicitudes de permisos no acordes con la funcionalidad declarada de la aplicación."
        />
      </Box>
    </Box>
  );
};

export default WhatIDo;
