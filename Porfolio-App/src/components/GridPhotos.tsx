import { Box } from "@mui/material";

interface GridPhotosProps {
  lstImagenes: string[];
}

const GridPhotos = (props: GridPhotosProps) => {
  const { lstImagenes } = props;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
        },
        gap: 1,
      }}
    >
      {lstImagenes.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`img-${index}`}
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
            filter: "grayscale(100%)",
            transition: "all 0.3s ease",
            "&:hover": {
              filter: "grayscale(0%)",
              transform: "scale(1.05)",
              zIndex: 1,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default GridPhotos;
