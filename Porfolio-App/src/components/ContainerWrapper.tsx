import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ContainerWrapperProps {
  children: ReactNode;
  maxWidth: string | number;
  padding: string | number;
}

function ContainerWrapper(props: ContainerWrapperProps) {
  const { children, maxWidth, padding } = props;
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: maxWidth,
        margin: "0 auto",
        padding: padding,
      }}
    >
      {children}
    </Box>
  );
}

export default ContainerWrapper;
