import React from "react";
import StyledBox from "../../styled/Box";
import StyledFlex from "../../styled/Flex";
import StyledButton from "../../styled/Button";
import Heading from "../../styled/Heading";
import { QueryMethods, useEditor } from "@craftjs/core";
import css from "@styled-system/css";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").first();
    let selected;

    if (currentNodeId) {
      // console.log(query.getEvent('selected').first());
      // console.log(state.events.selected.entries());
      // console.log(currentNodeId);
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
    <StyledFlex height="auto" width="100%" flexDirection="column" bg="white">
      <StyledFlex
        py={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading level={5} css={css({ lineHeight: "150%" })}>
          SELECTED
        </Heading>
        <Heading level={5} css={css({ lineHeight: "150%" })}>
          {selected && selected.name.toUpperCase()}
        </Heading>
      </StyledFlex>
      <StyledFlex px={3} py={2} flexDirection="column">
        {selected &&
          selected.settings &&
          React.createElement(selected.settings)}
        {selected && selected.isDeletable ? (
          <StyledButton
            color="red"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </StyledButton>
        ) : null}
      </StyledFlex>
    </StyledFlex>
  );
};
