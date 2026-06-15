import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const pages = [
  { label: "Home", path: "Home" },
  { label: "Sobre mí", path: "AboutMe" },
  { label: "Experiencia", path: "WhatIDo" },
  { label: "Skills / Stack", path: "Skills" },
  { label: "Proyectos", path: "Project" },
  { label: "Contacto", path: "Contact" },
];

function ResponsiveAppBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const section = document.getElementById("Home");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDark(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <AppBar
      position="fixed"
      elevation={dark ? 0 : 4}
      sx={{
        backgroundColor: dark ? "transparent" : "#000",
        transition: "all 0s ease",
      }}
    >
      <Box
        width="100%"
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          mr: 20,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box width="50%" textAlign="start">
          <IconButton
            component={NavLink}
            to="/"
            disableRipple
            sx={{ mr: 1, color: "inherit", marginLeft: "10px" }}
          >
            <CodeIcon />
            <Typography variant="h6" fontFamily="Inter" paddingLeft="10px">
              Frank Saca
            </Typography>
          </IconButton>
        </Box>
        <Box width="50%" textAlign="end" alignContent="end">
          <Box
            width="100%"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleScroll(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Inter",
                  "&.active": { borderBottom: "2px solid white" },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
