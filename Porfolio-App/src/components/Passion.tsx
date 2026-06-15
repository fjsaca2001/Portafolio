import { Box, IconButton, Typography } from "@mui/material";
//import CodeIcon from "@mui/icons-material/Code";
import { ReactNode } from "react";

interface PassionProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const Passion = (props: PassionProps) => {
  const { icon, title, text } = props;
  return (
    <Box
      sx={{
        width: "90%",
        margin: "10px auto",
        height: { md: "430px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          transition: "all 0.8s ease",
          ":hover": { transform: "rotate(360deg) scale(1.1)" },
        }}
      >
        <IconButton size="large" disableRipple sx={{ color: "inherit" }}>
          {icon}
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        sx={{
          margin: "10px 0px",
          color: "text.primary",
          fontFamily: "Google Sans Flex",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          textAlign: "justify",
          fontFamily: "Google Sans Flex",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Passion;
