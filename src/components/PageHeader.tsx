import { useState, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";

const sections = ["About us", "Services", "Contact"];
const htmlIDs = ["about-us", "services", "contact-us"];

function PageHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (indexId: number) => {
    setAnchorElNav(null);
    if (location.pathname !== "/" && location.pathname !== "") navigate("/");
    const section = document.getElementById(htmlIDs[indexId]);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", height: "10vh" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" className="flex justify-center items-center">
            <SvgIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  fill="#fff5e1"
                >
                  <path d="M15 7A1 1 0 1015 9 1 1 0 1015 7zM10.05 9.05A1 1 0 1010.05 11.05 1 1 0 1010.05 9.05zM8 14A1 1 0 108 16 1 1 0 108 14zM10.05 18.95A1 1 0 1010.05 20.95 1 1 0 1010.05 18.95zM15 21A1 1 0 1015 23 1 1 0 1015 21zM19.95 18.95A1 1 0 1019.95 20.95 1 1 0 1019.95 18.95zM22 14A1 1 0 1022 16 1 1 0 1022 14zM19.95 9.05A1 1 0 1019.95 11.05 1 1 0 1019.95 9.05zM18.5 2.48c0 .01 0 .01 0 .02C18.5 4.43 16.93 6 15 6s-3.5-1.57-3.5-3.5c0-.01 0-.01 0-.02C12.61 2.17 13.79 2 15 2S17.39 2.17 18.5 2.48zM8.64 8.64C7.27 10 5.05 10 3.69 8.64 3.68 8.63 3.68 8.63 3.67 8.62c1.17-2.07 2.88-3.78 4.95-4.95.01.01.01.01.02.02C10 5.05 10 7.27 8.64 8.64zM6 15c0 1.93-1.57 3.5-3.5 3.5-.01 0-.01 0-.02 0C2.17 17.39 2 16.21 2 15c0-1.21.17-2.39.48-3.5.01 0 .01 0 .02 0C4.43 11.5 6 13.07 6 15zM8.64 26.31c-.01.01-.01.01-.02.02-2.07-1.17-3.78-2.88-4.95-4.95.01-.01.01-.01.02-.02 1.36-1.36 3.58-1.36 4.95 0C10 22.73 10 24.95 8.64 26.31zM18.5 27.5c0 .01 0 .01 0 .02C17.39 27.83 16.21 28 15 28s-2.39-.17-3.5-.48c0-.01 0-.01 0-.02 0-1.93 1.57-3.5 3.5-3.5S18.5 25.57 18.5 27.5zM26.33 21.38c-1.17 2.07-2.88 3.78-4.95 4.95-.01-.01-.01-.01-.02-.02-1.36-1.36-1.36-3.58 0-4.95 1.37-1.36 3.59-1.36 4.95 0C26.32 21.37 26.32 21.37 26.33 21.38zM28 15c0 1.21-.17 2.39-.48 3.5-.01 0-.01 0-.02 0-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c.01 0 .01 0 .02 0C27.83 12.61 28 13.79 28 15zM26.33 8.62c-.01.01-.01.01-.02.02-1.36 1.36-3.58 1.36-4.95 0C20 7.27 20 5.05 21.36 3.69c.01-.01.01-.01.02-.02C23.45 4.84 25.16 6.55 26.33 8.62z"></path>
                </svg>
              }
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Research Projects
            </Typography>
          </Link>

          <Link to="/" className="flex justify-center items-center">
            <SvgIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  fill="#fff5e1"
                >
                  <path d="M15 7A1 1 0 1015 9 1 1 0 1015 7zM10.05 9.05A1 1 0 1010.05 11.05 1 1 0 1010.05 9.05zM8 14A1 1 0 108 16 1 1 0 108 14zM10.05 18.95A1 1 0 1010.05 20.95 1 1 0 1010.05 18.95zM15 21A1 1 0 1015 23 1 1 0 1015 21zM19.95 18.95A1 1 0 1019.95 20.95 1 1 0 1019.95 18.95zM22 14A1 1 0 1022 16 1 1 0 1022 14zM19.95 9.05A1 1 0 1019.95 11.05 1 1 0 1019.95 9.05zM18.5 2.48c0 .01 0 .01 0 .02C18.5 4.43 16.93 6 15 6s-3.5-1.57-3.5-3.5c0-.01 0-.01 0-.02C12.61 2.17 13.79 2 15 2S17.39 2.17 18.5 2.48zM8.64 8.64C7.27 10 5.05 10 3.69 8.64 3.68 8.63 3.68 8.63 3.67 8.62c1.17-2.07 2.88-3.78 4.95-4.95.01.01.01.01.02.02C10 5.05 10 7.27 8.64 8.64zM6 15c0 1.93-1.57 3.5-3.5 3.5-.01 0-.01 0-.02 0C2.17 17.39 2 16.21 2 15c0-1.21.17-2.39.48-3.5.01 0 .01 0 .02 0C4.43 11.5 6 13.07 6 15zM8.64 26.31c-.01.01-.01.01-.02.02-2.07-1.17-3.78-2.88-4.95-4.95.01-.01.01-.01.02-.02 1.36-1.36 3.58-1.36 4.95 0C10 22.73 10 24.95 8.64 26.31zM18.5 27.5c0 .01 0 .01 0 .02C17.39 27.83 16.21 28 15 28s-2.39-.17-3.5-.48c0-.01 0-.01 0-.02 0-1.93 1.57-3.5 3.5-3.5S18.5 25.57 18.5 27.5zM26.33 21.38c-1.17 2.07-2.88 3.78-4.95 4.95-.01-.01-.01-.01-.02-.02-1.36-1.36-1.36-3.58 0-4.95 1.37-1.36 3.59-1.36 4.95 0C26.32 21.37 26.32 21.37 26.33 21.38zM28 15c0 1.21-.17 2.39-.48 3.5-.01 0-.01 0-.02 0-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c.01 0 .01 0 .02 0C27.83 12.61 28 13.79 28 15zM26.33 8.62c-.01.01-.01.01-.02.02-1.36 1.36-3.58 1.36-4.95 0C20 7.27 20 5.05 21.36 3.69c.01-.01.01-.01.02-.02C23.45 4.84 25.16 6.55 26.33 8.62z"></path>
                </svg>
              }
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Research Projects
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {sections.map((section, index) => (
              <Button
                key={section}
                onClick={() => handleCloseNavMenu(index)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {section}
              </Button>
            ))}
          </Box>

          <div className="w-44 flex justify-between">
            <Button
              className="md:ml-3 bg-gradient-to-r from-secondary-dark"
              color="inherit"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className="md:ml-3 bg-gradient-to-r from-secondary-dark"
              color="inherit"
            >
              <Link to="/register">Register</Link>
            </Button>
          </div>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section, index) => (
                <MenuItem
                  key={section}
                  onClick={() => handleCloseNavMenu(index)}
                >
                  <Typography textAlign="center">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PageHeader;
