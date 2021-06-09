import React, { useState, useEffect } from "react";
import FetchProjectData from "../components/utils/FetchProjectData";
// import styles from "../styles/Home.module.css";

import StyledBox from "../components/styled/Box";
import StyledGrid from "../components/styled/Grid";

import { Toolbox } from "../components/interface/Toolbox";
import { SettingsPanel } from "../components/interface/SettingsPanel";
import { Topbar } from "../components/interface/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";
// import { Grid } from "../components/user/Grid";

import { Editor, Frame, Element } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

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
      <Editor resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}>
        <Topbar />
        <StyledGrid
          gridTemplateColumns="1fr 6fr 1fr"
          gridGap={5}
        >
          {/* <GridItem colSpan={1}> */}
          <StyledBox>
            <Toolbox />
          </StyledBox>
          {/* </GridItem> */}
          {/* <GridItem colSpan={2}> */}
          {/* {json ? ( */}
          <StyledBox pt={40}>
            <Frame>
              <Element is={Container} canvas>
                <Card />
              </Element>
            </Frame>
          </StyledBox>
          {/* ) : null} */}
          {/* </GridItem> */}
          {/* <GridItem colSpan={1}> */}
          <SettingsPanel />
          {/* </GridItem> */}
        </StyledGrid>
        {/* <Layers /> */}
      </Editor>
    </StyledBox>
  );
}
