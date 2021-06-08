import React, { useState, useEffect } from "react";
import FetchProjectData from "../components/utils/FetchProjectData";
// import styles from "../styles/Home.module.css";

import { Box as RebassBox, Flex as RebassFlex } from "rebass";

import { Toolbox } from "../components/interface/Toolbox";
import { SettingsPanel } from "../components/interface/SettingsPanel";
import { Topbar } from "../components/interface/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";
// import { Grid } from "../components/user/Grid";

import { Editor, Frame, Element } from "@craftjs/core";

const texture = "/texture.png";

export default function Home() {
  /* const [json, setJson] = useState(null);

  const data = FetchProjectData();

  useEffect(() => {
    setJson(data);
  }, [data]); */

  return (
    <RebassBox
      width="100vw"
      height="100vh"
      sx={{
        position: "relative",
        backgroundImage: `url(${texture})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <Editor
        resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}
      >
        <Topbar />
        <RebassFlex
          sx={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          gap={3}
          pt={10}
        >
          {/* <GridItem colSpan={1}> */}
            <RebassBox>
              <Toolbox />
            </RebassBox>
          {/* </GridItem> */}
          {/* <GridItem colSpan={2}> */}
            {/* {json ? ( */}
            <div style={{ maxWidth: "70%" }}>
              <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Card />
                </Element>
              </Frame>
            </div>
            {/* ) : null} */}
          {/* </GridItem> */}
          {/* <GridItem colSpan={1}> */}
            <SettingsPanel />
          {/* </GridItem> */}
        </RebassFlex>
      </Editor>
    </RebassBox>
  );
}
