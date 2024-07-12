import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

function PageFooter() {
  return (
    <Box
      position="static"
      sx={{ backgroundColor: "transparent", height: "10vh" }}
    >
      <Container sx={{ display: "flex", justifyContent: "end" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Button color="inherit">
            <Typography
              noWrap
              component="a"
              href="https://github.com/Johan-FF/Research-Projects-App---React-Ts"
              sx={{
                color: "#FFF5E1",
                fontWeight: 500,
                letterSpacing: ".1rem",
              }}
            >
              Open GitHub Project
            </Typography>
          </Button>
          <GitHubIcon
            sx={{
              fill: "#FFF5E1",
            }}
          />
        </Toolbar>
      </Container>
    </Box>
  );
}
export default PageFooter;
