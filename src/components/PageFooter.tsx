import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

function PageFooter() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", height: "10vh" }}
    >
      <Container sx={{ display: "flex", justifyContent: "end" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Button color="inherit">
            <Typography
              noWrap
              component="a"
              href=""
              sx={{
                fontWeight: 500,
                letterSpacing: ".1rem",
              }}
            >
              Open GitHub Project
            </Typography>
          </Button>
          <GitHubIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PageFooter;
