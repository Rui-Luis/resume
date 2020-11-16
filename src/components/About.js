import React from "react";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";

function ComputerScience() {
  return (
    <div className="About-container">
      <ListItem>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <Typography>Studying Computer Science at UoPeople</Typography>
      </ListItem>
    </div>
  );
}

function Geology() {
  return (
    <div className="About-container">
      <ListItem>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <Typography>Studied Geology at FCUL</Typography>
      </ListItem>
    </div>
  );
}

function Bootcamp() {
  return (
    <div className="About-container">
      <ListItem>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <Typography>
          Studied Full-Stack Development at Academia de Código
        </Typography>
      </ListItem>
    </div>
  );
}

function Music() {
  return (
    <div className="About-container">
      <ListItem>
        <ListItemIcon>
          <MusicNoteIcon />
        </ListItemIcon>
        <Typography>Musician and Producer at Music Forge</Typography>
      </ListItem>
    </div>
  );
}

function Freelancer() {
  return (
    <div className="About-container">
      <ListItem>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <Typography>Freelancer at r4wbit</Typography>
      </ListItem>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="container-two">
      <List className="About-list">
        <ComputerScience />
        <Freelancer />
        <Bootcamp />
        <Music />
        <Geology />
      </List>
    </div>
  );
}

export default About;
