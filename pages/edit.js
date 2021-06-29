import React, { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";
// import { Layers } from "@craftjs/layers";

import { Page } from "../components/user/Page";
import { Section } from "../components/user/Section";
import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
// import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Card } from "../components/user/Card";
import { Text } from "../components/user/Text";
import { Image } from "../components/user/Image";

import { Viewport } from "../components/interface/viewport";
import { RenderNode } from "../components/interface/RenderNode";
// import fetchProjectData from "../components/utils/fetchProjectData";

// const texture = "/texture.png";

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
        Button,
        Text,
        Container,
        Image,
        Section,
      }}
      onRender={RenderNode}
    >
      {/* {json ? ( */}
      <Viewport>
        <Frame>
          <Element is={Page} canvas>
            <Card />
          </Element>
        </Frame>
      </Viewport>
      {/* ) : null} */}
      {/* <Layers /> */}
    </Editor>
  );
}
