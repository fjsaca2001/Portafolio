import { Box } from "@mui/material";

interface LogoBoxProps {
  pathImage: string;
}

const LogoBox = (props: LogoBoxProps) => {
  const { pathImage } = props;
  return (
    <Box
      component="img"
      src={pathImage}
      alt="Imagen"
      sx={{
        width: 110,
        height: 110,
        filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
        transition: "all 0.4s ease",
        "&:hover": {
          filter: "grayscale(0%) contrast(1)",
          transform: "scale(1.05)",
        },
        //aspectRatio: "1/1", // cuadrada (simétrica)
        //objectFit: "cover", // no se deforma
      }}
    />
  );
};

export default LogoBox;
