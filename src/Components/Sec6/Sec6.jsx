import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Paper, Box } from "@mui/material";

const Sec6 = () => {
  const items = [
    {
      date: "Feb. 2023 - Abr. 2023",
      title: "DESARROLLO WEB - CODER HOUSE",
      description:
        "En este curso, aprendí a diseñar y desarrollar sitios web completos, desde prototipado hasta despliegue.",
    },
    {
      date: "May. 2023 - Jul. 2023",
      title: "JAVASCRIPT - CODER HOUSE",
      description:
        "Aprendí JavaScript, jQuery, AJAX y técnicas modernas para aplicaciones web dinámicas.",
    },
    {
      date: "Jul. 2023 - Sep. 2023",
      title: "REACT JS - CODER HOUSE",
      description:
        "Desarrollo con React, buenas prácticas, consumo de APIs, Firebase y proyecto final e-commerce.",
    },
    {
      date: "Oct. 2023 - Abr. 2024",
      title: "PROGRAMACIÓN BACKEND - CODER HOUSE",
      description:
        "Node.js, Express, MongoDB, JWT, WebSockets y desarrollo de API completa de e-commerce.",
    },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#f0f2f5" }}>
      <Timeline position="alternate">
        {[...items].reverse().map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "#3366ff", 
                  width: "14px", 
                  height: "14px",
                  boxShadow: "0 0 8px rgba(51,102,255,0.6)", 
                }}
              />
              {idx < items.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: "rgba(51,102,255,0.4)", 
                    minHeight: "3rem",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                sx={{
                  p: "1.5rem",
                  bgcolor: "#ffffff", 
                  color: "#333",
                  borderRadius: "8px", 
                  border: "1px solid #e0e0e0", 
                  "&:hover": {
                    transform: "scale(1.01)", 
                    transition: "0.3s ease",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)", 
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#3366ff", 
                    fontSize: "1.25rem", 
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: "0.5rem", color: "#888" }}
                >
                  {item.date}
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  {item.description}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Sec6;