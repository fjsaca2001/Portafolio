import { autocompleteClasses, Box } from "@mui/material";
import GridProjects from "../components/GridProjects";
import { Project } from "../interfaces/types";
import P1 from "../../public/img/project/P1.png";
import P2 from "../../public/img/project/P2.png";
import P3 from "../../public/img/project/P3.png";
import P4 from "../../public/img/project/P4.png";
import P5 from "../../public/img/project/P5.png";
import P6 from "../../public/img/project/P6.png";

const projects: Project[] = [
  {
    pathImage: P1,
    tittle: "Modernización y Optimización del Sistema de Créditos",
    code: "P1",
    description: "Participé en la migración y modernización del sistema de créditos institucional, rediseñando el flujo de las diferentes etapas del proceso crediticio para mejorar la mantenibilidad, escalabilidad y eficiencia operativa. La solución fue desarrollada bajo principios de Arquitectura Hexagonal y basada en componentes, permitiendo una mejor separación de responsabilidades e integración con otros sistemas de la organización.",
    tecnologias : [".NET Core", "C#", "PostgreSQL", "Sybase", "React", "TypeScript", "Redux", "JWT Authentication", "Docker", "Jenkins", " N8N"],
    responsabilidades : [
      "Migración de funcionalidades críticas del sistema legado hacia una plataforma moderna.",
      "Optimización de los flujos de gestión y seguimiento de créditos.",
      "Desarrollo de APIs y servicios de negocio bajo Arquitectura Hexagonal.",
      "Implementación de autenticación y autorización mediante JWT.",
      "Integración de procesos automatizados utilizando N8N.",
      "Participación en despliegues automatizados y procesos de integración continua."],
    arquitectura : "Arquitectura Hexagonal, Arquitectura basada en Componentes"
  },
  {
    pathImage: P2,
    tittle: "Implementación de Ventanillas Compartidas para Recaudación",
    code: "P2",
    description: "Participé en el diseño y desarrollo de una API REST orientada a la integración con proveedores externos para la consulta y procesamiento de depósitos monetarios. La solución fue construida bajo Arquitectura Hexagonal, garantizando desacoplamiento entre la lógica de negocio y las integraciones externas, facilitando la mantenibilidad y escalabilidad de la plataforma.",
    tecnologias : [".NET Core", "C#", "PostgreSQL", "Sybase", "JWT Authentication", "RSA Cryptography", "Docker", "Jenkins"],
    responsabilidades : [
      "Diseño y desarrollo de servicios REST para consulta y procesamiento de depósitos.",
      "Integración con plataformas y servicios de proveedores externos.",
      "Implementación de mecanismos de autenticación mediante JWT.",
      "Aplicación de algoritmos criptográficos RSA para el intercambio seguro de información.",
      "Desarrollo de lógica de negocio desacoplada utilizando Arquitectura Hexagonal.",
      "Participación en procesos de integración y despliegue continuo."],
    arquitectura : "Arquitectura Hexagonal"
  },
  {
    pathImage: P3,
    tittle: "Centralización de Gestión de Talento Humano en el Core Financiero",
    code: "P3",
    description: "Participé en la integración y migración del módulo de permisos y vacaciones hacia el Core Financiero institucional, consolidando procesos que anteriormente operaban en sistemas satélites. Esta iniciativa permitió centralizar la gestión del talento humano, mejorar la trazabilidad de las solicitudes y optimizar la administración de la información dentro de una única plataforma corporativa.",
    tecnologias : ["C#", ".NET Framework", ".NET Core", "SQL Server", "Entity Framework", "React", "DevExpress"],
    responsabilidades : ["Integración del módulo de permisos y vacaciones al Core Financiero.",
      "Migración de funcionalidades y datos desde sistemas satélites.",
      "Desarrollo y mantenimiento de componentes backend y frontend.",
      "Implementación de reglas de negocio para la gestión de solicitudes, aprobaciones y control de saldos.",
      "Optimización de consultas y procesos relacionados con la gestión de talento humano.",
      "Participación en pruebas, despliegues y soporte durante la transición al nuevo sistema."],
    arquitectura : "MVC (Model-View-Controller), Arquitectura en Capas"
  },
  {
    pathImage: P4,
    tittle: "Integración de Reporte de Siniestros mediante API",
    code: "P4",
    description: "Participé en el diseño y desarrollo de un Web Service para la gestión de reportes de siniestros y la validación de cobertura del seguro de desgravamen, permitiendo la integración segura y eficiente entre sistemas internos y entidades externas. La solución fue implementada bajo Arquitectura Hexagonal para garantizar un bajo acoplamiento, facilidad de mantenimiento y escalabilidad.",
    tecnologias : ["C#", ".NET Core", "SQL Server", "Entity Framework", "REST API", "JWT Authentication", "Postman"],
    responsabilidades : ["Diseño y desarrollo de servicios REST para el reporte de siniestros.",
      "Implementación de funcionalidades para la validación de seguros de desgravamen.",
      "Desarrollo de reglas de negocio para la gestión y consulta de información.",
      "Implementación de mecanismos de autenticación y autorización mediante JWT.",
      "Integración con sistemas externos para el intercambio de información.",
      "Pruebas y validación de servicios utilizando Postman."],
    arquitectura : "Arquitectura Hexagonal"
  },
  {
    pathImage: P5,
    tittle: "Evolución y Soporte del Core Financiero",
    code: "P5",
    description: "Participé en el mantenimiento, soporte y evolución de diversas aplicaciones internas de la organización, asegurando la continuidad operativa de los procesos de negocio y la estabilidad de los sistemas productivos. Las actividades incluyeron la corrección de incidencias, implementación de mejoras funcionales, optimización de procesos y adaptación de componentes a nuevos requerimientos institucionales.",
    tecnologias : ["C#", ".NET Core", ".NET Framework", "PostgreSQL", "Sybase"],
    responsabilidades : ["Análisis y resolución de incidencias reportadas por usuarios y áreas de negocio.",
      "Desarrollo de mejoras funcionales y técnicas en aplicaciones existentes.",
      "Optimización de consultas y procesos para mejorar el rendimiento de los sistemas.",
      "Implementación de nuevos requerimientos y ajustes normativos.",
      "Soporte a sistemas en ambientes de desarrollo, pruebas y producción.",
      "Participación en análisis de impacto, pruebas y despliegues de nuevas versiones."],
    arquitectura : "Arquitectura en Capas"
  },
  {
    pathImage: P6,
    tittle: "Integración de Grandes Contribuyentes con el SRI",
    code: "P6",
    description: "Desarrollé un módulo orientado a la consulta y validación de grandes contribuyentes, permitiendo automatizar la aplicación de reglas tributarias relacionadas con procesos de retención. La solución facilitó la verificación de información fiscal de los clientes, contribuyendo al cumplimiento normativo y reduciendo riesgos operativos en los procesos financieros de la institución.",
    tecnologias : [".NET Core", "C#", "PostgreSQL", "Sybase", "Vue.js"],
    responsabilidades : ["Desarrollo de funcionalidades para la consulta y validación de grandes contribuyentes.",
      "Implementación de reglas de negocio asociadas a procesos de retención tributaria.",
      "Integración con fuentes de información utilizadas para la validación fiscal.",
      "Desarrollo de servicios y componentes reutilizables para el procesamiento de información.",
      "Optimización de consultas y procesos para garantizar tiempos de respuesta eficientes.",
      "Participación en pruebas funcionales y validación de cumplimiento normativo."],
    arquitectura : "Arquitectura Hexagonal, Arquitectura basada en Componentes"
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#FAFAFA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        scrollBehavior: "smooth",
        margin:"10px auto"
      }}
    >
      <GridProjects lstProjects={projects} />
    </Box>
  );
};

export default Projects;
