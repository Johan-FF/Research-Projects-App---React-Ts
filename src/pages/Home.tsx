import { useEffect, useState } from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import PageLayout from "../layouts/PageLayout";

function Home() {
  const [progress, setProgress] = useState(10);
  const [scale, setScale] = useState(4);
  const [displayMessage, setDisplayMessage] = useState("hidden");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setScale(2);
          setDisplayMessage("block");
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <PageLayout>
      <section className="relative overflow-x-clip h-[1400px] md:h-auto md:min-h-[800px] lg:min-h-[1100px] xl:min-h-[600px] 2xl:h-[800px]">
        <div className="absolute top-0 left-0 h-[80vh] p-[4%]">
          <Typography
            id="about-us"
            variant="h1"
            component="h2"
            className="gradient-text"
            sx={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: { xs: "3rem", md: "6rem" },
            }}
          >
            Optimizes academic excellence
          </Typography>
          <p className="text-quaternary-dark font-medium tracking-wider mt-8 max-w-sm lg:max-w-lg">
            Monetizes the correction of university research projects and
            facilitates direct collaboration between students and expert
            professors.
          </p>
        </div>

        <div className="top-0 left-0 relative h-[80vh] blur-3xl opacity-60 md:opacity-100">
          <span className="absolute -right-1/3 md:-right-[10%] top-[10%] rounded-full bg-secondary-dark w-96 h-96 md:w-[468px] md:h-[468px]"></span>
          <span className="absolute -right-1/3 md:right-[4%] -bottom-[10%] md:-bottom-[20%] rounded-full bg-tertiary-dark w-96 h-96 md:w-[468px] md:h-[468px]"></span>
        </div>

        <div className="top-[26%] sm:top-[22%] md:top-[35%] lg:top-[40%] xl:top-[32%] 2xl:top-[50%] left-0 absolute min-h-screen 2xl:min-h-[20vh] w-full flex flex-col sm:flex-wrap sm:flex-row justify-evenly items-center md:p-[2%]">
          <div className="sm:mb-3 relative rounded-xl p-1 h-64 w-64">
            <span className="absolute top-0 left-0 rounded-xl p-1 h-64 w-64 bg-black opacity-50 "></span>
            <p className="absolute top-0 left-0 rounded-xl p-8 h-64 w-64 text-quaternary-dark text-center text-xl">
              <span className="text-tertiary-dark">Enhance</span> your research
              with the direct experience of expert researchers,{" "}
              <span className="text-tertiary-dark">
                reviewing and refining your articles
              </span>
              .
            </p>
          </div>

          <div className="sm:mb-3 relative rounded-xl p-1 h-64 w-64">
            <span className="absolute top-0 left-0 rounded-xl p-1 h-64 w-64 bg-black opacity-50 "></span>
            <p className="absolute top-0 left-0 rounded-xl p-8 h-64 w-64 text-quaternary-dark text-center text-xl">
              <span className="text-tertiary-dark">Boost</span> the quality of
              your publications by reviewing your student articles to{" "}
              <span className="text-tertiary-dark">
                ensure accuracy, rigor and relevance
              </span>
              .
            </p>
          </div>

          <div className="sm:mb-3 relative rounded-xl p-1 h-64 w-64">
            <span className="absolute top-0 left-0 rounded-xl p-1 h-64 w-64 bg-black opacity-50 "></span>
            <p className="absolute top-0 left-0 rounded-xl p-8 h-64 w-64 text-quaternary-dark text-center text-xl">
              <span className="text-tertiary-dark">Empower</span> your learning
              with feedback providing critical insights to{" "}
              <span className="text-tertiary-dark">
                strengthen your research
              </span>
              .
            </p>
          </div>

          <div className="sm:mb-3 relative rounded-xl p-1 h-64 w-64">
            <span className="absolute top-0 left-0 rounded-xl p-1 h-64 w-64 bg-black opacity-50 "></span>
            <p className="absolute top-0 left-0 rounded-xl p-8 h-64 w-64 text-quaternary-dark text-center text-xl">
              <span className="text-tertiary-dark">Collaborate</span> with
              researchers to ensure that each study reflects the best of your{" "}
              <span className="text-tertiary-dark">academic capabilities</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto md:h-screen xl:h-auto w-full mt-[4%] flex flex-col md:flex-row p-[2%]">
        <div className="md:w-1/2 h-[90vh] md:h-[100vh] xl:h-[100vh] 2xl:h-[30vh] p-[4%]">
          <Typography
            id="services"
            variant="h3"
            component="h6"
            className="gradient-text"
            sx={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: { xs: "4rem", md: "6rem" },
            }}
          >
            Write and review in one place...
          </Typography>
          <p className="text-quaternary-dark font-medium tracking-wider mt-8 max-w-sm md:max-w-md">
            You can write articles from scratch and share them with recognized
            researchers, so you can have a rating and comments on them.
          </p>
        </div>

        <div className="relative md:w-1/2 h-[85vh] md:h-[100vh] xl:h-[100vh] 2xl:h-[30vh]">
          <span className="absolute md:top-[8%] left-[4%] md:left-0 rounded-3xl h-[100%] md:h-[80%] w-[90%] bg-black opacity-50 shadow-2xl"></span>
          <p className="absolute md:top-[8%] left-[4%] md:left-0 rounded-3xl h-[100%] md:h-[80%] w-[90%] text-quaternary-dark text-xs lg:text-base xl:text-xl p-[2%] md:p-[4%]">
            Research represents the driving force of human knowledge, a
            systematic and rigorous process that seeks to discover, interpret
            and transform reality. Through scientific methods and analysis,
            research explores from the deepest{" "}
            <span className="effect-writing">
              foundations of nature to the complex webs of society.
            </span>
          </p>
          <div className="absolute top-[40%] left-0 h-[40%] w-[90%] flex flex-col justify-center items-center ml-[4%] md:ml-0">
            <Box
              sx={{
                transition:
                  "transform 1s ease, opacity 1s ease, visibility 1s ease",
                position: "relative",
                display: "inline-flex",
                scale: `${scale}`,
                color: "#FF6969",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={progress}
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
                <Typography variant="caption" component="div">{`${Math.round(
                  progress
                )}%`}</Typography>
              </Box>
            </Box>
            <span
              className={`bg-secondary-dark ${displayMessage} transition-all`}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "transparent",
                  color: "#FFF5E1",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {new Date().toDateString()}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <b>Dr. Oliver Kensington</b>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>Researcher</Typography>
                  <Typography variant="body2">
                    The methodological approach of this study is sound and
                    well-founded, but it would be beneficial to include a more
                    detailed discussion of potential limitations and how they
                    might affect the interpretation of the results.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="inherit">
                    <b>Learn More</b>
                  </Button>
                </CardActions>
              </Card>
            </span>
          </div>
        </div>
      </section>

      <section className="mt-[5%] md:mt-0 relative h-[40vh] md:h-[55vh] lg:h-[70vh] xl:h-[70vh] 2xl:h-[20vh]">
        <div className="w-full h-full top-0 left-0 relative blur-3xl opacity-60 md:opacity-100 overflow-clip">
          <span className="absolute left-0 -bottom-[70%] md:-bottom-[20%] rounded-full bg-tertiary-dark w-96 h-96 md:w-[468px] md:h-[468px]"></span>
          <span className="absolute -left-[20%] -bottom-[20%] md:bottom-0 rounded-full bg-secondary-dark w-96 h-96 md:w-[468px] md:h-[468px]"></span>
        </div>

        <div className="w-full absolute top-0 left-0 h-auto md:h-[20vh] p-[4%]">
          <Typography
            id="contact-us"
            variant="h5"
            className="gradient-text"
            sx={{
              fontWeight: 900,
              textAlign: "center",
              letterSpacing: ".1rem",
              fontSize: { xs: "1rem", sm: "2rem", md: "4rem" },
            }}
          >
            Contact us through our social media channels...
          </Typography>
          <Box className="mt-[4%] md:mt-[10%] w-full h-auto">
            <ButtonGroup
              className="w-full flex justify-center items-center h-[20vh] md:h-1/5"
              size="large"
              aria-label="Large button group"
            >
              <Button
                color="inherit"
                sx={{ borderRadius: "10%" }}
                className="h-12 md:h-24 w-12 md:w-24 bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <FacebookIcon sx={{ scale: { xs: "2", md: "4" } }} />
              </Button>
              <Button
                color="inherit"
                sx={{ borderRadius: "10%" }}
                className="h-12 md:h-24 w-12 md:w-24 bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <InstagramIcon sx={{ scale: { xs: "2", md: "4" } }} />
              </Button>
              <Button
                color="inherit"
                sx={{ borderRadius: "10%" }}
                className="h-12 md:h-24 w-12 md:w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500"
              >
                <XIcon sx={{ scale: { xs: "2", md: "4" } }} />
              </Button>
              <Button
                color="inherit"
                sx={{ borderRadius: "10%" }}
                className="h-12 md:h-24 w-12 md:w-24 bg-gradient-to-r from-sky-500 to-indigo-500"
              >
                <LinkedInIcon sx={{ scale: { xs: "2", md: "4" } }} />
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
