import React from "react";
import { Box, Flex, Button as RebassButton } from "rebass";
import StyledBox from "../styled/Box";
import StyledFlex from "../styled/Flex";
import StyledButton from "../styled/Button";
import Heading from "../styled/Heading";
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

  return selected ? (
    <StyledFlex
      height="auto"
      flexDirection="column"
      mt={2}
      bg="white"
      css={css({
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "transparent",
        overflow: "hidden",
      })}
    >
      <StyledFlex
        py={2}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="black"
      >
        <Heading level={5} color="white" css={css({ lineHeight: "150%" })}>
          SELECTED
        </Heading>
        <Heading level={5} color="white" css={css({ lineHeight: "150%" })}>
          {selected.name.toUpperCase()}
        </Heading>
      </StyledFlex>
      <StyledFlex px={3} py={2} flexDirection="column">
        {selected.settings && React.createElement(selected.settings)}
        {selected.isDeletable ? (
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
  ) : null;
};
