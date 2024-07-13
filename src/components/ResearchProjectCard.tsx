import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { updateProject } from "../redux/projectReducer";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ResearchProjectCardProps {
  name: string;
  description: string;
  rating: number;
}

function ResearchProjectCard({
  name,
  description,
  rating,
}: ResearchProjectCardProps) {
  const dispatch = useDispatch();

  const projectSelectHandler = () => {
    dispatch(updateProject({ name }));
  };

  return (
    <Link to={"/editor"}>
      <Button
        color="inherit"
        sx={{
          backgroundColor: "#C80036",
          borderRadius: "24px",
          marginBottom: "8px",
        }}
        className="text-quaternary-dark grid grid-cols-5 w-full"
        onClick={projectSelectHandler}
      >
        <span className="col-span-1 flex justify-between items-center pl-4 lg:pl-8">
          <span>
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                scale: { xs: "1", sm: "1.5", md: "2" },
                color: "#FF6969",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={rating}
                color="inherit"
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" component="div">
                  {`${Math.round(rating)}`}
                </Typography>
              </Box>
            </Box>
          </span>
          <span className="flex justify-center w-[80%]">
            <Typography
              sx={{
                color: "#FFF5E1",
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              {name}
            </Typography>
          </span>
        </span>
        <span className="col-span-4 p-8 text-quaternary-dark text-xs">
          {description}
        </span>
      </Button>
    </Link>
  );
}

export default ResearchProjectCard;
