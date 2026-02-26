import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/material";

interface ImgMediaCardProps {
  pathImage: string;
  title: string;
  text: string;
  detalles?: string[];
  sx?: SxProps<Theme>;
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

function ImgMediaCard(props: ImgMediaCardProps) {
  const { pathImage, title, text, detalles, sx } = props;
  return (
    <Card
      sx={{
        height: "225px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        ...sx,
      }}
    >
      <CardMedia
        component="img"
        alt="Institute"
        image={pathImage}
        sx={{
          height: 80,
          objectFit: "contain",
          marginTop: "20px",
        }}
      />
      <CardContent
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ fontFamily: "Google Sans Flex" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontFamily: "Google Sans Flex" }}
        >
          {text}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1, maxWidth: 500 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Demo>
              <List>
                {detalles?.map((element, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: "justify",
                        lineHeight: 1.5,
                      }}
                    >
                      {element}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default ImgMediaCard;
