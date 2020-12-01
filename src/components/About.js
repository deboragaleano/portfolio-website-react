import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    letterSpacing: ".03em",
    lineHeight: "2.2em",
    fontSize: "1.2em",
  },
  line: {
    borderBottom: "1px solid #E8E8E8",
    margin: "40px 0 40px 0",
  },
});

const ReadMore = withStyles((theme) => ({
  root: {
    color: "#D2691E",
    fontFamily: "Abel",
    letterSpacing: "1px",
    transition: "all 0.5s ease",
    border: "1px solid #D2691E",
    "&:hover": {
      color: "#D2691E",
      transition: "all 1s ease",
    },
  },
}))(Button);

function About() {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const expandedText = (
    <>
      <p>
        I've recently participated in the{" "}
        <a
          href="https://the-collab-lab.codes/who-we-are/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Collab Lab
        </a>
        , building a React app and collaborating with an
        amazing team of talented developers and mentors. During 8 weeks, I’ve gained experience working remotely and pair programming. 
      </p>
      <p>
        In past positions, I worked as an assistant in international
        organizations like The World Bank and the Organization of American
        States in Washington D.C.
      </p>
      <p>
        I'm originally from Paraguay but I've been living in different countries
        around Europe for the past six years and now I live in Oslo with my
        partner. 
      </p>
    </>
  );

  return (
    <Container maxWidth="sm">
      <h2>ABOUT ME</h2>
      <div className={classes.text}>
        <p>
          I'm a career changer who discovered web development more than a year
          ago and never looked back. I'm now looking for my first job as a junior frontend developer or support engineer. </p>
        <p>
          I'm focusing on <strong>JavaScript</strong> and {" "}
          <strong>React</strong> at the moment and writing technical blogs on  {" "}
          <a
          href="https://dev.to/deboragaleano"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEV.to </a>
        </p>
        {expanded ? (
          expandedText
        ) : (
          <ReadMore onClick={() => setExpanded(true)}>READ MORE</ReadMore>
        )}
      </div>
      <div className={classes.line}></div>
    </Container>
  );
}

export { ReadMore, About };
