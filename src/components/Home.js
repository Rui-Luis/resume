import React from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div className="container" id="home">
      <Container className="Base-container">
        <Typography variant="h1" component="h2">
          Rui Luís
        </Typography>
        <Typography variant="h2" component="h2">
          Junior Full-Stack Developer
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
