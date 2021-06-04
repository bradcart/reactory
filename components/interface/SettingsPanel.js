import React from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  VStack,
  Heading,
  Badge,
  Button as ChakraButton,
} from "@chakra-ui/react";
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
      <VStack>
        <HStack>
          <Heading size="sm">Selected</Heading>
          <Badge variant="solid">{selected.name}</Badge>
        </HStack>
        <VStack spacing={2}>
          {selected.settings && React.createElement(selected.settings)}
          {selected.isDeletable ? (
            <>
              <Spacer />
              <ChakraButton
                colorScheme="red"
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </ChakraButton>
            </>
          ) : null}
        </VStack>
      </VStack>
    </Box>
  ) : null;
};
