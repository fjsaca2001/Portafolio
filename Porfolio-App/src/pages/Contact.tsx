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
        backgroundColor: "#b8b8b8",
        px: 2,
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        },
        gap: 1,
        height: { md: "90vh" },
      }}
    >
      <Box sx={{ width: { xs: "80%", sm: "50%", md: "50%" }, margin: "auto", textAlign:"center"}}>
        <SendOutlinedIcon
          sx={{
            fontSize: "80px",
            color: "#000000ff",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: {xs: "translateY(-6px) rotate(-45deg)", md:"scale(1.4) translateY(-6px) rotate(-45deg)"},
            },
            rotate: "-45deg",
          }}
        />
        <Typography textAlign="justify" sx={{ fontFamily: "Google Sans Flex" }}>
          ¿Te gustaría ponerte en contacto conmigo?
        </Typography>
        <Typography textAlign="justify" sx={{ fontFamily: "Google Sans Flex" }}>
          Si quieres conversar para un proyecto o alguna vacante, ¡no dudes en
          enviarme un correo electrónico!
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "50%", md: "50%" }, margin: "auto" }}>
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
  );
};

export default Contact;
