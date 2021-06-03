import React, { useState, useEffect } from "react";
import useSWR from "swr";
import lz from "lzutf8";
// import styles from "../styles/Home.module.css";

import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";

import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  const [json, setJson] = useState(null);

  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      throw new Error("Failed to load data.");
    }

    const page = lz.decompress(lz.decodeBase64(data.identifier));
    return page;
  };

  const { data } = useSWR("/api/test", fetcher);

  // if (error) return <div>Failed to load users</div>;
  // if (!data) return <div>Loading...</div>;

  useEffect(() => {
    console.log(data);
    setJson(data);
    console.log(json);
  }, [data]);

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}
        enabled={enabled}
      >
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
