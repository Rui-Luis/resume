import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";

function RuiLuisMe() {
  return (
    <div className="Projects-container">
      <ListItem>
        <a href="https://www.ruiluis.me">
        <Typography>ruiluis.me</Typography>
        </a>
      </ListItem>
    </div>
  );
}

function RemindMeOften() {
  return (
    <div className="Projects-container">
      <ListItem>
      <a href="http://www.github.com/rui-luis/RemindMeOften">
        <Typography>RemindMeOften</Typography>
        </a>
      </ListItem>
    </div>
  );
}

function DominoesKotlin() {
  return (
    <div className="Projects-container">
      <ListItem>
        <a href="http://www.github.com/rui-luis/DominoesKotlin">
        <Typography>
          DominoesKotlin
        </Typography>
        </a>
      </ListItem>
    </div>
  );
}

function RuiLuisNet() {
  return (
    <div className="Projects-container">
      <ListItem>
        <a href="http://ruiluis.net">
        <Typography>ruiluis.net</Typography>
        </a>
      </ListItem>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="container-two">
      <List className="Projects-list">
        <RuiLuisMe />
        <RemindMeOften />
        <DominoesKotlin />
        <RuiLuisNet />
      </List>
    </div>
  );
}

export default Projects;
