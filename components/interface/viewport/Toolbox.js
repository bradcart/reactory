import { Element, useEditor } from "@craftjs/core";
import { styled } from "../../../stitches.config";

import { Section } from "../../user/Section";
import { Container } from "../../user/Container";
import { Button } from "../../user/Button";
import { Text } from "../../user/Text";
import { Image } from "../../user/Image";
import { Card } from "../../user/Card";

import { StyledBox } from "../../styled/StyledBox";

import { SectionIcon } from "../../icons/SectionIcon";
import { ContainerIcon } from "../../icons/ContainerIcon";
import { TextIcon } from "../../icons/TextIcon";
import { ButtonIcon } from "../../icons/ButtonIcon";
import { ImageIcon } from "../../icons/ImageIcon";
import { CardIcon } from "../../icons/CardIcon";

import * as Label from "@radix-ui/react-label";

const StyledLabel = styled(Label.Root, {
  position: "absolute",
  fontSize: "14px",
  fontFamily: "$grifter",
  textTransform: "lowercase",
  transition: "$default",
  color: "$black100",
  opacity: 0,
  textAlign: "center",
  bottom: "5%",
});

const ToolboxButton = styled("button", {
  // Reset
  alignItems: "center",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "inline-flex",
  flexDirection: "column",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  position: "relative",
  width: 128,
  height: 96,
  backgroundColor: "transparent",
  color: "$white",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$white",
  borderRadius: "$3",
  opacity: 0.98,
  transition: "$default",
  cursor: "move",

  // Inner svg (all)
  "& svg": {
    transition: "$default",
    fill: "$white",
  },
  // Inner svg (ButtonIcon)
  "& .button-component-icon": {
    stroke: "$white",
    strokeWidth: 0.75,
    strokeMiterlimit: 10,
    transition: "$stroke",
  },
  // Hover effects
  "&:hover": {
    backgroundColor: "$white",
    color: "$black100",
    borderColor: "transparent",
    "& span": {
      opacity: 1,
    },
    "& svg": {
      fill: "$black100",
      transform: "translateY(-10px)",
    },
    "& .button-component-icon": {
      stroke: "$black100",
    },
  },
});

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    <StyledBox
      css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}
    >
      <StyledBox
        css={{
          display: "grid",
          gridTemplateRows: "repeat(5, 1fr)",
          gridRowGap: "$3",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <ToolboxButton
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Container} padding={20} canvas />
            )
          }
        >
          <ContainerIcon width={60} />
          <StyledLabel>Container</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Element is={Section} canvas />)}
        >
          <SectionIcon width={78} />
          <StyledLabel>Section</StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          <TextIcon width={74} />
          <StyledLabel>Text</StyledLabel>
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Button />)}>
          <ButtonIcon width={104} />
          <StyledLabel>Button</StyledLabel>
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Image />)}>
          <ImageIcon width={78} />
          <StyledLabel>Image</StyledLabel>
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Card />)}>
          <CardIcon width={78} />
          <StyledLabel>Card</StyledLabel>
        </ToolboxButton>
      </StyledBox>
    </StyledBox>
  );
};
