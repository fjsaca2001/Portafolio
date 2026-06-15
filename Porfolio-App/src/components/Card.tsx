import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface ImgMediaCardProps {
  pathImage: string;
  title: string;
  text: string;
}

function ImgMediaCard(props: ImgMediaCardProps) {
  const { pathImage, title, text } = props;
  return (
    <Card
      sx={{
        backgroundColor: "#ffffff",
        margin:"10px"
      }}
    >
      <CardMedia
        component="img"
        alt="Institute"
        image={pathImage}
        sx={{
          height: { xs: 56, sm: 64, md: 80 },
          objectFit: "contain",
          marginTop: { xs: 1, sm: 2 },
          p: { xs: 0.5, sm: 0 },
        }}
      />
      <CardContent
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: { xs: 1, sm: 1.5 },
          px: { xs: 1.5, sm: 2 },
          "&:last-child": { pb: { xs: 1.5, sm: 2 } },
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{
            fontFamily: "Google Sans Flex",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontFamily: "Google Sans Flex",
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImgMediaCard;
