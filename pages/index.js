import React, { useState, useEffect } from "react";
import FetchProjectData from "../components/utils/FetchProjectData";
// import styles from "../styles/Home.module.css";

import { Heading, Grid, GridItem, Box } from "@chakra-ui/react";

import { Toolbox } from "../components/interface/Toolbox";
import { SettingsPanel } from "../components/interface/SettingsPanel";
import { Topbar } from "../components/interface/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";

import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  /* const [json, setJson] = useState(null);

  const data = FetchProjectData();

  useEffect(() => {
    setJson(data);
  }, [data]); */

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Heading textAlign="center">A super simple page editor</Heading>
      <Editor resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}>
        <Topbar />
        <Grid templateColumns="repeat(4, 1fr)" gap={3} pt={10}>
          <GridItem colSpan={1}>
            <Box shadow="base" rounded="md">
              <Toolbox />
              <SettingsPanel />
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            {/* {json ? ( */}
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
              </Element>
            </Frame>
            {/* ) : null} */}
          </GridItem>
        </Grid>
      </Editor>
    </div>
  );
}
