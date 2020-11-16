import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, List } from "@material-ui/core";

function Skills() {
  return (
    <div className="container-skills" id="skills">
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <List>
          <Typography>HTML</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>CSS</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>JavaScript</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>Java</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>Spring</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>Kotlin</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />

          <Typography>SQL</Typography>

          <LinearProgress variant="buffer" value="50" valueBuffer="100" />
        </List>
      </Grid>
    </div>
  );
}

export default Skills;
