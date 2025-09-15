import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Sec6 = () => {
  const items = [
    {
      title: "Ago. 2025 - Nov 2025",
      cardTitle:
        "Programa de Profundización en Desarrollo de Software – Fundación Formar & Software IT",
      cardDetailedText:
        "Recibí formación intensiva en desarrollo de software enfocada en calidad y arquitectura, aprendiendo Git avanzado, TypeScript, Test Driven Development, código limpio, arquitectura limpia y uso de Docker. Además, desarrollé habilidades blandas para trabajo en equipo, liderazgo y comunicación efectiva.",
        icon:"https://forit.ar/images/icon-forit.svg"
    },
    {
      title: "Abr. 2024 - Jun. 2024",
      cardTitle: "FUNDAMENTOS DE PYTHON 1 - CISCO NETWORKING ACADEMY",
      cardDetailedText:
        "Aprendí los conceptos fundamentales de la programación informática y comience a desarrollar habilidades de codificación con el lenguaje de programación Python.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "Oct. 2023 - Abr. 2024",
      cardTitle: "PROGRAMACIÓN BACKEND - CODER HOUSE",
      cardDetailedText:
        "Recibí formación intensiva en backend con Node.js y Express, enfocándome en APIs RESTful, MongoDB, autenticación con JWT y bcrypt, sesiones, WebSockets para tiempo real, testing, patrones de diseño y despliegue. El proyecto final fue una API completa de e-commerce con usuarios, productos y carritos.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Jul. 2023 - Sep. 2023",
      cardTitle: "REACT JS - CODER HOUSE",
      cardDetailedText:
        "En este curso aprendí a desarrollar aplicaciones web con React, aplicando buenas prácticas, manejo de componentes, enrutamiento, gestión global de estados y consumo de APIs, además de integrar Firebase para autenticación y base de datos en un proyecto final de e-commerce con persistencia en tiempo real.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "May. 2023 - Jul. 2023",
      cardTitle: "JAVASCRIPT - CODER HOUSE",
      cardDetailedText:
        "En este curso dominé los fundamentos de JavaScript, integré librerías como jQuery y apliqué técnicas como AJAX para crear aplicaciones web interactivas y dinámicas, obteniendo una base sólida para trabajar con frameworks de JavaScript.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Feb. 2023 - Abr. 2023",
      cardTitle: "DESARROLLO WEB - CODER HOUSE",
      cardDetailedText:
        "Este curso me enseñó a diseñar y desarrollar sitios web completos utilizando HTML, CSS, SASS y Bootstrap, gestionar versiones con GIT, optimizar SEO y desplegar en servidores, además de habilidades para interactuar con servicios web y gestionar clientes.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
  ];

  return (
    <Timeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={index % 2 === 0 ? "right" : "left"}
            variant="body2"
            color="text.secondary"
          >
            {item.title}
          </TimelineOppositeContent>
          <TimelineSeparator>
            {index !== 0 && <TimelineConnector sx={{ color: "#92B4F4" }} />}
            <TimelineDot sx={{ color: "#4f46e5" }}>
              <img
                src={item.icon}
                alt={item.cardTitle}
                style={{ width: 20, height: 20 }}
              />
            </TimelineDot>
            {index !== items.length - 1 && (
              <TimelineConnector sx={{ color: "#92B4F4" }} />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                bgcolor: "#92B4F4",
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#4f46e5" }}
              >
                {item.cardTitle}
              </Typography>
              <Typography>{item.cardDetailedText}</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Sec6;
