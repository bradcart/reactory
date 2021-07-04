import React from "react";
import { QueryMethods, useEditor } from "@craftjs/core";
import { StyledBox } from "../../styled/Box/StyledBox";
import { Layers } from "@craftjs/layers";
// import { StyledButton } from "../../styled/StyledButton";
// import { StyledHeading } from "../../styled/StyledHeading";
// import { StyledText } from "../../styled/StyledText";

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
        nodeName:
          state.nodes[currentNodeId].data.custom &&
          state.nodes[currentNodeId].data.custom.nodeName,
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
      flex
      direction="column"
      css={{
        // justifyContent: "space-between",
        px: "$3",
        pt: 40,
        width: "100%",
        height: "100%",
        backgroundColor: "$black100",
      }}
    >
      {selected && selected.settings
        ? React.createElement(selected.settings)
        : null}
    </StyledBox>
  );
};
