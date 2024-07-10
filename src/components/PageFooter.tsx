import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

function PageFooter() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GitHubIcon />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PageFooter;
