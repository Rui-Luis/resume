import React from "react";
import Container from "@material-ui/core/Container";
import { Button, Typography } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from "./Rui-Luis-Resume.pdf";

function Home() {
  return (
    <div className="container" id="home">
      <Container className="Base-container">
        <Typography variant="h1">
          Rui Luís
        </Typography>
        <Typography variant="h5">
          Junior Developer
        </Typography>
        <br/>
        <Button href={resume} className="Download-button" variant="contained" size="small" startIcon={<GetAppIcon />}>
          PDF
        </Button>
      </Container>
    </div>
  );
}

export default Home;
