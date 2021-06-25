import React from "react";
import { useNode, Element } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { Text } from "./Text";
import { Button } from "./Button";
import {
  Container,
  ContainerSettings,
  ContainerDefaultProps,
} from "./Container";
import { Image } from "./Image";

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <StyledBox ref={connect}>{children}</StyledBox>;
};

CardTop.craft = {
  displayName: "CardTop",
  // rules: {
  // Only accept Text
  // canMoveIn: (incomingNode) => incomingNode.data.type == Text,
  // },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <StyledBox ref={connect}>{children}</StyledBox>;
};

CardBottom.craft = {
  displayName: "CardBottom",
  // rules: {
  // Only accept Buttons
  // canMoveIn: (incomingNode) => incomingNode.data.type == Button,
  // },
};

export const Card = (props) => {
  return (
    <Container flex={false} background="#fff">
      <Element id="image" is={CardTop} canvas>
        <Image width={300} />
        {/* <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} /> */}
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button size="md" color="black" text="Learn more" />
      </Element>
    </Container>
  );
};

Card.craft = {
  displayName: "Card",
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
