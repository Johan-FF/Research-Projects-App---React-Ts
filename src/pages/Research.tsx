import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import UserLayout from "../layouts/UserLayout";
import ResearchProjectCard from "../components/ResearchProjectCard";

const projects = [
  {
    name: "Renewable Energy Integration",
    description:
      "Analyzes the challenges and solutions for integrating renewable energy sources into the national grid.",
    rating: 92,
  },
  {
    name: "AI in Healthcare",
    description:
      "Explores the use of artificial intelligence to improve diagnostic accuracy and patient outcomes.",
    rating: 87,
  },
  {
    name: "Urban Wildlife Conservation",
    description:
      "Investigates the impact of urbanization on local wildlife and proposes conservation strategies.",
    rating: 78,
  },
];

function Research() {
  return (
    <UserLayout>
      <div className="w-full h-auto md:h-full p-[4%]">
        <section className="flex justify-between items-center">
          <Typography
            className="gradient-text"
            sx={{
              fontWeight: 900,
              letterSpacing: ".1rem",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Projects
          </Typography>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              height: "40px",
              backgroundColor: "#FF6969",
              borderBottom: "2px solid #FFF5E1",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#FFF5E1" }}
              placeholder="Search some project..."
              inputProps={{ "aria-label": "search some project" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px", color: "#FFF5E1" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </section>
        <section className="w-full h-[90%] p-[4%]">
          {projects.map((project, index) => {
            return (
              <ResearchProjectCard
                key={`project-${index}`}
                name={`${project.name}`}
                description={`${project.description}`}
                rating={project.rating}
              />
            );
          })}
        </section>
      </div>
    </UserLayout>
  );
}

export default Research;
