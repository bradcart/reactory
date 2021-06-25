import React, { useState, useEffect } from "react";
// import fetchProjectData from "../components/utils/fetchProjectData";

import { StyledBox } from "../components/styled/StyledBox";

import { Page } from "../components/user/Page";
import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";
import { Image } from "../components/user/Image";

import { Editor, Frame, Element } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import { Viewport } from "../components/interface/viewport";
import { RenderNode } from "../components/interface/RenderNode";

// const texture = "/texture.png";

export default function Home() {
  /* const [json, setJson] = useState(null);

  const data = FetchProjectData();

  useEffect(() => {
    setJson(data);
  }, [data]); */

  return (
    <Editor
      resolver={{
        Page,
        Card,
        CardTop,
        CardBottom,
        Button,
        Text,
        Container,
        Image,
      }}
      onRender={RenderNode}
    >
      <StyledBox css={{ height: "100vh" }}>
        {/* {json ? ( */}
        <Viewport>
          <Frame>
            <Element is={Page} canvas>
              <Card />
            </Element>
          </Frame>
        </Viewport>
      </StyledBox>
      {/* ) : null} */}
      {/* <Layers /> */}
    </Editor>
  );
}
