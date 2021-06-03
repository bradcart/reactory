import React, { useState, useEffect } from "react";
import FetchProjectData from "../components/utils/FetchProjectData";
// import styles from "../styles/Home.module.css";

import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/interface/Toolbox";
import { SettingsPanel } from "../components/interface/SettingsPanel";
import { Topbar } from "../components/interface/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";

import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  const [json, setJson] = useState(null);

  const data = FetchProjectData();

  useEffect(() => {
    setJson(data);
  }, [data]);

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}>
        <Topbar />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
          <Grid item xs>
            {json ? (
              <Frame json={json}>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Card />
                </Element>
              </Frame>
            ) : null}
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
