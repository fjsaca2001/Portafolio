import Typography from "@mui/material/Typography";
import { Box, Button, TextField } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = (/*props: Props*/) => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", formRef.current, "PUBLIC_KEY")
      .then(
        () => {
          alert("Correo enviado correctamente 🚀");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Error al enviar el correo ❌");
        },
      );
  };
  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#b8b8b8",
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
            gap: 4,
            width: "100%",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Box sx={{ width: "40%", display: "flex", justifyContent: "start" }}>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <SendOutlinedIcon
                sx={{
                  fontSize: "80px",
                  color: "#000000ff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.4) translateY(-6px) rotate(-45deg)",
                  },
                  rotate: "-45deg",
                }}
              />
              <Typography
                textAlign="justify"
                sx={{ fontFamily: "Google Sans Flex" }}
              >
                ¿Te gustaría ponerte en contacto conmigo?
              </Typography>
              <Typography
                textAlign="justify"
                sx={{ fontFamily: "Google Sans Flex" }}
              >
                Si quieres conversar para un proyecto o alguna vacante, ¡no
                dudes en enviarme un correo electrónico!
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "100%" }}>
              <Box
                component="form"
                ref={formRef}
                onSubmit={sendEmail}
                sx={{
                  maxWidth: 500,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  label="Nombre"
                  name="user_name"
                  required
                  fullWidth
                  sx={{ fontFamily: "Google Sans Flex" }}
                />
                <TextField
                  label="Correo electrónico"
                  name="user_email"
                  type="email"
                  required
                  fullWidth
                  sx={{ fontFamily: "Google Sans Flex" }}
                />
                <TextField
                  label="Mensaje"
                  name="message"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  sx={{ fontFamily: "Google Sans Flex" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontFamily: "Google Sans Flex" }}
                >
                  Enviar mensaje
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
