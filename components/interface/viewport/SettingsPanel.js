import React from "react";
import { StyledBox } from "../../styled/StyledBox";
import { StyledButton } from "../../styled/StyledButton";
import { StyledHeading } from "../../styled/StyledHeading";
import { QueryMethods, useEditor } from "@craftjs/core";

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
          css={{
            mt: 2,
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
          <StyledBox
            flex
            direction="column"
            css={
              {
                // paddingX: 3,
                // paddingY: 2,
              }
            }
          >
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
