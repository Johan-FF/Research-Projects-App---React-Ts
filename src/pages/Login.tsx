import PageLayout from "../layouts/PageLayout";

import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#0c1844dd",
            "--TextField-brandBorderHoverColor": "#FFF5E1",
            "--TextField-brandBorderFocusedColor": "#FFF5E1",
            "& label.Mui-focused": {
              color: "#FFF5E1",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .class`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .class`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outerTheme = useTheme();

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    if (password === "" || email === "") return;

    const idUser = Math.floor(Math.random() * 10) + 1;
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(updateUser(data));
        if (password === "password" && email === "student@gmail.com")
          navigate("/student");
        else if (password === "password" && email === "research@gmail.com")
          navigate("/research");
      })
      .catch((error) => console.log(error));
  };

  return (
    <PageLayout>
      <section className="h-screen md:h-[80vh] w-full flex justify-center items-center">
        <div className="w-[90%] md:w-[70%] h-[50%] md:h-[60%] relative">
          <span className="absolute top-0 left-0 rounded-3xl h-full w-full bg-black opacity-50 shadow-2xl"></span>
          <span className="absolute top-0 left-0 w-full px-[4%] py-[2%]">
            <Typography
              variant="h3"
              component="p"
              className="gradient-text"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Login
            </Typography>
          </span>
          <span className="absolute top-[20%] md:top-[25%] left-0 w-full shadow-2xl p-[4%] bg-secondary-dark">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "45ch" },
              }}
              noValidate
              autoComplete="on"
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  required
                  className="bg-tertiary-dark"
                  id="filled-disabled"
                  label="Email"
                  type="email"
                  variant="filled"
                  onChange={emailHandler}
                />
                <TextField
                  required
                  className="bg-tertiary-dark"
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  onChange={passwordHandler}
                />
              </ThemeProvider>
            </Box>
          </span>
          <div className="absolute -bottom-[5%] md:-bottom-[10%] left-0 w-full p-[4%] flex justify-end">
            <Button
              className="absolute bottom-8 right-8 md:ml-3 bg-gradient-to-r from-secondary-dark"
              color="inherit"
              onClick={loginHandler}
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
                Login
              </Typography>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Login;
