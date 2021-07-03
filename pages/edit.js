import React, { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
// import { Layers } from "@craftjs/layers";

import { Page } from "../components/user/Page";
import { Section } from "../components/user/Section";
import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
// import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Card, CardText, CardButtons } from "../components/user/Card";
import { Text } from "../components/user/Text";
import { Image } from "../components/user/Image";

import { Viewport } from "../components/interface/viewport";
import { RenderNode } from "../components/interface/RenderNode";
import { styled } from "../stitches.config";
// import fetchProjectData from "../components/utils/fetchProjectData";

// const texture = "/texture.png";

const ViewportOverlay = styled("div", {
  display: "none",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  px: "$2",
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  color: "$white",
  textAlign: "center",
  fontFamily: "$grifter",
  fontSize: "42px",
  "> span": {
    mt: "$2",
    fontFamily: "$ddin",
    fontSize: "24px",
  },
  "@media(max-width: 899px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ViewportWarning = () => (
  <ViewportOverlay>
    Your browser is too small
    <span>Resize your browser to be at least 900px to use this demo.</span>
  </ViewportOverlay>
);

export default function Edit() {
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
        CardText,
        CardButtons,
        Button,
        Text,
        Container,
        Image,
        Section,
      }}
      onRender={RenderNode}
    >
      <ViewportWarning />
      {/* {json ? ( */}
      <Viewport>
        <Frame>
          <Element is={Page} canvas>
            <Element
              is={Section}
              id="canvas__section"
              canvas
              justify="left"
              padding={0}
            >
              <Element is={Card} id="canvas__card" canvas />
            </Element>
          </Element>
        </Frame>
      </Viewport>
      {/* ) : null} */}
      {/* <Layers /> */}
    </Editor>
  );
}
