import { Box, IconButton, Typography } from "@mui/material";
import FooterIcon from "../components/FooterIcon";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "30vh",
        backgroundColor: "#222222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ maxWidth: "100%" }}>
        <Box
          display="flex"
          sx={{
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <FooterIcon
            afterColor="#333333"
            pathd="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258c-.203-.532-.172-1.662.062-2.129c.626-.081 1.469.258 1.969.726c.594-.194 1.219-.291 1.985-.291c.765 0 1.39.097 1.953.274c.484-.451 1.343-.79 1.969-.709c.218.435.25 1.564.046 2.113c.5.613.766 1.436.766 2.274c0 1.984-1.453 3.485-3.547 3.759c.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291C16 3.726 12.406 0 7.984 0S0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162c-1.031 0-1.641-.581-2.078-1.662c-.172-.435-.36-.693-.719-.742c-.187-.016-.25-.097-.25-.193c0-.194.313-.339.625-.339c.453 0 .844.29 1.25.887c.313.468.641.678 1.031.678c.391 0 .641-.146 1-.516c.266-.275.469-.517.657-.678"
            viewBox="0 0 16 16"
            url="https://github.com/fjsaca2001"
          />
          <FooterIcon
            afterColor="#0A66C2"
            pathd="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"
            viewBox="0 0 20 17"
            url="https://www.linkedin.com/in/fjsacaICC"
          />
        </Box>
        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "30px",
            transition: "all 0.2s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <IconButton
            onClick={() => {
              document
                .getElementById("Home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ececec"
                d="M22.6 2.1c-.1-.3-.4-.6-.7-.7c-4.2-1.1-8.5.2-11.4 3.6L9.4 6.3l-2.7-.6C5.4 5.2 4 5.8 3.4 7l-2.2 3.9q-.3.45 0 .9c.1.3.4.5.7.6l3.1.7c-.3.8-.4 1.6-.6 2.4c0 .3.1.6.3.8l3.1 3.1c.2.2.4.3.7.3h.1c.9-.1 1.7-.2 2.5-.5l.6 3c.1.3.3.6.6.7c.1.1.3.1.4.1c.2 0 .3 0 .5-.1l3.9-2.2c1.1-.6 1.7-2 1.4-3.3l-.7-2.8l1.2-1.1c3.3-2.8 4.7-7.3 3.6-11.4M7.3 8.8c-.6.8-1.2 1.6-1.6 2.4l-2.1-.5L5.1 8c.2-.4.6-.5 1.1-.4l1.7.4zM16 18.9l-2.7 1.5l-.4-2c.9-.4 1.7-1 2.4-1.6l.7-.7l.4 1.7c.2.5-.1 1-.4 1.1m.7-10.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.6 1.5-1.5 1.5"
              />
            </svg>
          </IconButton>
        </Box>
        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Typography variant="body2" color="#ececec" gutterBottom>
            © Frank Saca 2026
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
