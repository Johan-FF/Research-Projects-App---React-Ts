import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AuthContext } from "../providers/AuthProvider";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function UserSideBar() {
  const { logout } = useContext(AuthContext);
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();
  const [name, setName] = useState("");
  const [rol, setRol] = useState("");
  const [viewMenu, setViewMenu] = useState(false);

  useEffect(() => {
    setName(user.name);
    setRol(location.pathname === "/student" ? "Student" : "Research");
  }, []);

  const logoutHandler = () => {
    logout();
  };

  const mobileMenuHandler = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <>
      <div
        className={`shadow-[5px_0_15px_black] w-[25vw] md:w-full h-screen max-h-[800px] fixed top-0 ${
          !viewMenu ? "-left-full" : "left-0"
        } md:static z-10 bg-primary-dark transition-all`}
      >
        <section className="w-full h-[40%] ">
          <div className="relative rounded-xl p-1 h-full">
            <div className="absolute top-0 left-0 rounded-xl h-full w-full text-quaternary-dark text-center text-xl">
              <span className="absolute top-0 left-0 rounded-xl h-full w-full bg-black opacity-50 "></span>
              <span className="absolute top-0 left-0 rounded-xl h-full w-full flex justify-evenly items-center flex-col">
                <AccountCircleIcon
                  color="inherit"
                  sx={{
                    scale: "4",
                    color: "#FF6969",
                  }}
                />
                <div className=" flex justify-center items-center flex-col">
                  <Typography
                    component="p"
                    className="gradient-text"
                    sx={{
                      textAlign: "center",
                      fontWeight: 900,
                      letterSpacing: ".1rem",
                      fontSize: { xs: "1rem", md: "1.5rem" },
                    }}
                  >
                    {name}
                  </Typography>
                  <p className="text-quaternary-dark font-medium tracking-wider">
                    {rol}
                  </p>
                </div>
              </span>
            </div>
          </div>
        </section>
        <section className="w-full h-[40%] flex justify-center items-center">
          <Stack className="shadow-2xl w-full" direction="row">
            <Paper sx={{ backgroundColor: "#C80036", width: "100%" }}>
              <MenuList>
                <MenuItem
                  sx={{
                    color: "#FFF5E1",
                    borderBlock: "2px solid #FFF5E1",
                    marginBlock: "8px",
                  }}
                >
                  My account
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "#FFF5E1",
                    borderBlock: "2px solid #FFF5E1",
                    marginBlock: "8px",
                  }}
                >
                  Projects
                </MenuItem>
              </MenuList>
            </Paper>
          </Stack>
        </section>
        <section className="w-full h-[20%] flex justify-center items-center">
          <Button
            className="bg-gradient-to-r from-secondary-dark"
            color="inherit"
            onClick={logoutHandler}
          >
            <Typography
              sx={{
                color: "#FFF5E1",
                flexGrow: 1,
                fontWeight: 500,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              Logout
            </Typography>
          </Button>
        </section>
      </div>
      <div
        className={`md:hidden shadow-[5px_0_15px_black] w-[10vw] h-screen max-h-[800px] fixed top-0 ${
          !viewMenu ? "left-0" : "left-[25vw]"
        } flex justify-center items-center z-10 bg-primary-dark transition-all`}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={mobileMenuHandler}
        >
          <MenuIcon sx={{ fill: "#FFF5E1" }} />
        </IconButton>
      </div>
    </>
  );
}

export default UserSideBar;
