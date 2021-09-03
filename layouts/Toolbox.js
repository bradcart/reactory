import { Element, useEditor } from "@craftjs/core";
import { styled } from "../stitches.config";
import {
  Box,
  ReactoryBox,
  ReactorySection,
  ReactoryButton,
  ReactoryText,
  ReactoryImage,
  ReactoryCard,
} from "../components";

import { SectionIcon } from "../icons/SectionIcon";
import { ContainerIcon } from "../icons/ContainerIcon";
import { TextIcon } from "../icons/TextIcon";
import { ButtonIcon } from "../icons/ButtonIcon";
import { ImageIcon } from "../icons/ImageIcon";
import { CardIcon } from "../icons/CardIcon";

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
  cursor: "grab",

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
    <Box css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}>
      <Box
        css={{
          display: "grid",
          gridTemplateRows: "repeat(5, 1fr)",
          gridRowGap: "$3",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <ToolboxButton
          id="create__box"
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={ReactoryBox} padding={20} canvas />
            )
          }
        >
          <ContainerIcon width={60} />
          <StyledLabel htmlFor="create__box" role="button">
            Box
          </StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__section"
          ref={(ref) =>
            connectors.create(ref, <Element is={ReactorySection} canvas />)
          }
        >
          <SectionIcon width={78} />
          <StyledLabel htmlFor="create__section" role="button">
            Section
          </StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__text"
          ref={(ref) =>
            connectors.create(ref, <ReactoryText text="Hi world" />)
          }
        >
          <TextIcon width={74} />
          <StyledLabel htmlFor="create__text" role="button">
            Text
          </StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__button"
          ref={(ref) => connectors.create(ref, <ReactoryButton />)}
        >
          <ButtonIcon width={104} />
          <StyledLabel htmlFor="create__button" role="button">
            Button
          </StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__image"
          ref={(ref) => connectors.create(ref, <ReactoryImage />)}
        >
          <ImageIcon width={78} />
          <StyledLabel htmlFor="create__image" role="button">
            Image
          </StyledLabel>
        </ToolboxButton>
        <ToolboxButton
          id="create__card"
          ref={(ref) => connectors.create(ref, <ReactoryCard />)}
        >
          <CardIcon width={78} />
          <StyledLabel htmlFor="create__card" role="button">
            Card
          </StyledLabel>
        </ToolboxButton>
      </Box>
    </Box>
  );
};
