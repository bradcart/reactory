import React, { useState, useEffect } from "react";
// import fetchProjectData from "../components/utils/fetchProjectData";
// import styles from "../styles/Home.module.css";

import StyledBox from "../components/styled/Box";
import StyledGrid from "../components/styled/Grid";

import { Toolbox } from "../components/interface/viewport/Toolbox";
import { SettingsPanel } from "../components/interface/viewport/SettingsPanel";
import { Topbar } from "../components/interface/viewport/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";
// import { Grid } from "../components/user/Grid";

import { Editor, Frame, Element } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import { Viewport } from "../components/interface/viewport";
import { RenderNode } from "../components/interface/RenderNode";

const texture = "/texture.png";

export default function Home() {
  /* const [json, setJson] = useState(null);

  const data = FetchProjectData();

  useEffect(() => {
    setJson(data);
  }, [data]); */

  return (
    <StyledBox
      width="100vw"
      height="100%"
      position="relative"
      backgroundImage={`url(${texture})`}
      backgroundSize="14%"
      backgroundRepeat="repeat"
    >
      <Editor
        resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}
        onRender={RenderNode}
      >
        <Topbar />
        <StyledBox height="93vh">
          {/* <GridItem colSpan={1}> */}
          {/* </GridItem> */}
          {/* <GridItem colSpan={2}> */}
          {/* {json ? ( */}
          <Viewport>
            <Frame>
              <Element is={Container} canvas>
                <Card />
              </Element>
            </Frame>
          </Viewport>
        </StyledBox>
        {/* ) : null} */}
        {/* </GridItem> */}
        {/* <GridItem colSpan={1}> */}
        {/* <SettingsPanel /> */}
        {/* </GridItem> */}
        {/* <Layers /> */}
      </Editor>
    </StyledBox>
  );
}
