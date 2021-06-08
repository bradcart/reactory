import React from "react";
import { Box, Flex, Button as RebassButton } from "rebass";
import { useEditor } from "@craftjs/core";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
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

  return selected ? (
    <Box bg="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Flex flexDirection="column">
        <Flex px={1} justifyContent="space-between">
          <h3>Selected</h3>
          <h6>{selected.name}</h6>
        </Flex>
        <Flex flexDirection="column">
          {selected.settings && React.createElement(selected.settings)}
          {selected.isDeletable ? (
            <RebassButton
              colorScheme="red"
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </RebassButton>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  ) : null;
};
