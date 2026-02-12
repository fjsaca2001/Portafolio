import { SxProps, Theme, Box } from "@mui/material";

interface FooterIconProps {
  afterColor: string;
  pathd: string;
  viewBox: string;
  url: string;
  sx?: SxProps<Theme>;
}

const FooterIcon = (props: FooterIconProps) => {
  const { sx, afterColor, pathd, viewBox, url } = props;
  return (
    <Box
      width="40px"
      height="40px"
      display="flex"
      borderRadius="10px"
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#333333",
        cursor: "pointer",
        ...sx,
        transition: "all 0.2s ease",
        ":hover": { transform: "scale(1.1)", background: afterColor },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox={viewBox}
      >
        <path fill="#ececec" d={pathd} />
      </svg>
    </Box>
  );
};

export default FooterIcon;
