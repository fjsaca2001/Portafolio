import {
  Box,
  Typography,
  CardMedia,
  ListItem,
  ListItemText,
  List,
  Dialog,
  DialogContent,
  Chip,
  Button,
  DialogActions,
  Paper,
} from "@mui/material";
import { Project } from "../interfaces/types";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from "@mui/material/Divider";

interface DetailProjectProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}

const DetailProject = ({ open, project, onClose }: DetailProjectProps) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogContent
        dividers
        sx={{
          maxHeight: "80vh",
        }}
      >
        <CardMedia
          component="img"
          alt="Institute"
          image={project.pathImage}
          sx={{
            height: {
              xs: 120,
              md: 180,
            },
            objectFit: "contain",
            mb: 2,
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
          fontWeight={600}
          component="div"
          sx={{ fontFamily: "Google Sans Flex", textAlign: "center" }}
        >
          {project.tittle}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Acerca del proyecto
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "left",
            lineHeight: 1.8,
            fontFamily: "Google Sans Flex",
          }}
        >
          {project.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 1,
            mt: 3,
          }}
        >
          <AssignmentIcon />
          <Typography variant="subtitle1" fontWeight={600}>
            Responsabilidades
          </Typography>
        </Box>
        <List>
          {project.responsabilidades.map((tech) => (
            <ListItem
              disablePadding
              sx={{
                gap: 1,
                py: 0.5,
                color: "text.secondary",
                fontFamily: "Google Sans Flex",
                fontSize: "0.875rem",
              }}
              key={tech}
            >
              <CheckCircleIcon />
              <ListItemText primary={tech} />
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 2,
          }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 2,
              mt: 2,
              borderRadius: 2,
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <ArchitectureIcon />
              <Typography variant="subtitle1" fontWeight={600}>
                Arquitectura
              </Typography>
            </Box>
            <Typography color="text.secondary">
              {project.arquitectura}
            </Typography>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              mt: 2,
              borderRadius: 2,
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <BuildIcon />
              <Typography variant="subtitle1" fontWeight={600}>
                Tecnologías
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {project.tecnologias.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Box>
        <DialogActions
          sx={{
            mt: 2,
          }}
        >
          <Button variant="contained" onClick={onClose}>
            Cerrar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DetailProject;
