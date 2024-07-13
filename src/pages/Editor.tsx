import Quill from "quill";
import { useState, useEffect, MouseEvent } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function Editor() {
  const project = useSelector((state: RootState) => state.project);
  const [quill, setQuill] = useState<null | Quill>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const editor = new Quill("#editor", {
      modules: {
        syntax: true,
        toolbar: "#toolbar-container",
      },
      theme: "snow",
    });

    setQuill(editor);
  }, []);

  return (
    <main className="bg-primary-dark">
      <section className="w-full h-[30vh] md:h-[24vh] lg:h-[16vh]">
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {project.name}
                </Typography>

                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div id="toolbar-container" className="flex justify-center">
          <span className="ql-formats">
            <select className="ql-font"></select>
            <select className="ql-size"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-header" value="1"></button>
            <button className="ql-header" value="2"></button>
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-direction" value="rtl"></button>
            <select className="ql-align"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <button className="ql-video"></button>
            <button className="ql-formula"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-clean"></button>
          </span>
        </div>
      </section>
      <section className="w-full min-h-[80vh] md:min-h-[84vh] flex justify-center text-quaternary-dark pb-8">
        <div className="relative h-[90vh] md:h-[1123px] w-[90%] md:w-[794px]">
          <span className="absolute top-0 left-0 h-full w-full bg-black opacity-50 "></span>

          <div
            id="editor"
            className="absolute top-0 left-0 h-full w-full"
          ></div>
        </div>
      </section>
    </main>
  );
}

export default Editor;
