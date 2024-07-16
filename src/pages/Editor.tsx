import ReactQuill from "react-quill";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

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

const toolbarOptions = [
  [{ font: [] }, { size: [] }, { header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  [{ direction: ["invert"] }, { align: ["", "center", "right", "justify"] }],
  ["link", "image", "video", "formula"],
  ["clean"],
];

const modules = {
  toolbar: toolbarOptions,
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "direction",
  "align",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "formula",
  "script",
  "code-block",
  "clean",
];

const placeholder = "Write your content here...";

function Editor() {
  const project = useSelector((state: RootState) => state.project);
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElMenu(null);
  };

  const handleGoBack = () => {
    if (user.rol === "Student") navigate("/student");
    else if (user.rol === "Research") navigate("/research");
  };

  return (
    <main className="text-editor bg-primary-dark">
      <section className="w-full h-[10vh] md:h-[12vh] lg:h-[10vh]">
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
              <Toolbar>
                <IconButton
                  size="large"
                  aria-label="menu of user"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorElMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElMenu)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem onClick={handleGoBack}>
                    <Typography textAlign="center">Go Back</Typography>
                  </MenuItem>
                </Menu>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {project.name}
                </Typography>

                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
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
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Projects</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </section>
      <section className="w-full min-h-[80vh] md:min-h-[84vh] flex justify-center text-quaternary-dark pb-8">
        <div className="relative h-[90vh] md:h-[1123px] w-[90%] md:w-[794px]">
          <span className="absolute top-0 left-0 h-full w-full bg-black opacity-50 "></span>

          <div className="absolute top-0 left-0 h-full w-full">
            <ReactQuill
              className="w-full h-[96%]"
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder={placeholder}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Editor;
