import { Element, useEditor } from "@craftjs/core";
import { styled } from "../../../stitches.config";

import { Container } from "../../user/Container";
import { Button } from "../../user/Button";
import { Text } from "../../user/Text";
import { Image } from "../../user/Image";
import { Card } from "../../user/Card";

import { StyledBox } from "../../styled/StyledBox";

import { ContainerIcon } from "../../icons/ContainerIcon";
import { TextIcon } from "../../icons/TextIcon";
import { ButtonIcon } from "../../icons/ButtonIcon";
import { ImageIcon } from "../../icons/ImageIcon";
import { CardIcon } from "../../icons/CardIcon";

const ToolboxButton = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
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

  // Inner svg (all)
  "& svg": {
    transition: "$fill",
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
    "& svg": {
      fill: "$black100",
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
        </ToolboxButton>
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          <TextIcon width={74} />
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Button />)}>
          <ButtonIcon width={104} />
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Image />)}>
          <ImageIcon width={78} />
        </ToolboxButton>
        <ToolboxButton ref={(ref) => connectors.create(ref, <Card />)}>
          <CardIcon width={78} />
        </ToolboxButton>
      </StyledBox>
    </StyledBox>
  );
};
