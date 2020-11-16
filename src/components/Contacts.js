import React from "react";

import { IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Contacts() {
  return (
    <div className="container-contacts" id="contacts">
      <Container className="Base-container">
        <IconButton>
          <a href="https://github.com/rui-luis">
          <GitHubIcon />
          </a>
        </IconButton>
        <IconButton>
        <a href="https://linkedin.com/in/rui-luis">
          <LinkedInIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href="tel:+351918335438">
          <PhoneIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href="mailto:ruidcluis@pm.me">
          <EmailIcon />
          </a>
        </IconButton>
      </Container>
    </div>
  );
}

export default Contacts;
