import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolbarGroup from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

import logo from "./logo.png";

function ButtonAppBar() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar className="Toolbar-style">
          <a href="#home">
            <img src={logo} className="Logo-top" alt="logo" />
          </a>

          <ToolbarGroup className="Toolbar-group">
            <a href="#about">
              <IconButton aria-label="about" className="About-icon">
                <InfoIcon />
              </IconButton>
            </a>
            <a href="#skills">
              <IconButton aria-label="skills" className="Skills-icon">
                <EmojiObjectsIcon />
              </IconButton>
            </a>

            <a href="#projects">
              <IconButton aria-label="projects" className="Projects-icon">
                <WorkIcon />
              </IconButton>
            </a>

            <a href="#contacts">
              <IconButton aria-label="contact" className="Contacts-icon">
                <ContactsIcon />
              </IconButton>
            </a>
          </ToolbarGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
