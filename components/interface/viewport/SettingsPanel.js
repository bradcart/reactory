import React from "react";
import { styled } from "../../../stitches.config";
import { StyledBox } from "../../styled/StyledBox";
import { StyledButton } from "../../styled/StyledButton";
import { StyledHeading } from "../../styled/StyledHeading";
import { QueryMethods, useEditor } from "@craftjs/core";
import { StyledText } from "../../styled/StyledText";

const StyledBadge = styled("span", {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "inherit",
  justifyContent: "center",
  lineHeight: "1",
  verticalAlign: "middle",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&:disabled": {
    backgroundColor: "$slate3",
    pointerEvents: "none",
    color: "$slate8",
  },
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },

  // Custom
  backgroundColor: "$gray600",
  borderRadius: "$pill",
  color: "$black100",
  fontFamily: "$pragmatica",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  height: "$4",
  p: "$2",
  mb: "$3",
  fontSize: "$1",
});

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    // const currentNodeId = query.getEvent("selected").first();
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      // console.log(query.getEvent('selected').first());
      // console.log(state.events.selected.entries());
      // console.log(currentNodeId);
      // console.log(state.nodes);

      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        displayName: state.nodes[currentNodeId].data.displayName,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return (
    <StyledBox
      css={{ px: 10, pt: 40, height: "100%", backgroundColor: "$black100" }}
    >
      {selected ? (
        <StyledBox
          flex
          direction="column"
          align="center"
          css={{
            mt: 2,
            px: "$4",
            // borderRadius: 10,
            // borderStyle: "solid",
            // borderColor: "transparent",
            // overflow: "hidden",
          }}
        >
          {/* <StyledBox
            css={{
              display: "flex",
              paddingY: 2,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <Heading size={2} css={{ color: "white", lineHeight: "150%" }}>
              SELECTED
            </Heading>
            <Heading size={4} css={{ color: "white", lineHeight: "150%" }}>
              {selected.name.toUpperCase()}
            </Heading>
          </StyledBox> */}
          <StyledBadge>{selected.displayName}</StyledBadge>
          <StyledBox flex direction="column" css={{ mt: "$1" }}>
            {selected.settings && React.createElement(selected.settings)}
            {/* {selected.isDeletable ? (
              <StyledButton
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </StyledButton>
            ) : null} */}
          </StyledBox>
        </StyledBox>
      ) : null}
    </StyledBox>
  );
};
