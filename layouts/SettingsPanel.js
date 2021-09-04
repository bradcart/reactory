import { createElement } from "react";
import { useEditor } from "@craftjs/core";
import { Box } from "../components";
// import { Layers } from "@craftjs/layers";

export const SettingsPanel = () => {
  const { selected } = useEditor((state, query) => {
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
    <Box
      flex
      direction="column"
      css={{
        px: "$3",
        py: 40,
        width: "100%",
        height: "100%",
        backgroundColor: "$black100",
        overflow: "auto",
      }}
    >
      {selected && selected.settings ? createElement(selected.settings) : null}
    </Box>
  );
};
